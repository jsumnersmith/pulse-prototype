import React, {Component} from 'react';
import _ from 'lodash';
import DirectoryHeader from './DirectoryHeader'
import { SearchWithFilters as SearchInput, Tag } from '@kickup/pulse-ui/src/deprecated';
import './directory.less';
import { Link } from 'react-router-dom';
import sampleUsers, {groups} from './users.js';
import Filters from './DirectoryFilters';
import { getItem, setItem } from 'timedstorage';
import Pager from './Pager.js';

const isLast = (index, arr) => {
  if (index !== arr.length - 1) {
    return false;
  }  else {
    return true;
  }
}

const initialColumns = ['email', 'name', 'canLogin', 'groups', 'permissions', 'restrictions', 'school', 'role', 'grade', 'other']

const getGroupId = (groupName) => groups.find(group => group.name === groupName).id;

export default class Directory extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'compact',
      listType: 'people',
    }
    this.updateView = this.updateView.bind(this);
    this.updateListType = this.updateListType.bind(this);
    this.setViewButtonClass = this.setViewButtonClass.bind(this);
  }
  updateView(view){
    this.setState({view});
  }
  updateListType(listType){
    this.setState({listType})
  }
  setViewButtonClass(view){
    return view === this.state.view ? 'btn-primary' : 'btn-default';
  }
  setListTypeButtonClass(listType){
    return listType === this.state.listType ? 'btn-primary' : 'btn-default';
  }
  render() {
    return (
      <div className="wrapper">
        <DirectoryHeader />
        <div className="block-flat">
          <div className="content">
            <PeopleList view={this.state.view} columnCallback={this.toggleColumn}/>
          </div>
        </div>
      </div>
    )
  }
};

const CheckBox = ({label, checked, onClick}) => (
  <label><input type="checkbox" onClick={() => onClick()} checked={checked} /> {label} </label>
)

class PeopleList extends Component {
  constructor(props){
    super(props);
    let columns = (getItem('directoryData') && getItem('directoryData').columns) || initialColumns;
    this.state = {
      showColumns: columns,
      showFilterModal: false,
      users: sampleUsers,
      currentPage: 0,
      checked: []
    }
    this.toggleColumn = this.toggleColumn.bind(this);
    this.isColumnActive = this.isColumnActive.bind(this);
    this.checkPermission = this.checkPermission.bind(this);
    this.getColSpan = this.getColSpan.bind(this);
    this.sortUsers = this.sortUsers.bind(this);
    this.sortUsersByGroups = this.sortUsersByGroups.bind(this);
    this.sortUsersByPermission = this.sortUsersByPermission.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.filterUsers = this.filterUsers.bind(this);
    this.isChecked = this.isChecked.bind(this);
    this.toggleAllChecked = this.toggleAllChecked.bind(this);
    this.setChecked = this.setChecked.bind(this);
    this.areAllChecked = this.areAllChecked.bind(this);
    this.getUserMeta = this.getUserMeta.bind(this);
    this.isMatch = this.isMatch.bind(this);
    this.changePage = this.changePage.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }
  toggleColumn(name){
    let {showColumns} = this.state;
    if (showColumns.includes(name)){
      showColumns = showColumns.filter(column => column !== name);
    } else {
      showColumns = showColumns.concat([name]);
    }
    setItem('directoryData', {columns: showColumns}, 3600000);
    this.setState({showColumns});
  }
  checkPermission(user, permission){
    return user.permissions && user.permissions.includes(permission);
  };
  isColumnActive(name){
    let {showColumns} = this.state;
    return showColumns.includes(name);
  }
  getColSpan(kind){
    let expectedCols = [];
    if (kind === 'user'){
      expectedCols = ['email','name', 'actions']
    } else if (kind === 'permissions') {
      return this.state.showColumns.includes('permissions') ? 6 : 0;
    } else if (kind === 'attributes') {
      expectedCols = ["school", "grade", "role", "other"];
    }
    return (this.state.showColumns.filter(col => expectedCols.includes(col)).length + 1);
  }
  showCols(kind){
    if (kind === 'user'){
      return ['email','name', 'canLogin'].filter(col => this.state.showColumns.includes(col)).length > 0;
    } else if (kind === 'permissions') {
      return this.state.showColumns.includes('permissions');
    } else if (kind === 'attributes') {
      return ["school", "grade", "role", "other"].filter(col => this.state.showColumns.includes(col)).length > 0;
    } else if (kind === 'restrictions') {
      return this.state.showColumns.includes('restrictions');
    }
  }
  getPermsColWidth(){
    return (this.state.showColumns.filter(col => ['email','name', 'canLogin'].find(col)).length() + 1);
  }
  sortUsers(prop, dir){
    let {users} = this.state;
    users = _.orderBy(users, [prop], [dir]);
    this.setState({users});
  }
  sortUsersByGroups(){
    let {users} = this.state;
    users = _.orderBy(users, ['groups'], ['desc']);
    this.setState({users});
  }
  sortUsersByPermission(permission){
    let {users} = this.state;
    users = _.orderBy(users, user => user.permissions.includes(permission), 'desc');
    this.setState({users});
  }
  searchUsers(e){
    let search = e.target.value;
    let users = sampleUsers.filter(user => JSON.stringify(user).match(search));
    this.setState({users});
  }
  filterUsers(filters){
    let {users} = this.state;
    users = users.filter(user =>this.isMatch(user, filters));
    this.setState({users});
  }
  getUserMeta(user){
    let meta = [];
    function metaString(metaTypes = []){
      metaTypes.map(metaItem => {
        if(user[metaItem]){
          meta.push({type: metaItem, name: user[metaItem]})
        }
        return null;
      });
    }
    function metaArray(metaTypes = []){
      metaTypes.map((metaType) => {
         if (user[metaType]){
          user[metaType].map((item) => {
            return meta.push({type: metaType, name: item})
          })
        }
        return null;
      });
    }
    metaString(['school', 'grade', 'role']);
    metaArray(['permssions', 'groups']);
    return meta;
  }
  isMatch(user, filters){
    // const filterGroupCount = _(filters).groupBy('type').keys().value().length;
    // const userMeta = this.getUserMeta(user);
    // const matches =  _(filters)
    //   .groupBy('type')
    //   .map((values, name) => {
    //     let matchedValues = values.map(value => _.includes(userMeta, value))
    //     return matchedValues;
    //   })
    //   .flatten()
    //   .filter(item => {
    //     return item !== false
    //   })
    //   .value()
    // return matches.length === filterGroupCount;

    // Couldn't make it work. :( -J
    return true;
  }

  setChecked(id){
    let {checked} = this.state;
    if(checked.length === sampleUsers.length){
      this.setState({checked: [id]})
    } else if (checked.includes(id)){
      this.setState({checked: checked.map(item => item !== id)});
    } else {
      this.setState({checked: checked.concat([id])})
    }
  }
  toggleAllChecked(){
    if(this.state.checked.length === sampleUsers.length){
      this.setState({checked: []})
    } else {
      this.setState({checked: sampleUsers.map(user => user.id)});
    }
  }
  isChecked(id){
    let {checked} = this.state;
    return checked.includes(id);
  }
  areAllChecked(){
    return this.state.checked.length === sampleUsers.length;
  }
  changePage(page){
    this.setState({currentPage: page})
  }
  getUsers(){
    console.log("Getting Users. Page is ", this.state.currentPage)
    let start = this.state.currentPage * 10;
    let end = start + 10;
    return this.state.users.slice(start, end);
  }
  render(){
    const {view} = this.props;
    return (
      <div>
        <div className="directory-search">
          <div className="directory-search__input" style={{marginRight: 5}}>
            <SearchInput
              onChange={this.searchUsers}
            />
          </div>
          <div className="directory-search__filters">
            <div className="btn-group">
              <button className="btn btn-default" data-toggle="dropdown"><i className="fa fa-columns"/> Show <i className="fa fa-caret-down"/></button>
              <ul className="dropdown-menu">
                <li><a><CheckBox
                  label="Email"
                  checked={this.isColumnActive('email')}
                  onClick={() => this.toggleColumn('email')}
                /></a></li>
                <li><a><CheckBox
                  label="Name"
                  checked={this.isColumnActive('name')}
                  onClick={() => this.toggleColumn('name')}
                /></a></li>
                <li><a><CheckBox
                  label="Groups"
                  checked={this.isColumnActive('groups')}
                  onClick={() => this.toggleColumn('groups')}
                /></a></li>
                <li><a><CheckBox
                  label="Permissions"
                  checked={this.isColumnActive('permissions')}
                  onClick={() => this.toggleColumn('permissions')}
                /></a></li>
                <li><a><CheckBox
                  label="School"
                  checked={this.isColumnActive('school')}
                  onClick={() => this.toggleColumn('school')}
                /></a></li>
                <li><a><CheckBox
                  label="Role"
                  checked={this.isColumnActive('role')}
                  onClick={() => this.toggleColumn('role')}
                /></a></li>
                <li><a><CheckBox
                  label="Grade"
                  checked={this.isColumnActive('grade')}
                  onClick={() => this.toggleColumn('grade')}
                /></a></li>
                <li><a><CheckBox
                  label="Other Attribute"
                  checked={this.isColumnActive('other')}
                  onClick={() => this.toggleColumn('other')}
                /></a></li>
                <li><a><CheckBox
                  label="Data Restrictions"
                  checked={this.isColumnActive('restrictions')}
                  onClick={() => this.toggleColumn('restrictions')}
                /></a></li>
              </ul>
            </div>
            <div className="btn-group">
              <button className={`btn btn-default ${this.state.checked && this.state.checked.length > 1 && 'btn-disabled'}`} data-toggle="dropdown" title={this.state.checked && this.state.checked.length < 2 ? 'Select some users to perform bulk actions' : ''} disabled={this.state.checked && this.state.checked.length < 2}><i className="fa fa-bolt"/> Bulk Actions <i className="fa fa-caret-down"/></button>
              <ul className="dropdown-menu">
                <li><div style={{padding:'5px 20px'}}><label>Selected {this.state.checked.length} of {sampleUsers.length}.</label><br/>{ sampleUsers.length > this.state.checked.length && <button className="btn btn-xs"> onClick={this.toggleAllChecked}>Select all {sampleUsers.length}</button>}</div></li>
                <li className="divider"></li>
                <li><a><i className="fa fa-lock circle-icon--small circle-icon--no-border" style={{marginRight: 5}}/> <strong>Update Permissions</strong></a></li>
                <li><a><i className="fa fa-group circle-icon--small circle-icon--no-border" style={{marginRight: 5}}/> <strong>Update Groups</strong></a></li>
                <li><a><i className="fa fa-times circle-icon--small circle-icon--no-border" style={{marginRight: 5}}/> <strong>Delete Users</strong></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{marginTop: 10}}>
          <Filters onChange={(filters) => {this.filterUsers(filters)}}/>
        </div>
        <div>

        </div>
        <div className="directory-table-wrapper">
        <table className="no-border">
          <thead className="no-border directory-table-header">
            <tr>
              <th colSpan="1"><i className="fa fa-check circle-icon--small"/></th>
              { this.showCols('user') && <th colSpan={this.getColSpan('user')}><i className="fa fa-user circle-icon--small"/> User</th>}
              { this.showCols('permissions') && <th colSpan={this.getColSpan('permissions')}><i className="fa fa-unlock circle-icon--small"/> Permissions</th>}
              { this.showCols('attributes') && <th colSpan={this.getColSpan('attributes')}><i className="fa fa-tags circle-icon--small"/> Attributes</th>}
              { this.showCols('restrictions') && <th colSpan="1"><i className="fa fa-lock circle-icon--small"/></th> }
            </tr>
            <tr>
              <th><input type="checkbox" onChange={this.toggleAllChecked} checked={this.areAllChecked()}/></th>
              { this.isColumnActive('email') && <th onClick={() => this.sortUsers('email', 'asc')} className="clickable"><strong>Email <i className="fa fa-sort"/></strong></th> }
              { this.isColumnActive('name') && <th onClick={() => this.sortUsers('name', 'asc')} style={{minWidth: 100}} className="clickable"><strong>Name <i className="fa fa-sort"/></strong></th>}
              <th>Actions</th>
              { this.isColumnActive('groups') && <th style={{minWidth: 200}} onClick={this.sortUsersByGroups} className="clickable"><strong>Groups <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('permissions') && <th style={{minWidth: 68}} onClick={() => this.sortUsers('canLogin', 'desc')} className="clickable"><strong>Login <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('permissions') && <th style={{minWidth: 78}} onClick={() => this.sortUsersByPermission('Manage Reports')} className="clickable"><strong>Reports <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('permissions') && <th style={{minWidth: 70}} onClick={() => this.sortUsersByPermission('Manage Events')} className="clickable"><strong>Events <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('permissions') && <th style={{minWidth: 64}} onClick={() => this.sortUsersByPermission('Manage Users')} className="clickable"><strong>Users <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('permissions') && <th style={{minWidth: 117}} onClick={() => this.sortUsersByPermission('Manage Shared Links')} className="clickable"><strong>Shared Links <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('permissions') && <th style={{minWidth: 123}} onClick={() => this.sortUsersByPermission('View History Pages')} className="clickable"><strong>History Pages <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('school') && <th style={{minWidth: 94}} onClick={() => this.sortUsers('school', 'asc')} className="clickable"><strong>School <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('role') && <th style={{minWidth: 94}} onClick={() => this.sortUsers('role', 'asc')} className="clickable"><strong>Role <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('grade') && <th style={{minWidth: 94}} onClick={() => this.sortUsers('grade', 'asc')} className="clickable"><strong>Grades <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('other') && <th style={{minWidth: 123}} onClick={() => this.sortUsers('other', 'asc')} className="clickable"><strong>Other Attribute <i className="fa fa-sort"/></strong></th>}
              { this.isColumnActive('restrictions') && <th style={{minWidth: 114}} onClick={this.sortUsersByRestrictions} className="clickable"><strong>Restrictions <i className="fa fa-sort"/></strong></th>}
            </tr>
          </thead>
          <tbody className="no-border-y">
            {
              this.getUsers().map(user => <tr>
                <td><input type="checkbox" checked={this.isChecked(user.id)} onChange={() => this.setChecked(user.id)}/></td>
                { this.isColumnActive('email') && <td><strong><Link to={`/directory/profile/${user.id}`}>{user.email}</Link></strong></td>}
                { this.isColumnActive('name') && <td><strong><Link to={`/directory/profile/${user.id}`}>{user.name}</Link></strong></td> }
                <td><Link to={`/directory/edit/${user.id}`} className="btn btn-sm btn-primary btn-trans"><i className="fa fa-pencil" />Edit</Link></td>
                { this.isColumnActive('groups') && <td>{user.groups.map((group, index) => <Link to={`/directory/groups/edit/${getGroupId(group)}`}>{group}{!isLast(index, user.groups) && ', ' }</Link>)}</td>}
                { this.isColumnActive('permissions') && <td className="text-center">{user.canLogin ? <i className="fa fa-check green" />: <i className="fa fa-minus-circle red-text"/> }</td>}
                { this.isColumnActive('permissions') && <td className={"text-center"}>{this.checkPermission(user, 'Manage Reports') && <i className="fa fa-check green" />}</td>}
                { this.isColumnActive('permissions') && <td className={"text-center"}>{this.checkPermission(user, 'Manage Events') && <i className="fa fa-check green" />}</td>}
                { this.isColumnActive('permissions') && <td className={"text-center"}>{this.checkPermission(user, 'Manage Users') && <i className="fa fa-check green" />}</td>}
                { this.isColumnActive('permissions') && <td className={"text-center"}>{this.checkPermission(user, 'Manage Shared Links') && <i className="fa fa-check green" />}</td>}
                { this.isColumnActive('permissions') && <td className={"text-center"}>{this.checkPermission(user, 'View History Pages') && <i className="fa fa-check green" />}</td>}
                { this.isColumnActive('school') && <td><Tag name={`${user.school}`}/></td>}
                { this.isColumnActive('role') && <td><Tag name={`${user.role}`}/></td>}
                { this.isColumnActive('grade') && <td><Tag name={`${user.grade}`}/></td>}
                { this.isColumnActive('other') && <td></td>}
                { this.isColumnActive('restrictions') && <td className={view === 'compact' && "text-center"}><Restrictions user={user} /></td> }
              </tr>
              )
            }
          </tbody>
        </table>
        </div>
        <Pager
          pages={[0,1]}
          currentPage={this.state.currentPage}
          changePage={this.changePage}
        />
      </div>
    )
  }
}


const Restrictions = ({user}) => (
  <div>
    {user.restrictions.length > 0 &&
      <i className="fa fa-lock circle-icon--small circle-icon--no-border orange white-text" data-placement="top" data-toggle="popover" data-trigger="hover" title={`Restrictions for ${user.name}`} data-content={`This user has been restricted to just see report data related to: ${user.restrictions.map((restriction, index) => restriction.value + (index !== user.restrictions.length - 1 ? ', ' : ''))}. Visit the edit page for this user to edit these restrictions.`}/>
    }
  </div>
)
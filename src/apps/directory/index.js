import React, {Component} from 'react';
import DirectoryHeader from './DirectoryHeader'
import { SearchWithFilters as SearchInput, Tag } from '@kickup/pulse-ui/src/deprecated';
import './directory.less';
import { Link } from 'react-router-dom';
import sampleUsers, {groups, nonPeople} from './users.js';
import ListTable from '../../components/listTable';

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
            <div className="directory-toggles">
              <div>
                <label>Browse</label>
                <div className="directory-type-toggle btn-group" style={{marginLeft: 5}}>
                  <button className={`btn ${this.setListTypeButtonClass('people')}`} onClick={()=> this.updateListType('people')}><i className="fa fa-users" /> People</button>
                  <button className={`btn ${this.setListTypeButtonClass('other')}`} onClick={()=> this.updateListType('other')}><i className="fa fa-list" /> Other</button>
                </div>
              </div>
              <div>
                <label>View</label>
                <div className="directory-view-toggle btn-group" style={{marginLeft: 5}}>
                  <button className={`btn btn-sm ${this.setViewButtonClass('compact')}`} onClick={()=> this.updateView('compact')}><i className="fa fa-compress"/> Compact</button>
                  <button className={`btn btn-sm ${this.setViewButtonClass('full')}`} onClick={()=> this.updateView('full')}><i className="fa fa-expand"/> Full</button>
                </div>
              </div>
            </div>
            {
              this.state.listType === 'people' ?
                <PeopleList view={this.state.view} columnCallback={this.toggleColumn}/>
              :
                <OtherList view={this.state.view}/>
            }
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
    this.state = {
      showColumns: initialColumns,
      showFilterModal: false
    }
    this.toggleColumn = this.toggleColumn.bind(this);
    this.isColumnActive = this.isColumnActive.bind(this);
  }
  toggleColumn(name){
    let {showColumns} = this.state;
    if (showColumns.includes(name)){
      this.setState({showColumns: showColumns.filter(column => column !== name)});
    } else {
      this.setState({showColumns: showColumns.concat([name])});
    }
  }
  isColumnActive(name){
    let {showColumns} = this.state;
    return showColumns.includes(name);
  }
  render(){
    const {view} = this.props;
    return (
      <div>
        <div className="directory-search" style={{marginTop: 10}}>
          <div className="directory-search__input" style={{marginRight: 5}}>
            <SearchInput />
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
                  label="Can Login"
                  checked={this.isColumnActive('canLogin')}
                  onClick={() => this.toggleColumn('canLogin')}
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
                  label="Data Restrictions"
                  checked={this.isColumnActive('restrictions')}
                  onClick={() => this.toggleColumn('restrictions')}
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
              </ul>
            </div>
            <button className="btn btn-default" data-toggle="modal" data-target="#sample-modal"><i className="fa fa-tags"/> Filter</button>
          </div>
        </div>
        <table className="no-border">
          <thead className="no-border">
            <tr>
              { this.isColumnActive('email') && <th><strong>Email</strong></th> }
              { this.isColumnActive('name') && <th><strong>Name</strong></th>}
              { this.isColumnActive('canLogin') && <th><strong>Can Login</strong></th>}
              { this.isColumnActive('groups') && <th><strong>Groups</strong></th>}
              { this.isColumnActive('permissions') && <th><strong>Permissions</strong></th>}
              { this.isColumnActive('restrictions') && <th><strong>Data Restrictions</strong></th>}
              { this.isColumnActive('school') && <th><strong>School</strong></th>}
              { this.isColumnActive('role') && <th><strong>Role</strong></th>}
              { this.isColumnActive('grade') && <th><strong>Grades</strong></th>}
              { this.isColumnActive('other') && <th><strong>Other Attribute</strong></th>}
            </tr>
          </thead>
          <tbody className="no-border-y">
            {
              sampleUsers.slice(0,10).map(user => <tr>
                { this.isColumnActive('email') && <td><strong><Link to={`/directory/edit/${user.id}`}>{user.email}</Link></strong></td>}
                { this.isColumnActive('name') && <td><strong><Link to={`/directory/edit/${user.id}`}>{user.name}</Link></strong></td> }
                { this.isColumnActive('canLogin') && <td className="text-center">{user.canLogin ? <i className="fa fa-check green" />: <i className="fa fa-minus-circle red-text"/> }</td>}
                { this.isColumnActive('groups') && <td>{user.groups.map((group, index) => <Link to={`/directory/groups/edit/${getGroupId(group)}`}>{group}{!isLast(index, user.groups) && ', ' }</Link>)}</td>}
                { this.isColumnActive('permissions') && <td className={view === 'compact' && "text-center" }>
                  <Countable
                    kind="permissions"
                    user={user}
                    view={view}
                    icon={'unlock'}
                  />
                </td>}
                { this.isColumnActive('restrictions') && <td className={view === 'compact' && "text-center"}>
                  <Countable
                    kind="restrictions"
                    user={user}
                    view={view}
                    icon={'lock'}
                  />
                </td> }
                { this.isColumnActive('school') && <td><Tag name={`${user.school}`} iconName="building-o"/></td>}
                { this.isColumnActive('role') && <td><Tag name={`${user.role}`} iconName="book"/></td>}
                { this.isColumnActive('grade') && <td><Tag name={`${user.grade}`} iconName="users"/></td>}
                { this.isColumnActive('other') && <td>N/A</td>}
              </tr>
              )
            }
          </tbody>
        </table>
        <div className="modal full-width modal-background fade in" id="sample-modal" tabIndex="-1" role="dialog" style={{dispaly: 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header text-left" style={{paddingTop:40, paddingBottom: 0}}>
                <h3><i className="fa fa-tags circle-icon green" style={{marginRight: 5}}/> <strong>Filter Directory</strong></h3>
                <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
              </div>
              <div className="modal-body" style={{padding: 20}}>
                <div>
                  <FiltersView />
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-flat md-close" data-dismiss="modal">Apply Filters</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const OtherList = () => (
  <div>
    <div className="directory-search">
      <div className="directory-search__input">
        <SearchInput />
      </div>
    </div>
    <table className="no-border">
      <thead className="no-border">
        <tr>
          <th><strong>Name</strong></th>
          <th><strong>Attributes</strong></th>
        </tr>
      </thead>
      <tbody className="no-border-y">
        { nonPeople.map(item =>
          <tr>
            <td><Link to={`/directory/edit/entity/${item.id}`}><strong>{item.name}</strong></Link></td>
            <td>{item.attributes.map(attribute => <Tag name={`${attribute.type}: ${attribute.value}`} iconName="tag"/>)}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

const Countable = ({user, kind, view, icon = 'unlock'}) => (
  <div>
    {
      user.canLogin ?
        view === 'compact' ?
          <div className="circle-icon--small" style={{display: 'inline-block'}}><strong>{user[kind].length}</strong></div>
        :
          <div>
            {user[kind].map(item => <Tag name={item} iconName={icon}/>)}
          </div>
      :
        <span>N/A</span>
    }
  </div>
)

const FiltersView = () => (
  <div>
  <div className="row">
    <div className="col-md-4">
      <ListTable
        list={{
            title: 'Groups',
            items: [
              { name: 'English' },
              { name: 'Crocket Middle School' },
              { name: 'Nimitz High School' },
              { name: 'MacArthur High School' }
            ]
          }
        }
      />
    </div>
    <div className="col-md-4">
      <ListTable
        list={{
            title: 'Permissions',
            items: [
              { name: 'Edit Reports' },
              { name: 'View Reports' },
              { name: 'Edit Events' },
            ]
          }
        }
      />
    </div>
    <div className="col-md-4">
      <ListTable
        list={{
            title: 'School',
            items: [
              { name: 'Crocket Middle School' },
              { name: 'Nimitz High School' },
              { name: 'MacArthur High School' }
            ]
          }
        }
      />
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
      <ListTable
        list={{
            title: 'Role',
            items: [
              { name: 'English' }
            ]
          }
        }
      />
    </div>
    <div className="col-md-4">
      <ListTable
        list={{
            title: 'Grade',
            items: [
              { name: '12' },
              { name: '10' },
              { name: '6' }
            ]
          }
        }
      />
    </div>
  </div>
  </div>
)
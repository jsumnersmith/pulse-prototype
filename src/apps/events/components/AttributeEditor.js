import React from 'react';
import {Link} from 'react-router-dom';
import './attributeEditor.less';

export default () => (
  <div className="row">
    <div className="col-md-12">
      <h5 className="event-list-title" style={{background: "#1FAF84"}}><i className="fa fa-gear circle-icon--medium green"></i> <strong>Manage Meta Data Attributes</strong></h5>
      <div className="block-flat">
        <div className="content">
          <div>

          </div>
          <div style={{marginTop: 20, marginBottom: 20}}>
            <label>Attribute Name</label>
            <input className="form-control" defaultValue="Type of P.D."/>
          </div>
          <label>Options / Attribute Values</label>
          <div className="attribute-editor">
            <AttributeEditorItem value="PLC"/>
            <AttributeEditorItem value="Workshop"/>
            <AttributeEditorItem value="Coaching"/>
            <AttributeEditorItem value="EdCamp"/>
            <div className="buttons" style={{marginTop: 20}}>
              <a className="btn btn-primary btn-block btn-xl"><i className="fa fa-plus" /> Add Option</a>
            </div>
          </div>
          <div style={{marginTop:20}}>
            <Link to="/events/admin/manage/attributes" className="btn btn-success">Save</Link>
            <a className="btn btn-success btn-trans">Save and Continue Editing</a>
            <Link to="/events/admin/manage/attributes" className="btn btn-danger btn-trans">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AttributeEditorItem = ({value}) => (
  <div className="attribute-editor__item">
    <div className="attribute-editor__item-content">
      <span className="attribute-editor__move"><i className="fa fa-bars"></i></span>
      <div className="attribute-editor__input">
        <input className="form-control" defaultValue={value} />
      </div>
      <span className="attribute-editor__delete"><i className="fa fa-trash-o"></i></span>
   </div>
  </div>
);
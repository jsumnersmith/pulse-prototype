import React from 'react';
import './tags.css';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div clas="content">
        <div className="attribute-header">
          <div className="search-box text-center">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-search"></i></span>
              <input className="form-control search-box-input" type="text" placeholder="Search to filter tags" />
            </div>
          </div>
        </div>
        <div>
          <div className="attribute-value-list">
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="enough time" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
              <div className="collapse" id="collapseExample" style={{padding: 20}}>
                <label>Edit Tag Description</label><input className="form-control"  placeholder="Enter a description of this tag" />
              </div>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample2"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="time" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
              <div className="collapse" id="collapseExample2" style={{padding: 20}}>
                <label>Edit Tag Description</label><input className="form-control"  placeholder="Enter a description of this tag" />
              </div>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample3"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="differentiation" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
              <div className="collapse" id="collapseExample3" style={{padding: 20}}>
                <label>Edit Tag Description</label><input className="form-control"  placeholder="Enter a description of this tag" />
              </div>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="curriculum" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
              <div className="collapse" id="collapseExample4" style={{padding: 20}}>
                <label>Edit Tag Description</label><input className="form-control"  placeholder="Enter a description of this tag" />
              </div>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample5"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="testing" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
              <div className="collapse" id="collapseExample5" style={{padding: 20}}>
                <label>Edit Tag Description</label><input className="form-control"  placeholder="Enter a description of this tag" />
              </div>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="collaboration" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>        </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>        </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
            <div className="attribute-value-item" sortable="true" draggable="true">
              <i className="fa fa-chevron-right collapse-icon collapsed" style={{cursor:"pointer", marginLeft: 20}} data-toggle="collapse" data-target="#collapseExample4"></i>
              <h5 className="attribute-value-title">
                <input className="form-control"  value="Extra Tag Name" />
              </h5>
              <span className="meta" style={{display: "inline-block", marginLeft: 20}} data-toggle="popover" data-html="true" data-trigger="hover" data-content="<div><p><span className='orange'>30</span> responses tagged<br/>in the following reports:</p><ul><li className='meta'>Report 1</li><li className='meta'>Report 2</li></ul></div>" >
                <span className="orange">30</span> responses tagged
              </span>
              <a className="btn btn-sm btn-default" data-toggle="modal" data-target="#sample-merge-modal" style={{marginLeft: 10}}><i className="fa fa-code-fork" style={{cursor:"pointer"}} ></i> Merge</a>
              <a className="btn btn-sm btn-default"  data-toggle="modal" data-target="#sample-confirm-modal" style={{marginLeft: 10}}><i className="fa fa-trash-o" style={{cursor:"pointer"}}></i> Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="modal modal-background colored-header danger fade in" id="sample-confirm-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="text-center">Delete This Tag?</h3>
            <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <div className="i-circle danger"><i className="fa fa-tag"></i></div>
              <h3 style={{fontWeight: 700, display: "block"}}>There are <strong className="red-text">34</strong> responses tagged with Tag Name?</h3>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default btn-trans btn-flat md-close" data-dismiss="modal" >Cancel</button>
            <button type="button" className="btn btn-danger btn-flat md-close" data-dismiss="modal">Delete this tag</button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal modal-background colored-header success fade in" id="sample-merge-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="text-center">Merge Tags</h3>
            <a className="close" data-dismiss="modal" aria-hidden="true">×</a>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <h4 style={{color: "#1b9974", margin: "10px auto", fontWeight: 700}}>Merge</h4>
              <div style={{margin: 20}}>
                <span className="tag label  label-default">
                  <span className="tag-inner">
                    <i className="fa fa-tag"></i> enough time
                  </span>
                </span>
              </div>
              <h4 style={{color: "#1b9974", margin: "10px auto", fontWeight: 700}}>with</h4>
              <select className="form-control">
                <option>time</option>
                <option>collaboration</option>
                <option>curriculum</option>
                <option>differentiation</option>
                <option>testing</option>
              </select>
              <div style={{marginTop: 20}} className="text-left"><label >Updated Tag Name</label><input className="form-control" placeholder="time"/></div>
              <h3 style={{fontWeight: 700, marginTop: 20, display: "block"}}>This will affect <span style={{color: "#1b9974"}}>60</span> Responses</h3>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger btn-trans btn-flat md-close" data-dismiss="modal" >Cancel</button>
            <button type="button" className="btn btn-success btn-flat md-close" data-dismiss="modal">Merge these values</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
import React from 'react';
import './reportBuilder.css';

export default () => (
  <div className="report-builder">
    <div className="block-flat">
      <div>
        <div className="circle-icon yellow" style={{display: "inline-block", fontSize: 22, fontWeight: 700}}>4</div>
        <h3 className="report-builder-section-title" style={{display: "inline-block", marginLeft: 10, fontWeight: 700}}>Configure Report Content</h3>
      </div>
      <div className="section-builder">
        <div className="section-builder-editor">
          <span className="section-builder-editor-initial-content">Drag and drop a new section to get started.</span>
        </div>
        <div className="section-builder-toolbar">
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon section"></div>
            <span className="section-builder-new-title">New Section</span>
          </div>
          <hr />
          <h5 className="meta text-center">Available Widgets</h5>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon successes-and-needs"></div>
            <span className="section-builder-new-title">Successes and Needs</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon possible-leaders"></div>
            <span className="section-builder-new-title">Possible Leaders</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon heatmap"></div>
            <span className="section-builder-new-title">Heatmap</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon comparison-chart"></div>
            <span className="section-builder-new-title">Comparison Chart</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon interests"></div>
            <span className="section-builder-new-title">Interests</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon open-responses"></div>
            <span className="section-builder-new-title">Open Responses</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon multiple-choice"></div>
            <span className="section-builder-new-title">Multiple Choice</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon all-table"></div>
            <span className="section-builder-new-title">All Table</span>
          </div>
        </div>
      </div>
    </div>
    <div className="block-flat">
      <div>
        <div className="circle-icon yellow" style={{display: "inline-block", fontSize: 22, fontWeight: 700}}>4</div>
        <h3 className="report-builder-section-title" style={{display: "inline-block", marginLeft: 10, fontWeight: 700}}>Configure Report Content</h3>
      </div>
      <div className="section-builder">
        <div className="section-builder-editor">
          <div className="block-flat">
            <div className="input-group">
              <label>Section Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="section-builder-widget-area">
              <div className="section-builder-widget-area-drop-zone">
                <span className="section-builder-editor-initial-content">Drag and drop a widget to get started.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-builder-toolbar">
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon section"></div>
            <span className="section-builder-new-title">New Section</span>
          </div>
          <hr />
          <h5 className="meta text-center">Available Widgets</h5>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon successes-and-needs"></div>
            <span className="section-builder-new-title">Successes and Needs</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon possible-leaders"></div>
            <span className="section-builder-new-title">Possible Leaders</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon heatmap"></div>
            <span className="section-builder-new-title">Heatmap</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon comparison-chart"></div>
            <span className="section-builder-new-title">Comparison Chart</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon interests"></div>
            <span className="section-builder-new-title">Interests</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon open-responses"></div>
            <span className="section-builder-new-title">Open Responses</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon multiple-choice"></div>
            <span className="section-builder-new-title">Multiple Choice</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon all-table"></div>
            <span className="section-builder-new-title">All Table</span>
          </div>
        </div>
      </div>
    </div>
    <div className="block-flat">
      <div>
        <div className="circle-icon yellow" style={{display: "inline-block", fontSize: 22, fontWeight: 700}}>4</div>
        <h3 className="report-builder-section-title" style={{display: "inline-block", marginLeft: 10, fontWeight: 700}}>Configure Report Content</h3>
      </div>
      <div className="section-builder">
        <div className="section-builder-editor">
          <div className="block-flat">
            <div className="input-group">
              <label>Section Title</label>
              <input type="text" className="form-control" value="I'm populated."/>
            </div>
            <div className="section-builder-widget-area">
              <div className="section-builder-new" draggable="true">
                <div className="section-builder-new-header">
                  <div className="section-builder-widget-icon"></div>
                  <span className="section-builder-widget-title">Heatmap</span>
                </div>
              </div>
              <div className="section-builder-new" draggable="true">
                <div className="section-builder-new-header">
                  <div className="section-builder-widget-icon"></div>
                  <span className="section-builder-widget-title">Heatmap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-builder-toolbar">
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon section"></div>
            <span className="section-builder-new-title">New Section</span>
          </div>
          <hr />
          <h5 className="meta text-center">Available Widgets</h5>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon successes-and-needs"></div>
            <span className="section-builder-new-title">Successes and Needs</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon possible-leaders"></div>
            <span className="section-builder-new-title">Possible Leaders</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon heatmap"></div>
            <span className="section-builder-new-title">Heatmap</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon comparison-chart"></div>
            <span className="section-builder-new-title">Comparison Chart</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon interests"></div>
            <span className="section-builder-new-title">Interests</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon open-responses"></div>
            <span className="section-builder-new-title">Open Responses</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon multiple-choice"></div>
            <span className="section-builder-new-title">Multiple Choice</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon all-table"></div>
            <span className="section-builder-new-title">All Table</span>
          </div>
        </div>
      </div>
    </div>

    <div className="block-flat">
      <div>
        <div className="circle-icon yellow" style={{display: "inline-block", fontWize: 22, fontWeight: 700}}>4</div>
        <h3 className="report-builder-section-title" style={{display: "inline-block", marginLeft: 10, fontWeight: 700}}>Configure Report Content</h3>
      </div>
      <div className="section-builder">
        <div className="section-builder-editor">
          <div className="block-flat closed" draggable="true">
            <div className="header">
              <div className="actions">
                <a href="#" className="minimize">
                  <i className="fa fa-chevron-down"></i>
                </a>
                <a href="#" className="close-down">
                  <i className="fa fa-times"></i>
                </a>
              </div>
              <div className="input-group text-left">
                <label>Section Title</label>
                <input type="text" className="form-control" value="I'm the first section."/>
              </div>
            </div>
            <div className="content" style={{display: "none"}}>
              <div className="section-builder-widget-area">
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
                <div className="section-builder-new" draggable="true">
                <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-flat" draggable="true">
            <div className="header">
              <div className="actions">
                <a href="#" className="minimize">
                  <i className="fa fa-chevron-down"></i>
                </a>
                <a href="#" className="close-down">
                  <i className="fa fa-times"></i>
                </a>
              </div>
              <div className="input-group text-left">
                <label>Section Title</label>
                <input type="text" className="form-control" value="I'm the second section."/>
              </div>
            </div>
            <div className="content">
              <div className="section-builder-widget-area">
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-builder-toolbar">
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon section"></div>
            <span className="section-builder-new-title">New Section</span>
          </div>
          <hr />
          <h5 className="meta text-center">Available Widgets</h5>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon successes-and-needs"></div>
            <span className="section-builder-new-title">Successes and Needs</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon possible-leaders"></div>
            <span className="section-builder-new-title">Possible Leaders</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon heatmap"></div>
            <span className="section-builder-new-title">Heatmap</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon comparison-chart"></div>
            <span className="section-builder-new-title">Comparison Chart</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon interests"></div>
            <span className="section-builder-new-title">Interests</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon open-responses"></div>
            <span className="section-builder-new-title">Open Responses</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon multiple-choice"></div>
            <span className="section-builder-new-title">Multiple Choice</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon all-table"></div>
            <span className="section-builder-new-title">All Table</span>
          </div>
        </div>
      </div>
    </div>

    <div className="block-flat">
      <div>
        <div className="circle-icon yellow" style={{display: "inline-block", fontSize: 22, fontWeight: 700}}>4</div>
        <h3 className="report-builder-section-title" style={{display: "inline-block", marginLeft: 10, fontWeight: 700}}>Configure Report Content</h3>
      </div>
      <div className="section-builder">
        <div className="section-builder-editor">
          <div className="block-flat closed" draggable="true">
            <div className="header">
              <div className="actions">
                <a href="#" className="minimize">
                  <i className="fa fa-chevron-down"></i>
                </a>
                <a href="#" className="close-down">
                  <i className="fa fa-times"></i>
                </a>
              </div>
              <div className="input-group text-left">
                <label>Section Title</label>
                <input type="text" className="form-control" value="I'm the first section."/>
              </div>
            </div>
            <div className="content" style={{"display": "none"}}>
              <div className="section-builder-widget-area">
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block-flat" draggable="true">
            <div className="header">
              <div className="actions">
                <a href="#" className="minimize">
                  <i className="fa fa-chevron-down"></i>
                </a>
                <a href="#" className="close-down">
                  <i className="fa fa-times"></i>
                </a>
              </div>
              <div className="input-group text-left">
                <label>Section Title</label>
                <input type="text" className="form-control" value="I'm the second section."/>
              </div>
            </div>
            <div className="content">
              <div className="section-builder-widget-area">
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                    <a className="section-builder-widget-btn" data-toggle="collapse" data-target="#next-config"><i className="fa fa-gear"></i></a>
                  </div>
                  <div id="next-config" className="collapse section-builder-widget-config">
                    <div className="input-group">
                      <label>Widget Name</label>
                      <input className="form-control" type="text"/>
                    </div>
                    <div className="input-group">
                      <label>
                        <input className="form-control" type="checkbox"/>
                        Sort topics alphabetically?
                      </label>
                    </div>
                    <a data-toggle="modal" data-target="#attributes" type="button" className="btn btn-default"><i className="fa fa-filter"></i> Set Data Filters</a>
                  </div>
                </div>
                <div className="section-builder-new" draggable="true">
                  <div className="section-builder-new-header">
                    <div className="section-builder-widget-icon"></div>
                    <span className="section-builder-widget-title">Heatmap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-builder-toolbar">
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon section"></div>
            <span className="section-builder-new-title">New Section</span>
          </div>
          <hr />
          <h5 className="meta text-center">Available Widgets</h5>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon successes-and-needs"></div>
            <span className="section-builder-new-title">Successes and Needs</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon possible-leaders"></div>
            <span className="section-builder-new-title">Possible Leaders</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon heatmap"></div>
            <span className="section-builder-new-title">Heatmap</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon comparison-chart"></div>
            <span className="section-builder-new-title">Comparison Chart</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon interests"></div>
            <span className="section-builder-new-title">Interests</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon open-responses"></div>
            <span className="section-builder-new-title">Open Responses</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon multiple-choice"></div>
            <span className="section-builder-new-title">Multiple Choice</span>
          </div>
          <div className="section-builder-new" draggable="true">
            <div className="section-builder-new-icon all-table"></div>
            <span className="section-builder-new-title">All Table</span>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="attributes" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog full-width">
        <div className="modal-content">
        <div className="modal-header">
          <button type="button " className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="list-table-wrapper report-builder-table-checklist" style={{marginBottom: 20}}>
                  <table className="list-table list-table--simple table-responsive no-border">
                    <thead className="no-border">
                      <tr className="list-table-header0">
                        <th>
                          <div>Available Data Sources</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="list-table-content">
                        <td className="list-table-content-column">
                          <div className="list-table-column-wrapper constrained">
                            <table className="list-table-column">
                              <tbody className="no-border-x no-border-y">
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>Belton Classroom Observation</strong></td><td></td>
                                </tr>
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>Belton Learning Walk</strong></td><td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
                <div className="list-table-wrapper report-builder-table-checklist">
                  <table className="list-table list-table--simple table-responsive no-border">
                    <thead className="no-border">
                      <tr className="list-table-header report-builder-table-header-checkbox">
                        <th><div><i className="fa fa-check-square blue" style={{paddingLeft: 8, paddingRight: 16}}></i>Schools</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="list-table-content">
                        <td className="list-table-content-column">
                          <div className="list-table-column-wrapper constrained">
                            <table className="list-table-column">
                              <tbody className="no-border-x no-border-y">
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>Belton MS/Freshman Center</strong></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
                <div className="list-table-wrapper report-builder-table-checklist">
                  <table className="list-table list-table--simple table-responsive no-border">
                    <thead className="no-border">
                      <tr className="list-table-header report-builder-table-header-checkbox">
                        <th><div><i className="fa fa-check-square blue" style={{paddingLeft: 8, paddingRight: 16}}></i>Other Attribute</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="list-table-content">
                        <td className="list-table-content-column">
                          <div className="list-table-column-wrapper constrained">
                            <table className="list-table-column">
                              <tbody className="no-border-x no-border-y">
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>BOSCO</strong></td>
                                </tr>
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>Belton HS</strong></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-4">
                <div className="list-table-wrapper report-builder-table-checklist">
                  <table className="list-table list-table--simple table-responsive no-border">
                    <thead className="no-border">
                      <tr className="list-table-header report-builder-table-header-checkbox">
                        <th><div><i className="fa fa-check-square blue" style={{paddingLeft: 8, paddingRight: 16}}></i>Another Attribute</div></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="list-table-content">
                        <td className="list-table-content-column">
                          <div className="list-table-column-wrapper constrained">
                            <table className="list-table-column">
                              <tbody className="no-border-x no-border-y">
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>Cambridge ES</strong></td>
                                </tr>
                                <tr className="report-builder-table-checklist-row">
                                  <td><i className="fa fa-square-o"></i></td><td><strong style={{fontSize: 14}}>Gladden ES</strong></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default btn-flat" data-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-success btn-flat" data-dismiss="modal">Proceed</button>
        </div>
        </div>
      </div>
    </div>
  </div>
);

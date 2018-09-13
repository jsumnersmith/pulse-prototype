import React from 'react';
import tokens from '@kickup/pulse-style-tokens';

export default () => (
  <div className="wrapper">
    <div className="block-flat">
      <div className="content">
        <div>
          <label>Multi-District User Acceptance Modal</label>
          <button className="btn btn-primary" data-toggle="modal" data-target="#mdu-acceptance-modal">Open Modal</button>
          <MDUAcceptanceModal />
        </div>
        <div>
          <label>Sample Error Modal</label>
          <button className="btn btn-primary" data-toggle="modal" data-target="#error-modal">Open Modal</button>
          <ErrorModal />
        </div>
      </div>
    </div>
  </div>
)

const MDUAcceptanceModal = () => (
   <div className="modal modal-background fade in" id="mdu-acceptance-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
    <div className="modal-dialog">
      <div className="modal-content" style={{padding: 20}}>
        <div className="modal-header text-left">
          <h3><i className="far fa-question circle-icon pulse-blue" style={{marginRight: 5}}/> <strong>You've been invited</strong></h3>
          <a className="close"  aria-hidden="true" data-dismiss="modal">×</a>
        </div>
        <div className="modal-body" style={{padding: "0 20px 20px"}}>
          <h4><strong>You've been invited to join the <span className="underline--green">Dallas ISD</span> organization in KickUp.</strong></h4>
          <hr />
          <p><i className="fa fa-info-circle orange"/> When accepting, you'll automatically logged into the new additional organization. Don't worry, you can switch back and forth between your new organizaiton and any organziation you're already a part of. To switch between organizations, click on your profile information in the top right corner of your screen.</p>
        </div>
        <div className="text-center" >
          <button className="btn btn-success" data-dismiss="modal"><i className="fa fa-check"/> Accept</button>
          <button className="btn btn-danger btn-trans" data-dismiss="modal"><i className="fa fa-times"/> Decline</button>
        </div>
      </div>
    </div>
  </div>
)

const ErrorModal = () => (
  <div className="modal modal-background fade in" id="error-modal" tabIndex="-1" role="dialog" style={{display: "none"}}>
   <div className="modal-dialog">
     <div className="modal-content" style={{padding: 20}}>
       <div className="modal-header text-left">
         <h3 style={{display: "flex", alignItems: 'center'}}><i className="far fa-surprise red" style={{marginRight: 10, color: tokens.colors.red, fontSize: 36 }}/> <strong> Oops! Something's not quite right.</strong></h3>
       </div>
       <div className="modal-body" style={{padding: "0 20px 20px"}}>
         <h4 style={{marginTop: 0}}><strong>Category of Error Goes Here</strong></h4>
         <p><i className="fa fa-info-circle orange"/> Error text goes here.</p>
       </div>
       <div className="text-center" >
         <button className="btn btn-primary btn-block" data-dismiss="modal">Action</button>
       </div>
     </div>
   </div>
 </div>
)
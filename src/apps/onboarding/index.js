import React from 'react';
import './onboarding.less';
import tokens from '@kickup/pulse-style-tokens';
import logo from '../../images/logo.png';

import { ContentBlock } from '../../componentLibrary/layout';
import { TextInput  } from '../../componentLibrary/input';
import  { Label, Paragraph } from '../../componentLibrary/text';
import  { Button } from '../../componentLibrary/button';

export default () => (
  <div>
    <div className="wrapper" style={{maxWidth: 600}}>
      <div className="text-center" style={{marginBottom: 20}}><img src={logo} alt="Kickup Logo" /></div>

      <Paragraph mb={3}>Welcome! You've been invited to join the <strong>--district_name--</strong> organization. The first step is to verify the email that you would like to use to access our platform.</Paragraph>

      <Label>Enter Your Email</Label>
      <TextInput mt={3} mb={4}/>
      <Button
        block
        icon="paper-plane"
        iconPosition="right"
        color="blue"
      >
        Send verification email
      </Button>
    </div>
    <div className="data-mountains"></div>
  </div>
)
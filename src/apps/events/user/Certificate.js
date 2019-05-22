import React from 'react';
import  tokens  from '@kickup/pulse-style-tokens';
import { Document, Page, Text, Image, Font } from '@react-pdf/renderer';
import moment from 'moment'
import styled from '@react-pdf/styled-components';
import logo from '../../../images/logo-large.png';
import icon from '../../../images/award-icon.png'

const lightOrange = "#FCE6DB";

Font.register({ family: 'TiemposHeadlineWeb', src: 'https://kickup.co/wp-content/themes/kickup/assets/fonts/TiemposHeadlineWeb-Bold.woff' });
Font.register({ family: 'Calibre', src: 'https://kickup.co/wp-content/themes/kickup/assets/fonts/CalibreWeb-Regular.woff' });

export default ({sampleEvent}) => (
  <Document>
    <Page orientation="landscape">
      <Wrapper>
        <Icon><Image src={icon}/></Icon>
        <Header>Certificate of Completion</Header>
        <Border />
        <Content>
          <Serif>Bella Smith</Serif>
          <Sans>Completed</Sans>
          <Serif>{sampleEvent.name}</Serif>
          <Sans>on</Sans>
          <Serif>{moment(sampleEvent.date).format("MMMM Do, YYYY")}</Serif>
        </Content>
        <Hours>
          <Text>{sampleEvent.hours} hours</Text>
        </Hours>
        <Footer>
          <Organization>
            Irving ISD
          </Organization>
          <Logo>
            <LogoText><Sans>Attendance confirmed through</Sans></LogoText>
            <LogoImage src={logo}/>
          </Logo>
        </Footer>
      </Wrapper>
    </Page>
  </Document>
);


const Wrapper = styled.View`
  color: ${tokens.colors.grayDark};
  font-family: TiemposHeadlineWeb;
  text-align: center;
  margin: auto ${tokens.spacing[7]}px;
  padding: ${tokens.spacing[7]}px;
  border: 5px solid ${tokens.colors.grayLight};
`

const Header = styled.Text`
  font-size: 32px;
  margin-bottom: 0;
`

const Border = styled.View`
  width: 50%;
  background: ${tokens.colors.orange};
  height: 5px;
  margin: 0 auto;
  transform: translateX(-100px);
`
const Serif = styled.Text`
  font-size: 16px;
`
const Sans = styled.Text`
  font-family: Calibre;
  font-size: 12px;
  color: ${tokens.colors.grayMediumDark};
`

const Content = styled.View`
  margin: ${tokens.spacing[7]}px 0;
`

const Hours = styled.View`
  margin: 0 auto ${tokens.spacing[7]}px;
  padding: ${tokens.spacing[3]}px;
  width: 25%;
  border: 3px solid ${tokens.colors.orange};
  background: ${lightOrange};
`

const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: bottom;
`

const Icon = styled.View`
  width: 60px;
  display: block;
  position:absolute;
  top: ${tokens.spacing[7]}px;
  left: ${tokens.spacing[7]}px;
`

const Logo = styled.View`
  display: flex;
  flex-direction: row;
  width: 290px;
  align-items: center;
`

const LogoImage = styled.Image`
  display: block;
  width: 125px;
  height: auto;
`
const LogoText = styled.View`
  display: block;
  width: 165px;
`

const Organization = styled.Text`
  text-align: left;
  width: 50%;
  color: ${tokens.colors.grayMediumDark};
`
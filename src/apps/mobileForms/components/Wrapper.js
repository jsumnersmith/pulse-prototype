import React from 'react';
import styled from 'styled-components';
import confetti from '../../../images/confetti.png';

const Wrapper = styled.div`
  overflow: auto;
  height: 100%;
  min-height: 100vh;
  background-image: url(${confetti}), linear-gradient(
    20deg,
    ${({theme}) => theme.colors.orange},
    ${({theme}) => theme.colors.gold},
    ${({theme}) => theme.colors.teal}
  );
  background-size: 100% auto;
  background-color: ${({theme}) => theme.colors.blue};
  @media (max-width: 500px) {
    background-image: linear-gradient(
      20deg,
      ${({theme}) => theme.colors.orange},
      ${({theme}) => theme.colors.gold},
      ${({theme}) => theme.colors.teal}
    );
  }
`;

const Inner = styled.div`
  width: 760px;
  max-width: 97%;
  padding: ${({theme})=> theme.space[5]}px;
  margin: ${({theme})=>theme.space[7]}px auto;
  background: ${({theme})=> theme.colors.white};
  @media (max-width: 500px) {
    padding-left: 0;
    padding-right: 0;
    margin: 1.5vw auto;
  }
`;

export default ({children, ...props}) => (
  <Wrapper {...props}>
    <Inner>
      {children}
    </Inner>
  </Wrapper>
);
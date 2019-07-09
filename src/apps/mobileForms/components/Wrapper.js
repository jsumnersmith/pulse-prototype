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
`;

const Inner = styled.div`
  width: 760px;
  max-width: 95%;
  padding: ${({theme})=> theme.space[5]}px;
  margin: ${({theme})=>theme.space[7]}px auto;
  background: ${({theme})=> theme.colors.white};
`;

export default ({children, ...props}) => (
  <Wrapper {...props}>
    <Inner>
      {children}
    </Inner>
  </Wrapper>
);
import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

const Option = styled.label`
  width: 100%;
  text-align: center;
  cursor:pointer;
  color: ${({theme}) => `${theme.colors.grayDark}`};
  text-transform: none;
  letter-spacing: 0px;
  transition: all .2s ease-in-out;
  padding: ${({theme}) => theme.space[1]}px;
  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
`;

const OptionWrapper = styled.div`
  padding: ${({theme}) => theme.space[4]}px;
  border: ${({theme}) => `solid transparent ${theme.space[1]}px`};
  background: ${({theme}) => `${theme.colors.grayLight}`};

  input:active ~ &, input:focus ~ & {
    background: ${({theme}) => `${chroma(theme.colors.blue).alpha(.1).css()}`};
    border-image-source: linear-gradient(
      20deg,
      ${({theme}) => theme.colors.orange},
      ${({theme}) => theme.colors.gold},
      ${({theme}) => theme.colors.teal}
    );
    border-image-slice: 1;
  };
  input:checked ~ & {
    background: ${({theme}) => `${chroma(theme.colors.blue).alpha(.1).css()}`};
  }

`;

const Matrix = styled.table`
  padding-left: 0;
  margin: 0;
  border: none;
`

const Row = styled.tr`
  border: none;
  background: transparent !important;
`;

const OptionCell = styled.td`
  padding: 0;
  border: none !important;
`

const MatrixItem = ({label, rubric, name}) => (
  <Row>
    <OptionCell>{label}</OptionCell>
    {
      rubric.map((item, index) => <OptionCell><RubricItem key={item + index} rubricText={item} name={name + label}/></OptionCell>)
    }
  </Row>

);

const RubricItem = ({rubricText, name}) => (
  <Option>
    <input type="radio" id={rubricText} name={name} />
    <OptionWrapper>
      {rubricText}
    </OptionWrapper>
  </Option>
)

export default ({choices = [], ...props, rubric=[], name="default"}) => (
  <Matrix {...props}>
    {choices.map((choiceText,index) => <MatrixItem key={`choice-${index}`} label={choiceText} rubric={rubric} name={name}/>)}
  </Matrix>
);
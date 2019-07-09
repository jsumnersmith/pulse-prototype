import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import MediaQuery from 'react-responsive'

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
  border: ${({theme}) => `solid ${theme.colors.grayLight} ${theme.space[1]}px`};
  &:hover {
    background: ${({theme}) => `${theme.colors.grayLight}`};
    border-color: ${({theme}) => `${theme.colors.grayMediumLight}`};
  }
  input:active ~ &, input:focus ~ & {
    box-shadow: ${({theme}) => `0 0 10px ${chroma(theme.colors.grayDark).alpha(.3).css()}`};
    -webkit-box-shadow: ${({theme}) => `0 0 10px ${chroma(theme.colors.grayDark).alpha(.3).css()}`};
    border-color: ${({theme}) => `${theme.colors.blue}`};

  };
  input:checked ~ & {
    border-color: ${({theme}) => `${theme.colors.blue}`};
  }

`;

const Matrix = styled.div`
  display: table;
  padding-left: 0;
  margin: 0;
  border: none;
  width: 100%;
  @media (max-width: 760px) {
    display: block;
    overflow: hidden;
  }
`

const Row = styled.div`
  display: table-row;
  border: none;
  background: transparent !important;
  @media (max-width: 760px) {
    display: block;
    & + & { margin-top: ${({theme}) => theme.space[3]}px;}
  }
`;

const DescriptionCell = styled.div`
  display: table-cell;
  padding: 0;
  border: none !important;
  @media (max-width: 760px) {
    display: block;
    padding: ${({theme}) => theme.space[2]}px;
  }
`
const OptionGroup = styled.div`
  display: table-row;
  @media (max-width: 760px) {
    display: flex;
    width: 100%;
  }
  @media (max-width: 500px) {
    display: block;
  }
`
const OptionCell = styled.div`
  display: table-cell;
  padding: 0;
  border: none !important;
  @media (max-width: 760px) {
    display: flex;
    align-self: stretch;
    flex-grow: 1;
  }
  @media (max-width: 500px) {
    display: block;
    text-align: left;
  }
`

const MatrixItem = ({label, rubric, name}) => (
  <Row>
    <DescriptionCell>{label}</DescriptionCell>
    <MediaQuery maxWidth={759}><OptionGroup>
        {
          rubric.map((item, index) => <OptionCell><RubricItem key={item + index} rubricText={item} name={name + label}/></OptionCell>)
        }
      </OptionGroup>
    </MediaQuery>
    <MediaQuery minWidth={760}>
      {
        rubric.map((item, index) => <OptionCell><RubricItem key={item + index} rubricText={item} name={name + label}/></OptionCell>)
      }
    </MediaQuery>
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
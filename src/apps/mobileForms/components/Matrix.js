import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import MediaQuery from 'react-responsive'
import { Paragraph } from '../../../componentLibrary/text';

const Option = styled.label`
  width: 100%;
  height: 100%;
  display: ${({longRubric}) => longRubric ? `flex` : `block` };
  flex-grow: 1;
  text-align: ${({longRubric}) => longRubric ? `left` : `center` };
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
  display: ${({longRubric})=> longRubric ? `block` : `table-cell`};
  padding: ${(p) => p.longRubric ? `${p.theme.space[2]}px` : `0`};
  margin-top: ${(p) => p.longRubric ? `${p.theme.space[4]}px` : `0`};
  border: none !important;
  min-width: 200px;
  vertical-align: middle;
  @media (max-width: 760px) {
    display: block;
    padding: ${({theme}) => theme.space[2]}px;
  }
`
const OptionGroup = styled.div`
  display: flex;
  vertical-align: top;
  display: flex;
  align-items: stretch;
  width: 100%;
  @media (max-width: 760px) {
    display: ${({longRubric}) => longRubric ? `block` : `flex` };
    max-width: ${({longRubric}) => longRubric ? `100% !important` : `inherit` };
    border-left: ${({theme}) => `solid ${chroma(theme.colors.blue).alpha(.3).css()} ${theme.space[2]}px`};
    padding-left: ${({theme}) => theme.space[3]}px;
  }
  @media (max-width: 500px) {
    display: block;
  }
`
const OptionCell = styled.div`
  display: ${({longRubric})=> longRubric ? `flex` : `table-cell`};
  vertical-align: top;
  padding: 0;
  border: none !important;
  align-self: stretch;
  flex-grow: 1;
  @media (max-width: 760px) {
    display: flex;
  }
  @media (max-width: 500px) {
    display: block;
    text-align: left;
  }
`

const MatrixItem = ({label, rubric, name, longRubric}) => (
  <Row>
    <DescriptionCell longRubric={longRubric}><Paragraph fontWeight="bold">{label}</Paragraph></DescriptionCell>
    <MediaQuery maxWidth={759}>
      {(matches) =>
        matches || longRubric ?
          <OptionGroup longRubric={longRubric}>
          {
            rubric.map((item, index) => <OptionCell longRubric={longRubric} style={{maxWidth: `${matches ? 100 : 100 / rubric.length}%`}}><RubricItem key={item + index} rubricText={item} name={name + label} longRubric={longRubric}/></OptionCell>)
          }
        </OptionGroup>
      :
      <React.Fragment>
        {
        rubric.map((item, index) => <OptionCell><RubricItem key={item + index} rubricText={item} name={name + label}/></OptionCell>)
        }
      </React.Fragment>
      }
    </MediaQuery>
  </Row>
);

const RubricItem = ({rubricText, name, longRubric}) => (
  <Option longRubric={longRubric}>
    <input type="radio" id={rubricText} name={name} />
    <OptionWrapper>
      <Paragraph>{rubricText}</Paragraph>
    </OptionWrapper>
  </Option>
)

export default ({choices = [], ...props, rubric=[], name="default", longRubric = false}) => (
  <Matrix {...props}>
    {choices.map((choiceText,index) => <MatrixItem key={`choice-${index}`} label={choiceText} rubric={rubric} name={name} longRubric={longRubric}/>)}
  </Matrix>
);
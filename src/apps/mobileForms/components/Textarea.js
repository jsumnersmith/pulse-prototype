import styled from 'styled-components';
import chroma from 'chroma-js';
// import TextareaAutoResize from 'react-autosize-textarea';

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  max-height: 80vh;
  padding: ${({theme}) => theme.space[4]}px;
  border: none;
  border: ${({theme}) => `solid transparent ${theme.space[1]}px`};
  border-bottom: ${({theme}) => `solid ${theme.colors.grayMediumLight} ${theme.space[1]}px`};
  border-radius: 0;
  outline: 0;
  font-size: ${({theme})=> theme.fontSizes[2]}px;
  background: ${({theme}) => theme.colors.grayLight};
  transition: all .2s ease-in-out;
  resize: none;
  &:focus, &:active {
    border: ${({theme}) => `solid ${theme.colors.blue} ${theme.space[1]}px`};
    background: ${({theme}) => `${chroma(theme.colors.blue).alpha(.1).css()}`};
    box-shadow: ${({theme}) => `0 0 10px ${chroma(theme.colors.grayDark).alpha(.3).css()}`};
    -webkit-box-shadow: ${({theme}) => `0 0 10px ${chroma(theme.colors.grayDark).alpha(.3).css()}`};
  }
`

export default Textarea;
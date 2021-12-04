import styled, { css } from 'styled-components';

const defaultStyle = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

const invertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyle = css`
  background-color: #1968e6;
  opacity: 0.7;
  color: white;

  &:hover {
    opacity: 1;
    background-color: #1968e6;
    border: none;
  }
`;

const getButtonStyle = props => {
  if (props.googleSignIn) return googleSignInStyle;
  if (props.inverted) return invertedStyle;
  else return defaultStyle;
};

export const CustomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 200px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  cursor: pointer;

  ${getButtonStyle}
`;

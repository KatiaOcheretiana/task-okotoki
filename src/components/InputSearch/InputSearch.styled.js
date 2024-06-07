import styled from "styled-components";

export const LabelField = styled.label`
  position: relative;

  &::after {
    position: absolute;
    content: "";
    bottom: -15px;
    left: 0;
    height: 1px;
    margin-right: 32px;
    width: 100%;

    background-color: rgba(251, 251, 251, 0.4);
  }
`;

export const IconSearch = styled.svg`
  fill: white;

  width: 20px;
  height: 20px;

  top: 0;
  left: 20px;
  position: absolute;
`;

export const Input = styled.input`
  padding: 15px 45px;
  background-color: transparent;
  border: none;

  color: white;
  width: 100%;

  outline: none;
`;

export const IconClose = styled.svg`
  fill: #4682b4;
  stroke: #4682b4;

  width: 20px;
  height: 20px;

  top: 0;
  right: 20px;
  position: absolute;

  cursor: pointer;
`;

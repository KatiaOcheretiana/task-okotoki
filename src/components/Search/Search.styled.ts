import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
  padding: 5px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.5;
  user-select: none;
  background-color: ${(props) => (props.isActive ? "#484848" : "transparent")};
  border: ${(props) =>
    props.isActive ? "2px solid #B0B0B0" : "2px solid transparent"};

  &:hover,
  &:focus {
    border: 2px solid #b0b0b0;
    background-color: #484848;
  }

  transition: all 0.5s ease;
`;

export const Icon = styled.svg`
  fill: white;
  stroke: white;
  width: 18px;
  height: 18px;
`;

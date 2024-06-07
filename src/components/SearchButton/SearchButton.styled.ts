import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.5;
  background-color: ${(props) => (props.isActive ? "#484848" : "transparent")};
  border: ${(props) =>
    props.isActive ? "2px solid #B0B0B0" : "2px solid transparent"};
  transition: all 0.5s ease;
`;

export const Icon = styled.svg`
  fill: white;
  width: 20px;
  height: 20px;
`;

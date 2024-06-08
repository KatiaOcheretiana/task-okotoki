import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  gap: 10px;
  padding: 5px 10px;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: rgb(80, 80, 80);
  }

  cursor: pointer;

  transition: all 0.5s ease;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const Icon = styled.svg`
  fill: white;
  height: 18px;
  width: 18px;
`;

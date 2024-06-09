import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
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
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  fill: white;
  height: 18px;
  width: 18px;
`;

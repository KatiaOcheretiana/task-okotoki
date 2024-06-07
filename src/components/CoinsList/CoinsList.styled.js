import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 10px 10px;
  width: 100%;
`;

export const Wrapper = styled.div`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 20px;
  }

  scrollbar-width: thin;
  scrollbar-color: #f1f1f1 transparent;
`;

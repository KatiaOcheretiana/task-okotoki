import styled from "styled-components";

export const FilterBox = styled.div`
  margin: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface FilterItemProps {
  isActive: boolean;
}

export const FilterItem = styled.li<FilterItemProps>`
  display: flex;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;

  font-weight: ${(props) => (props.isActive ? "600 " : "400")};

  padding: 5px 10px;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: rgb(48, 48, 48);
  }

  cursor: pointer;

  transition: all 0.5s ease;
`;

export const Icon = styled.svg`
  fill: white;
  height: 18px;
  width: 18px;
`;

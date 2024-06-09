import styled from "styled-components";

export const LabelInputField = styled.label`
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
  stroke: white;

  width: 16px;
  height: 16px;

  top: 0;
  left: 15px;
  position: absolute;
`;

export const Input = styled.input`
  background-color: black;
  padding: 13px 40px;
  border-radius: 10px 10px 0 0;
  border: none;

  font-size: 16px;

  color: white;
  width: 100%;

  outline: none;
`;

export const IconClose = styled.svg`
  fill: #4682b4;
  stroke: #4682b4;

  width: 18px;
  height: 18px;

  top: 0;
  right: 20px;
  position: absolute;

  cursor: pointer;
`;

export const FilterBox = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: black;
`;

interface FilterItemProps {
  isActive: boolean;
}

export const FilterItem = styled.button<FilterItemProps>`
  display: flex;
  gap: 8px;
  background-color: black;
  border: none;
  color: white;
  padding: 5px;

  user-select: none;

  font-size: 16px;

  font-weight: ${(props) => (props.isActive ? "600 " : "400")};

  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: rgb(48, 48, 48);
  }

  transition: all 0.5s ease;
`;

export const Icon = styled.svg`
  fill: white;
  height: 18px;
  width: 18px;
`;

export const FeatureWraper = styled.div`
  top: 100%;
  left: -170px;
  width: 300px;
  height: 400px;

  border: 1px solid #b0b0b0;
  border-radius: 10px;

  background: rgb(36, 13, 0);
  background: linear-gradient(
    37deg,
    rgba(36, 13, 0, 0.34878095975232193) 15%,
    rgba(136, 38, 180, 0.29614938080495357) 22%,
    rgba(1, 0, 36, 0.2528057275541795) 44%,
    rgba(137, 0, 255, 0.2528057275541795) 69%,
    rgba(124, 35, 167, 0.16611842105263153) 90%,
    rgba(107, 9, 121, 1) 100%,
    rgba(70, 79, 167, 0.132062693498452) 100%
  );
`;

export const Text = styled.p`
  color: white;
  padding: 15px;
`;

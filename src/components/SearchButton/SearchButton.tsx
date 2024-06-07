import sprite from "../../icons/sprite.svg";
import { Button, Icon } from "./SearchButton.styled";

interface SearchButtonProps {
  isActive: boolean;
  onClick: () => void;
}

export default function SearchButton({ isActive, onClick }: SearchButtonProps) {
  return (
    <Button isActive={isActive} onClick={onClick}>
      <Icon>
        <use href={sprite + "#icon-codicon-search"} />
      </Icon>
      <p>SEARCH</p>
    </Button>
  );
}

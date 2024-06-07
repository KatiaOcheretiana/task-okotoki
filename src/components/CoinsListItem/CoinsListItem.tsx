import { Button, Icon, Item } from "./CoinsListItem.styled";
import sprite from "../../icons/sprite.svg";

interface CoinsListItemProps {
  item: string;
  isFavorite: boolean;
  onToggleFavorite: (item: string) => void;
}

export const CoinsListItem = ({
  item,
  isFavorite,
  onToggleFavorite,
}: CoinsListItemProps) => {
  return (
    <Item>
      <Button onClick={() => onToggleFavorite(item)}>
        <Icon>
          <use
            href={
              sprite +
              (isFavorite
                ? "#icon-codicon--star-full"
                : "#icon-codicon--star-empty")
            }
          />
        </Icon>
      </Button>
      <p>{item}</p>
    </Item>
  );
};

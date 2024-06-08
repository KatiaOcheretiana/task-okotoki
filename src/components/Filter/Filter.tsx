import { FilterItem, FilterBox, Icon } from "./Filter.styled";
import sprite from "../../icons/sprite.svg";

interface FilterProps {
  setFilter: (item: string) => void;
  filter: string;
}

export const Filter = ({ setFilter, filter }: FilterProps) => {
  return (
    <FilterBox>
      <FilterItem
        disabled={filter === "favorite"}
        isActive={filter === "favorite"}
        onClick={() => setFilter("favorite")}
      >
        <Icon>
          <use href={sprite + "#icon-codicon--star-full"} />
        </Icon>
        <p>FAVORITES</p>
      </FilterItem>
      <FilterItem
        disabled={filter === "all"}
        isActive={filter === "all"}
        onClick={() => setFilter("all")}
      >
        <p>ALL COINS</p>
      </FilterItem>
    </FilterBox>
  );
};

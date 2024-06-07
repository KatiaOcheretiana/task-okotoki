import { FilterItem, FilterBox, Icon } from "./Filter.styled";
import sprite from "../../icons/sprite.svg";

interface FilterProps {
  setFilter: (item: string) => void;
  filter: string;
}

export default function Filter({ setFilter, filter }: FilterProps) {
  return (
    <FilterBox>
      <FilterItem
        isActive={filter === "favorite"}
        onClick={() => setFilter("favorite")}
      >
        <Icon>
          <use href={sprite + "#icon-codicon--star-full"} />
        </Icon>
        <p>FAVORITES</p>
      </FilterItem>
      <FilterItem isActive={filter === "all"} onClick={() => setFilter("all")}>
        <p>ALL COINS</p>
      </FilterItem>
    </FilterBox>
  );
}

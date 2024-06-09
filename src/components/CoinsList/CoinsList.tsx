import { useState, useEffect } from "react";
import sprite from "../../icons/sprite.svg";
import VirtualScroll from "../VirtualScroll/VirtualScroll";
import { Button, Icon, Item } from "./CoinsList.styled";

interface CoinsListProps {
  coins: string[];
  setFilteredCoins: (filteredCoins: string[]) => void;
  filter: string;
}

export const CoinsList = ({
  coins,
  setFilteredCoins,
  filter,
}: CoinsListProps) => {
  const [favoriteArray, setFavoriteArray] = useState<string[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteArray(favorites);
  }, []);

  const handleToggleFavorite = (item: string) => {
    let updatedFavorites: string[];

    if (favoriteArray.includes(item)) {
      updatedFavorites = favoriteArray.filter((fav) => fav !== item);
    } else {
      updatedFavorites = [...favoriteArray, item];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteArray(updatedFavorites);

    if (filter === "favorite" && !updatedFavorites.includes(item)) {
      setFilteredCoins(coins.filter((coin) => coin !== item));
    }
  };

  const rowHeight = 32;
  const visibleRows = 9;
  const bufferRows = 5;

  return (
    <VirtualScroll
      items={coins}
      rowHeight={rowHeight}
      visibleRows={visibleRows}
      bufferRows={bufferRows}
      filter={filter}
      renderRow={(item, index) => (
        <Item key={index}>
          <Button onClick={() => handleToggleFavorite(item)}>
            <Icon>
              <use
                href={
                  sprite +
                  (favoriteArray.includes(item)
                    ? "#icon-codicon--star-full"
                    : "#icon-codicon--star-empty")
                }
              />
            </Icon>
          </Button>
          <p>{item}</p>
        </Item>
      )}
    />
  );
};

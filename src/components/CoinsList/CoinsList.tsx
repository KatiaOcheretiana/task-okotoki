import { useState, useEffect } from "react";
import sprite from "../../icons/sprite.svg";
import VirtualScroll from "../VirtualScroll/VirtualScroll";
import { Button, Icon, Item } from "./CoinsList.styled";

interface CoinsListProps {
  coins: string[];
  filter: string;
}

export default function CoinsList({ coins, filter }: CoinsListProps) {
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
  };

  const rowHeight = 33.5;
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
}

import { useState, useEffect } from "react";
import { List } from "./CoinsList.styled";
import { CoinsListItem } from "../CoinsListItem/CoinsListItem";

interface CoinsListProps {
  coins: string[];
}

export default function CoinsList({ coins }: CoinsListProps) {
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

  return (
    <List>
      {coins.map((item, index) => (
        <CoinsListItem
          key={index}
          item={item}
          isFavorite={favoriteArray.includes(item)}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </List>
  );
}

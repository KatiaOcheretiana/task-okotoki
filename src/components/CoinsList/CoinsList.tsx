import { useState, useEffect, useRef } from "react";
import { List, Wrapper } from "./CoinsList.styled";
import { CoinsListItem } from "../CoinsListItem/CoinsListItem";

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

  // virtual scroll

  const visibleRows = 9;
  const rowHeight = 33.5;

  const rootRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);

  function getTopHeight() {
    return rowHeight * start;
  }

  function getBottomHeight() {
    return rowHeight * (coins.length - (start + visibleRows));
  }

  useEffect(() => {
    function onScroll(e: Event) {
      const target = e.target as HTMLElement;
      setStart(
        Math.min(
          coins.length - visibleRows,
          Math.floor(target.scrollTop / rowHeight)
        )
      );
    }

    const currentRef = rootRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", onScroll);
      return () => {
        currentRef.removeEventListener("scroll", onScroll);
      };
    }
  }, [coins.length, visibleRows, rowHeight]);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.scrollTop = 0;
      setStart(0);
    }
  }, [filter]);

  return (
    <Wrapper style={{ height: visibleRows * rowHeight }} ref={rootRef}>
      <div style={{ height: getTopHeight() }} />
      <List>
        {coins.slice(start, start + visibleRows).map((item, index) => (
          <CoinsListItem
            key={start + index}
            item={item}
            isFavorite={favoriteArray.includes(item)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </List>
      <div style={{ height: getBottomHeight() }} />
    </Wrapper>
  );
}

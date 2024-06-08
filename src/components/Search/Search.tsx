import { useEffect, useState, useRef } from "react";
import Fuse from "fuse.js";
import { Popup } from "../Popup/Popup";
import { Button, Icon } from "./Search.styled";
import sprite from "../../icons/sprite.svg";

interface SearchProps {
  coins: string[];
}

export default function Search({ coins }: SearchProps) {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState<string[]>(coins);
  const [filter, setFilter] = useState("all");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setQuery("");
    setFilter("all");
  }, [isActive]);

  useEffect(() => {
    const favoriteItems: string[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    let filtered: string[];

    if (filter === "favorite") {
      filtered = favoriteItems;
    } else {
      filtered = coins;
    }

    if (query) {
      const fuse = new Fuse<string>(filtered, {
        keys: [],
        threshold: 0.3,
      });

      const result = fuse.search(query);
      setFilteredCoins(result.map(({ item }) => item));
    } else {
      setFilteredCoins(filtered);
    }
  }, [query, coins, filter]);

  return (
    <div style={{ width: "130px", margin: "0 auto", position: "relative" }}>
      <Button
        ref={buttonRef}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <Icon>
          <use href={sprite + "#icon-codicon-search"} />
        </Icon>
        <p>SEARCH</p>
      </Button>

      {isActive && buttonRef.current && (
        <Popup
          query={query}
          setQuery={setQuery}
          filter={filter}
          setFilter={setFilter}
          filteredCoins={filteredCoins}
          buttonRef={buttonRef}
          onClose={() => setIsActive(false)}
        />
      )}
    </div>
  );
}

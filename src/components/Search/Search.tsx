import { FeatureWraper, Text } from "./Search.styled";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

import InputSearch from "../InputSearch/InputSearch";
import CoinsList from "../CoinsList/CoinsList";
import SearchButton from "../SearchButton/SearchButton";
import Filter from "../Filter/Filter";

interface SearchProps {
  coins: string[];
}

export default function Search({ coins }: SearchProps) {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState<string[]>(coins);
  const [filter, setFilter] = useState("all");

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
    <div style={{ position: "relative", width: "130px", margin: "0 auto" }}>
      <SearchButton
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />

      {isActive && (
        <FeatureWraper>
          <InputSearch setQuery={setQuery} query={query} />
          <Filter setFilter={setFilter} filter={filter} />
          {filteredCoins.length > 0 ? (
            <CoinsList coins={filteredCoins} filter={filter} />
          ) : (
            <Text>Nothing found</Text>
          )}
        </FeatureWraper>
      )}
    </div>
  );
}

import { FeatureWraper, Text } from "./Search.styled";
import { useEffect, useState } from "react";

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
  const [filteredCoins, setFilteredCoins] = useState(coins);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (filter === "favorite") {
      const favoriteItems = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      setFilteredCoins(
        favoriteItems.filter((item: string) =>
          item.includes(query.toUpperCase())
        )
      );
    } else {
      const coinsBySearch = coins.filter((item) =>
        item.includes(query.toUpperCase())
      );
      setFilteredCoins(coinsBySearch);
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
            <CoinsList coins={filteredCoins} />
          ) : (
            <Text>Nothing found</Text>
          )}
        </FeatureWraper>
      )}
    </div>
  );
}

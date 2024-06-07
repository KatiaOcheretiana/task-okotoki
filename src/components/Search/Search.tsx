import { FeatureWraper } from "./Search.styled";
import { useEffect, useState } from "react";

import InputSearch from "../InputSearch/InputSearch";
import CoinsList from "../CoinsList/CoinsList";
import SearchButton from "../SearchButton/SearchButton";

interface SearchProps {
  coins: string[];
}

export default function Search({ coins }: SearchProps) {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState(coins);

  useEffect(() => {
    const coinsBySearch = coins.filter((item) =>
      item.includes(query.toUpperCase())
    );
    setFilteredCoins(coinsBySearch);
  }, [query, coins]);

  return (
    <div style={{ position: "relative", width: "130px", margin: "0 auto" }}>
      <SearchButton
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />

      {isActive && (
        <FeatureWraper>
          <InputSearch setQuery={setQuery} query={query} />
          <CoinsList coins={filteredCoins} />
        </FeatureWraper>
      )}
    </div>
  );
}

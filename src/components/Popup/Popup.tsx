import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FeatureWraper, Text } from "./Popup.styled";
import InputSearch from "../InputSearch/InputSearch";
import CoinsList from "../CoinsList/CoinsList";
import Filter from "../Filter/Filter";

interface PopupProps {
  query: string;
  setQuery: (query: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  filteredCoins: string[];
  buttonRef: React.RefObject<HTMLButtonElement>;
}

export const Popup = ({
  query,
  setQuery,
  filter,
  setFilter,
  filteredCoins,
  buttonRef,
}: PopupProps) => {
  const [portalElement] = useState(() => document.createElement("div"));
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      if (buttonRect) {
        setPosition({
          top: buttonRect.bottom + window.scrollY,
          left: buttonRect.right + window.scrollX,
        });
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [buttonRef]);

  useEffect(() => {
    document.body.appendChild(portalElement);
    return () => {
      document.body.removeChild(portalElement);
    };
  }, [portalElement]);

  const portalStyle: React.CSSProperties = {
    position: "absolute",
    top: position.top,
    left: position.left,
    transform: "translateX(-100%)",
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <FeatureWraper style={portalStyle}>
      <InputSearch setQuery={setQuery} query={query} />
      <Filter setFilter={setFilter} filter={filter} />
      {filteredCoins.length > 0 ? (
        <CoinsList coins={filteredCoins} filter={filter} />
      ) : (
        <Text>Nothing found</Text>
      )}
    </FeatureWraper>,
    portalElement
  );
};

import { useState, useEffect, useRef, RefObject } from "react";
import ReactDOM from "react-dom";
import {
  FeatureWraper,
  FilterBox,
  FilterItem,
  Icon,
  IconClose,
  IconSearch,
  Input,
  LabelInputField,
  Text,
} from "./Popup.styled";
import sprite from "../../icons/sprite.svg";
import { CoinsList } from "../CoinsList/CoinsList";
import { useClickOutside } from "../../useClickOutside";

interface PopupProps {
  query: string;
  setQuery: (query: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  filteredCoins: string[];
  buttonRef: RefObject<HTMLButtonElement>;
  onClose: () => void;
  setFilteredCoins: (filteredCoins: string[]) => void;
}

export const Popup = ({
  query,
  setQuery,
  filter,
  setFilter,
  filteredCoins,
  buttonRef,
  onClose,
  setFilteredCoins,
}: PopupProps) => {
  const [portalElement] = useState(() => document.createElement("div"));
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popupRef = useRef<HTMLDivElement>(null);

  useClickOutside(popupRef, buttonRef, onClose);

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
    <FeatureWraper ref={popupRef} style={portalStyle}>
      {/* Input search */}
      <LabelInputField>
        <Input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconSearch>
          <use href={sprite + "#icon-codicon-search"} />
        </IconSearch>
        {query && (
          <IconClose onClick={() => setQuery("")}>
            <use href={sprite + "#icon-codicon--close"} />
          </IconClose>
        )}
      </LabelInputField>
      {/* Filter by FAVORITE OR ALL */}
      <FilterBox>
        <FilterItem
          disabled={filter === "favorite"}
          isActive={filter === "favorite"}
          onClick={() => setFilter("favorite")}
        >
          <Icon>
            <use href={sprite + "#icon-codicon--star-full"} />
          </Icon>
          <p>FAVORITES</p>
        </FilterItem>
        <FilterItem
          disabled={filter === "all"}
          isActive={filter === "all"}
          onClick={() => setFilter("all")}
        >
          <p>ALL COINS</p>
        </FilterItem>
      </FilterBox>

      {filteredCoins.length > 0 ? (
        <CoinsList
          coins={filteredCoins}
          filter={filter}
          setFilteredCoins={setFilteredCoins}
        />
      ) : (
        <Text>Nothing found</Text>
      )}
    </FeatureWraper>,
    portalElement
  );
};

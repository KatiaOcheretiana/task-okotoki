import sprite from "../../icons/sprite.svg";
import { IconClose, IconSearch, Input, LabelField } from "./InputSearch.styled";

interface InputSearchProps {
  setQuery: (query: string) => void;
  query: string;
}

export default function InputSearch({ setQuery, query }: InputSearchProps) {
  return (
    <LabelField>
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
    </LabelField>
  );
}

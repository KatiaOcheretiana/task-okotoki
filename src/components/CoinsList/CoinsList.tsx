import { List } from "./CoinsList.styled";

interface CoinsListProps {
  coins: string[];
}

export default function CoinsList({ coins }: CoinsListProps) {
  return (
    <List>
      {coins.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </List>
  );
}

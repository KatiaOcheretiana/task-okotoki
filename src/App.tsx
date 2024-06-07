import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search/Search";
import { Container } from "./styles/GlobalStyle";

function App() {
  const [coins, setCoins] = useState<string[]>([]);

  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await axios.get("https://api-eu.okotoki.com/coins");

        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching the coins data:", error);
      }
    };

    getCoins();
  }, []);

  return (
    <Container>
      <Search coins={coins} />
    </Container>
  );
}

export default App;

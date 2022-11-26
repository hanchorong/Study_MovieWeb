import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins ({loading ? "" : `${coins.length}`})</h1>
      {loading ? <span>loading...</span> : null}
      <hr />
      <input type="text" placeholder="how much you have usd?" />
      <select>
        {coins.map((item) => (
          <option key={item.id}>
            {item.name}({item.symbol}): ${item.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './Exchange.css';

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;

export default function Exchange() {
  const [currency, setCurrency] = useState({ EUR: 0, CAD: 0, RUB: 0, AUD: 0 });

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&symbols=GBP,EUR,RUB,CAD`
      )
        .then((response) => response.json())
        .then((data) => {
          setCurrency(data.rates);
        })
        .catch((error) => {
          console.log('Error fetching and parsing data', error);
        });
    }
    fetchData();
  }, []);

  let keys = Object.keys(currency);

  return (
    <div className="exchange">
      {keys.map((key) => {
        return (
          <div className="exchange__item" key={key}>
            <span className="exchange__currency">{key}</span>
            <span className="exchange__rate">{currency[key].toFixed(2)}</span>
          </div>
        );
      })}
    </div>
  );
}

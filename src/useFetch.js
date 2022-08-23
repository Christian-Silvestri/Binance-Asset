import { useState, useEffect } from 'react';


const baseEndpoint = 'https://api.binance.com';
const exInfoEndpoint = baseEndpoint + '/api/v3/exchangeInfo';
const priceTicker = baseEndpoint + '/api/v3/ticker/price ';

export function useFetch() {
    const [dataArray, setDataArray] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDataExchange()
    }, [])

    function fetchDataExchange() {
        Promise.all([
            fetch(priceTicker)
                .then(response => response.json()),
            fetch(exInfoEndpoint)
                .then(response => response.json())
        ]).then(([tickerRes, exchangeRes]) => {
            arrayMap(tickerRes, exchangeRes.symbols);
        })
            .catch((error) => { setError(new Error(error)) });
    }

    function arrayMap(price, exchange) {
        const mappedArray = price.map((ticker) => {
            const symbolTicker = exchange.find(name => name.symbol === ticker.symbol);

            return {
                baseAsset: symbolTicker.baseAsset,
                quoteAsset: symbolTicker.quoteAsset,
                ...ticker,
            }
        });

        setDataArray(mappedArray);
    }

    return {
        data: dataArray,
        error,
        loading: !dataArray && !error
    }
}


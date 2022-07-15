import React, { useEffect, useState } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from './components/Table';
import Decimal from 'decimal.js';
import './App.css';

import data from './data.json';

interface Trade {
  blockNumber: string,
  pair: string
  side: string
  amountIn: string
  amountOutMin: string
  amountOut: string
}

function App() {

  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {

    (async () => {

      var response = await fetch("http://127.0.0.1:6969/api/trades?limit=3");

      var responseJson = await response.json();

      console.log(responseJson);

      setTrades([...responseJson.data])

    })()

  }, [])

  return (
    <div className="App">
      <Table >
        <TableHead>
          <TableCell>
            Block Number
          </TableCell>
          <TableCell>
            Pair
          </TableCell>
          <TableCell>
            Side
          </TableCell>
          <TableCell>
            Profit
          </TableCell>
        </TableHead >
        <TableBody>
          {trades.map(trade => {

            var amountOutMin = new Decimal(trade.amountOutMin);
            var amountOut = new Decimal(trade.amountOut);

            var profit = amountOut.minus(amountOutMin);

            return (
              <TableRow>
                <TableCell >
                  {trade.blockNumber}
                </TableCell>
                <TableCell>
                  {trade.pair}
                </TableCell>
                <TableCell>
                  {trade.side}
                </TableCell>
                <TableCell>
                  {profit.dividedBy(10 ** 18).toDecimalPlaces(8, Decimal.ROUND_DOWN).toString()}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;

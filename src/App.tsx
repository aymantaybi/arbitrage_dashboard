import React, { useState } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from './components/Table';
import './App.css';


function App() {

  return (
    <div className="App">
      <Table >
        <TableHead>
          <TableCell>
            Time
          </TableCell>
          <TableCell>
            Side
          </TableCell>
          <TableCell>
            Amount
          </TableCell>
        </TableHead >
        <TableBody>
          <TableRow>
            <TableCell >
              10:09:56
            </TableCell>
            <TableCell>
              BUY
            </TableCell>
            <TableCell>
              100 ETH
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default App;

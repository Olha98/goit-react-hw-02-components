import React from 'react';
import ReactDOM from 'react-dom';
import statisticalData from '../src/statistical-data.json';
import Statistics from './Components/Statistics/Statistics'

ReactDOM.render(
  <Statistics title="Upload stats" stats={statisticalData} />,
  document.getElementById('root'),
);
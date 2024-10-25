// src/App.js
import React, { useState } from 'react';
import ExcelReader from './components/ExcelReader';
import MountModel from './components/MountModel';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <h1>Excel to 3D Model</h1>
      <ExcelReader setData={setData} />
      {data && <MountModel data={data} />}
    </div>
  );
};

export default App;

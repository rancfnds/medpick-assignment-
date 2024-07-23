// src/App.jsx (or src/App.js)
import React from 'react';
import './index.css'; // or the path to your CSS file
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import AssetTable from './Components/AssetsTable';
import Datacount from './Components/Datacount';
import SearchBar from './Components/SearchBar';
const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-5 mr-5">
        <Header />
        <Datacount />
        <SearchBar/>
        <AssetTable />
      </div>
    </div>
  );
};

export default App;

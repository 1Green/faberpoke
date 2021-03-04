import React from 'react';
import './App.css';
import Pagination from './stories/pagination/Pagination';

function App() {
  return (
    <div className="App">
      <Pagination totalRecords={1087} pageNeighbours={1} onPageChanged={(data) => console.log("data: ", data)} />
    </div>
  );
}

export default App;

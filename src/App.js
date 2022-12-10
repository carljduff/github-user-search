import React, { useState } from 'react';
import GitCard from './components/GitCard';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
     <Search/>
     <GitCard/>
    </div>
  );
}

export default App;

import './App.css'
import React from 'react';
import DataContextComponents from './DataContextComponents';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <DataContextComponents>
          <Card />
        </DataContextComponents>
      </div>
    </div>
  );
}

export default App;
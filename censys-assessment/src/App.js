import './styles/App.css';
import SearchForm from './components/searchForm';
import React from "react";

const App = () => {
  return (
    <div className="App" >
        <h1 className="App-header">Censys Takehome Assessnent</h1>
        <SearchForm/>
    </div>
  );
}

export default App;

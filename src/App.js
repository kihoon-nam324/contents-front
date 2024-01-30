import { useState } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header/Header';
import ContentsList from './components/ContentsList/ContentsList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <div>  
        <ContentsList />
      </div>
    </DarkModeProvider>
  );
}

export default App;

import './App.css';
import ContentsList from './components/ContentsList/ContentsList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div>  
        <ContentsList />
      </div>
    </DarkModeProvider>
  );
}

export default App;

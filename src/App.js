import logo from './logo.svg';
import './App.css';
import JeuDe from './components/JeuDe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JeuDe cache={2}></JeuDe>
      </header>
    </div>
  );
}

export default App;

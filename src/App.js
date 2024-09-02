import './App.css';
import TabelaPodcasts from './componentes/tabela';

function App() {
  return (
    
    <div className="App">
      <header>
        <br/>
        Sua lista de podcasts
      </header>
      <main>
        <TabelaPodcasts />
      </main>
    </div>
  );
}

export default App;

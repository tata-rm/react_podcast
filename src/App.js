import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      logo
      sobre o site - abrir overlay no meio
      </header>
      
      <h1>Sua lista de podcasts:</h1>
      <p id='p'>Adicione na tabela podcasts que já escutou ou quer escutar e seus feedbacks sobre cada um!</p>
      <main>
        <div id='esquerda'>
          <h3>
            Adicione uma linha:
          </h3>
          <h3>
            Remova uma linha:
          </h3>
          <h3>
            Edite uma linha:
          </h3>
        </div>
        <div id='direita'>
          tabela
        </div>
      </main>
    </div>
  );
}

export default App;

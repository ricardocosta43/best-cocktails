import "./App.css";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  function categories() {
    return history.push("/categories");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={"/assets/cocktail.jpg"} className="App-logo" alt="logo" />
        <h1>Clique abaixo e conheça nossas categorias de dinks.</h1>
        <br></br>
        <a
          className="btn btn-primary"
          href="javascript:void(0)"
          onClick={() => categories()}
        >
          Categotias
        </a>
      </header>
    </div>
  );
}

export default App;

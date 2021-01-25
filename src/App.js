import "./App.css";
import { useHistory } from "react-router-dom";
import logo from "./assets/cocktail.jpg";

function App() {
  const history = useHistory();

  function categories() {
    return history.push("/categories");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Click below and see our categories of dinks.</h1>
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
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
        <img src={logo} alt="logo" />
        <h1>Click below and see our categories of drinks.</h1>
        <br></br>
        <button 
          className="btn btn-primary"
          onClick={() => categories()}
        >
          Categories
        </button>
      </header>
    </div>
  );
}

export default App;

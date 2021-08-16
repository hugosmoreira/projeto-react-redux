import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Exercicio - Redux</h1>
      <div className="linha">
        <Card title="Card 1"></Card>
      </div>
      <div className="linha">
        <Card title="Card 2"> </Card>
      </div>
    </div>
  );
}

export default App;

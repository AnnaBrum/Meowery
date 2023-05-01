import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board/";
import StartScreen from "./components/Start-screen";



function App() {
  return (
    <div className="App">
      <Header />
      <StartScreen />
      <Board />

    </div>
  );
}

export default App;

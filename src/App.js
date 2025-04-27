import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> El blaster de Luis </h1>
        <TicketForm />
      </div>
    </div>
  );
}

export default App;

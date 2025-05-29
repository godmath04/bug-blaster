import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";
import { sortTicket } from "./utilities/sortingUtilities";
function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreferences: "Alto a bajo",
  };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortTicket(state.tickets, state.sortPreferences);

  return (
    <div className="App">
      <div className="container">
        <h1> El blaster de Luis </h1>
        <TicketForm
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></TicketForm>
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>Todos los tickets</h2>
            <select
              value={state.sortPreferences}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="Alto a bajo">Alta a bajo</option>
              <option value="Bajo a alto"> Bajo a alto </option>
            </select>

            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

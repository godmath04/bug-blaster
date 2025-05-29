import React from "react";
export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;
  const priorityClass = {
    1: "Baja",
    2: "Media",
    3: "Alta",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

      <h3>{title}</h3>
      <p>{description}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: { id } })}
      >
        Eliminar
      </button>

      <button
        className="button"
        onClick={() => {
          dispatch({ type: "SET_EDITING_TICKET", payload: ticket });
        }}
      >
        Editar
      </button>
    </div>
  );
}

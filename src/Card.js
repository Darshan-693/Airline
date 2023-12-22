import React from "react";

function Card({ ticket, onDelete }) {
    const handleDelete = () => {
        // Call the onDelete function with the ticket ID to delete
        onDelete(ticket.id);
      };

    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
        <h3>{ticket.destination}</h3>
        <p>{ticket.email}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
}
export default Card;

import React from 'react'
import Card from './Card';

function Dashboard({ tickets, ticketdb,emailid}) {
  const handleDelete = () => {
    // Implement the logic to delete the ticket with the given ID
    // For example, you can send a DELETE request to the server
    fetch('http://localhost:3000/cancelticket', {
      method: "POST",
      body: JSON.stringify({
        email: emailid
    }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json()).then(data => {
      if(data.auth ===1){
        ticketdb();
      }
    });
  };

  return (
    <div>
      <h1>Tickets Dashboard</h1>
      <button onClick={ticketdb}>Refresh Tickets</button>
      <div>
        {/* Map through the tickets and render a Card component for each */}
        {tickets.map(ticket => (
          <Card key={ticket.id} ticket={ticket} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}


export default Dashboard;

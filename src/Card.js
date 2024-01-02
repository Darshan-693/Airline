import React from "react";

function Card({ ticket, onDelete ,view}) {
    const handleDelete = () => {
        // Call the onDelete function with the ticket ID to delete
        console.log(ticket.sl_no);
        onDelete(ticket.sl_no);
      };

    return (
      <div className="card" style={{width: "18rem", margin:"5px",marginBottom:"30px"}}>
        <img src={require('./images/airplane-4570897_1280.jpg')} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h2 className="card-title">{ticket.destination}</h2>
            <p className="card-text">{ticket.date}</p>
            <p className="card-text">Number of seats : {ticket.seats}</p>
            <button onClick={()=>handleDelete()} className="btn btn-danger">Cancel Ticket</button>
            <button onClick={()=>view(ticket.sl_no)}className="btn btn-primary" style={{"margin-left":"50px"}}>View</button>
        </div>
    </div>
    );
}
export default Card;

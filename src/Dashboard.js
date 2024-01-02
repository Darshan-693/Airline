import React from 'react'
import Card from './Card';
import View from './view';
import { useState } from 'react';
function Dashboard({ tickets, ticketdb,emailid,logout,change_page,comp,funxtion,x}) {

  const [i_d,ii_d] = useState(0)
  const [name,changename] = useState('')
  const handleDelete = (id) => {

    console.log(id);
    fetch('http://localhost:3000/cancelticket', {
      method: "POST",
      body: JSON.stringify({
        email: emailid,
        sl_no:id
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

  function getUsername(){
    fetch('http://localhost:3000/getname', {
      method: "POST",
      body: JSON.stringify({
        email: emailid,
    }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json()).then(data => changename(data[0].Name));
  };
    if(i_d===0)return (
      <div className='d'>
        {getUsername()}
        <div className="dashprof">
        <button className="nav_button" style={{display:'block',position:'relative',left:'90%',top:"20px"}} onClick={()=>logout()}>Logout</button>
            <h1>Welcome , {name}</h1>
            <button className="btn btn-success" style={{margin:"30px" ,fontSize: "large" ,border:"2px solid black"}}onClick={()=>change_page('Bangalore')}>More trips for you</button>
            <button className="btn btn-success" style={{margin:"30px" ,fontSize: "large" ,border:"2px solid black"}}>Provide feedback</button>
            <button className="btn btn-success" style={{margin:"30px" ,fontSize: "large" ,border:"2px solid black"}}onClick={()=>change_page('book')}>Book ticket</button>
        </div>
        {comp}
        <h1 style={{margin:"50px", textAlign:"center"}}>Your Tickets</h1>
        <div className='flex_prac'>
          {tickets.map(ticket => (
            <Card  ticket={ticket} onDelete={handleDelete} change_page={change_page} view={ii_d}/>
          ))}
        </div>
      </div>
    );
    else{
      return(
        <>
        {
          tickets.map(ticket => (ticket.sl_no===i_d?<View ticket={ticket} x={ii_d} emailid={emailid} funxtion={funxtion} y={x}/>:console.log("noticket")))
        }
        </>
      );
    }
}


export default Dashboard;

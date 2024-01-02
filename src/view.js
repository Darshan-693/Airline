const View = ({ ticket, x, emailid, funxtion, y }) => {
  function sendmail() {
    fetch("http://localhost:3000/download", {
      method: "POST",
      body: JSON.stringify({
        email: emailid,
        from: ticket.source,
        to: ticket.destination,
        seats: ticket.seats,
        date: ticket.date,
        sl_no: ticket.sl_no,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => funxtion(10));
  }
  if (y === 10) {
    console.log("njds");
    return (
      <>
        <div className={"obg " + (y === 10 ? "on" : "")}>
          <div className={"signup_modal " + (y === 10 ? "on" : "")}>
            <h1>Ticket sent to your Email</h1>
            <button className="login-btn btn-mid" onClick={() => funxtion(0)}>
              OK
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="viewbody">
        <button onClick={() => x(0)} className="nav_button">
          &larr;
        </button>
        <table>
          <thead>
            <td>Reference number : </td>
            <td>IIA000{ticket.sl_no}</td>
          </thead>
          <tbody>
            <tr>
              <td>Boarding place</td>
              <td>{ticket.source}</td>
            </tr>
            <tr>
              <td>Landing at</td>
              <td>{ticket.destination}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{ticket.date}</td>
            </tr>
            <tr>
              <td>Number of seats</td>
              <td>{ticket.seats}</td>
            </tr>
          </tbody>
        </table>
        <button className="printbtn" onClick={() => window.print()}>
          Print
        </button>
        <button className="printbtn" onClick={() => sendmail()}>
          Download
        </button>
      </div>
    );
  }
};
export default View;

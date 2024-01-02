const Ticket = ({changepage, emailid,funxtion,ticketdb})=>{

    function confirm(event){
        event.preventDefault();
        fetch("http://localhost:3000/bookticket", {

        method: "POST",
        body: JSON.stringify({
            name : event.target.name.value,
            phno: event.target.phno.value,
            destination: event.target.destination.value,
            From: event.target.source.value,
            seats: event.target.seats.value,
            date: event.target.date.value,
            email: emailid
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(data => {
        if(data.confirm===1)
        {
            ticketdb();
            changepage('Dashboard');
            funxtion(0);
        }
        else{
            console.log("sdoi");
        }
    });
    }

    return(
        <div className="tback">
            <div className="tback_img"><img src={require('./images/back-aero.png')}/></div>
            <div className="tcontainer">
                <form onSubmit={(e)=>confirm(e)}>
                    <label>Name:</label><br/>
                    <input type="text" name="name"/><br/>
                    <label>Phone number:</label><br/>
                    <input type="tel" name="phno"/><br/>
                    <label>Destination:</label><br/>
                    <select name="destination">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                    </select><br/>
                    <label>From:</label><br/>
                    <select name="source">
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Mumbai">Mumbai</option>
                    </select><br/>
                    <label>Date:</label><br/>
                    <input type="date" name="date"/>
                    <label>Number of seats:</label><br/>
                    <input type="number" name="seats" /><br/>

                    <label>Price:Rs. {1000}</label><br/>

                    <button type="submit">Confirm</button>

                </form>
            </div>
        </div>
    );
}

export default Ticket;
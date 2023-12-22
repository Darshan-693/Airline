import Navbar from './Navbar';
import Banner from './Banner';
import bangalore from './images/bangalore.png';
import { useState } from 'react';
import About from './About';
import Bangalore from './Bangalore';
import Ticket from './Ticket';
import Dashboard from './Dashboard';
function App() {
  const[session,setsession] = useState(1);
  const [emailid,setmailid] = useState('a@gmail.com');
  const [x,funxtion] = useState(0);
  const [page,changepage] = useState('home');
  const [nav_active,makeactive] = useState(0);
  const [tickets,ticketfunction] = useState([]);
  
  function ticketdb(){
    fetch("http://localhost:3000/ticketdisplay", {

    method: "POST",
    body: JSON.stringify({
        email: emailid
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(response => response.json()).then(data => ticketfunction(data));
}
  function set_session(val,mail)
  {
    setsession(val);
    setmailid(mail);
    funxtion(3);
  }
  function make_active(val){
    makeactive(val);
  }
  function change_page(val)
  {
    changepage(val);
    make_active(0);
  }
  function login(val)
  {
    funxtion(val);
    make_active(0);
  }
  function ok(val)
  {
    changepage(val);
    funxtion(0);
  }
  if(page==='home'){
    return (
      <>
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session} ticketdb={ticketdb}/>
        <Banner funxtion={login} x={x} setsession={set_session} ok={ok}/>
        <div className={"midcities"+(x!==0?' op0':'')}>
          <h2>Available Journeys</h2>
            <li onClick={()=>change_page('Bangalore')}className={"midcitiesul"+(x!==0?' op0':'')}>
            <li onClick={()=>change_page('Bangalore')}className={"midcitiesli"+(x!==0?' op0':'')} ><img src={bangalore}/></li>
            <li onClick={()=>change_page('Bangalore')}className={"midcitiesli"+(x!==0?' op0':'')}><img src={require("./images/chennai.png")}/></li>
            <li onClick={()=>change_page('Bangalore')}className={"midcitiesli"+(x!==0?' op0':'')}><img src={require("./images/delhi.png")}/></li>
            <li onClick={()=>change_page('Bangalore')}className={"midcitiesli"+(x!==0?' op0':'')}><img src={require("./images/hyderabad.png")}/></li>
            <li onClick={()=>change_page('Bangalore')}className={"midcitiesli"+(x!==0?' op0':'')}><img src={require("./images/mumbai.png")}/></li>
          </li>
        </div>
      </>
    );
  }
  else if(page==='about')
  {
    return(
      <><Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb}/>
      {x===1?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<Ticket changepage={change_page} emailid={emailid} funxtion={funxtion} ticketdb={ticketdb}/>}
      </>
    );
  }
  else if(page==='Bangalore')
  {
    return(
    <>
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb}/>
        <Bangalore session={session} changepage={change_page} funxtion={login}/>
    </>
    );
  }
  else if(page==='Dashboard')
  {
    return(
      <>
        <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session} ticketdb={ticketdb}/>
        <Dashboard  tickets={tickets} ticketdb={ticketdb} emailid={emailid} ticketfunction={ticketfunction}/>
      </>
      );
  }
  else if(page==='book')
  {
    return(
      <>
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session} ticketdb={ticketdb} />
        <Ticket changepage={change_page} emailid={emailid} funxtion={funxtion} ticketdb={ticketdb}/>
      </>
    );
  }
}

export default App;

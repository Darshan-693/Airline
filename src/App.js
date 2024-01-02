import Navbar from './Navbar';
import Banner from './Banner';
import bangalore from './images/bangalore.png';
import { useState } from 'react';
import About from './About';
import Bangalore from './Bangalore';
import Ticket from './Ticket';
import Dashboard from './Dashboard';
import Mumbai from './Mumbai';
import Delhi from './Delhi';
import Chennai from './Chennai';
import Hyderabad from './Hyd';
function App() {
  const[session,setsession] = useState(0);
  const [emailid,setmailid] = useState('');
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
    funxtion(0);
  }
  function login(val)
  {
    funxtion(val);
    make_active(0);
  }
  function ok()
  {
    changepage('home');
    funxtion(0);
  }
  function logout(){
    change_page('home')
    funxtion(0);
    setsession(0);
    setmailid('');
  }
  if(page==='home'){
    return (
      <>
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session} ticketdb={ticketdb} logout={logout}/>
        <Banner funxtion={login} x={x} setsession={set_session} ok={ok}/>
        <div className={"midcities"+(x!==0?' op0':'')}>
          <h2>Available Journeys</h2>
            <li className={"midcitiesul"+(x!==0?' op0':'')}>
            <li className={"midcitiesli"+(x!==0?' op0':'')}><img onClick={()=>change_page('Bangalore')}src={bangalore}/></li>
            <li className={"midcitiesli"+(x!==0?' op0':'')}><img onClick={()=>change_page('Chennai')} src={require("./images/chennai.png")}/></li>
            <li className={"midcitiesli"+(x!==0?' op0':'')}><img onClick={()=>change_page('Delhi')}src={require("./images/delhi.png")}/></li>
            <li className={"midcitiesli"+(x!==0?' op0':'')}><img onClick={()=>change_page('Hyderabad')}src={require("./images/hyderabad.png")}/></li>
            <li className={"midcitiesli"+(x!==0?' op0':'')}><img onClick={()=>change_page('Mumbai')}src={require("./images/mumbai.png")}/></li>
          </li>
        </div>
      </>
    );
  }
  else if(page==='about')
  {
    return(
      <>
      {x===1?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<About/>}
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb} logout={logout}/>
      </>
    );
  }
  else if(page==='Bangalore')
  {
    return(
    <>
     {x!==0?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<Bangalore session={session} changepage={change_page} funxtion={login} x={x}/>}
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb} logout={logout}/>
    </>
    );
  }
  else if(page==='Mumbai')
  {
    return(
    <>
     {x!==0?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<Mumbai session={session} changepage={change_page} funxtion={login} x={x}/>}
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb} logout={logout}/>
    </>
    );
  }
  else if(page==='Delhi')
  {
    return(
    <>
     {x!==0?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<Delhi session={session} changepage={change_page} funxtion={login} x={x}/>}
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb} logout={logout}/>
    </>
    );
  }
  else if(page==='Chennai')
  {
    return(
    <>
     {x!==0?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<Chennai session={session} changepage={change_page} funxtion={login} x={x}/>}
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb} logout={logout}/>
    </>
    );
  }
  else if(page==='Hyderabad')
  {
    return(
    <>
     {x!==0?<Banner funxtion={login} x={x} session = {session} setsession={set_session}/>:<Hyderabad session={session} changepage={change_page} funxtion={login} x={x}/>}
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session}  ticketdb={ticketdb} logout={logout}/>
    </>
    );
  }
  else if(page==='Dashboard')
  {
    return(
      <>
        <Dashboard  tickets={tickets} ticketdb={ticketdb} emailid={emailid} ticketfunction={ticketfunction} logout={logout} change_page={change_page} comp={<Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session} ticketdb={ticketdb} logout={logout}/>}
        funxtion={funxtion} x={x}/>
      </>
      );
  }
  else if(page==='book')
  {
    return(
      <>
      <Navbar changepage={change_page} nav_active={nav_active} makeactive={make_active} funxtion={login} session={session} ticketdb={ticketdb} logout={logout}/>
        <Ticket changepage={change_page} emailid={emailid} funxtion={funxtion} ticketdb={ticketdb}/>
      </>
    );
  }
}

export default App;
const Navbar = ({changepage , nav_active, makeactive, funxtion,session , ticketdb})=>
{
    
    return(
        <>
            <nav>
                <button className="nav_button"onClick={()=>makeactive(1)} >&#9776;</button>
            </nav>
            
            <nav className={"nav_bar " + (nav_active===1?"nav_bar1":"")}>
                <button className="nav_button close2"  onClick={()=>makeactive(0)}>&times;</button>
                <ul>
                    <li><button className="nav_bt" onClick={()=>changepage('home')}>Home</button></li>
                    <li><button className="nav_bt" onClick={()=>changepage('about')}>About</button></li>
                    <li><button className={"nav_bt "+(session===1?"op0":"")}  onClick={()=>funxtion(1)}>Login</button></li>
                    <li><button className={"nav_bt "+(session===0?"op0":"")}  onClick={()=>{ticketdb();changepage('Dashboard');
                }}>Dashboard</button></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;
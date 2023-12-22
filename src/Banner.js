import { BrowserRouter } from 'react-router-dom';
const Banner = ({funxtion,x,setsession , ok}) =>
{
    const login = (event)=>{
        console.log("uhd");
        event.preventDefault();
        fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({
            email: event.target.Email.value,
            password: event.target.Password.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(data => {
        if(data.auth===1)
        {
            setsession(data.auth,data.email);
        }
        else{
            funxtion(4);
        }
    });
    }
    const accept_details = (event)=>
    {
        event.preventDefault();
        fetch("http://localhost:3000/register", {

        method: "POST",
        body: JSON.stringify({
            name : event.target.Username.value,
            email: event.target.Email.value,
            password: event.target.Password.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(data => console.log("a"));
    }
    return(
        <div className="banner">
                <h1 className='banner_h1'>INTRA-INDIA AIRLINES</h1>
                <div className={"obg " + (x===3?"on":"")}>
                    <div className={"signup_modal " + (x===3?"on":"")}>
                        <h1>Login Successful</h1>
                        <button className='login-btn btn-mid' onClick={()=>ok('home')}>OK</button>
                    </div>
                </div>
                <div className={"obg " + (x===4?"on":"")}>
                    <div className={"signup_modal " + (x===4?"on":"")}>
                        <h1>Invalid id or Wrong Password</h1>
                        <button className='login-btn btn-mid' onClick={()=>funxtion(1)}>OK</button>
                    </div>
                </div>
            <img className="plane1" src={require('./images/moving-plane.png')}/>
            <img className="plane2" src={require('./images/moving-plane.png')}/>
            <img className="plane3" src={require('./images/moving-plane.png')}/>
            <div className={"obg " + (x===1?"on":"")}>

            <div className={"signup_modal " + (x===1?"on":"")}>
                <button className="login-btn" width="50px" onClick={()=>funxtion(0)}>&times;</button>
                <h3 >Login using Username</h3>

                <form action="/login" method='POST' onSubmit={(e)=>login(e)}>
                <label>Email</label><br/>
                    <input type="Email" name="Email"/><br/>

                    <label>Password</label><br/>
                    <input type="password" name="Password"/><br/>
                    <button className="login-btn" type="submit">Login</button><br/>
                </form>
                <h4>Dont have an account?</h4><br/>
                <h4 onClick={()=>(funxtion(2))} className='r'>Register</h4>
             </div>
            </div>



            <div className={"obg " + (x===2?"on":"")}>
            <div className={"signup_modal " + (x===2?"on":"")}>
                <button className="login-btn" width="50px" onClick={()=>(funxtion(0))}>&times;</button>
                <h3 >Enter Your Details</h3>
                <form action="/register" method="POST" onSubmit={(e)=>accept_details(e)}>
                    <label>First Name</label><br/>
                    <input type="text" name="Username" /><br/>

                    <label>Email</label><br/> 
                    <input type="email" name="Email"  /><br/>  

                    <label>Password</label><br/>
                    <input type="password" name="Password" /><br/>

                    <BrowserRouter to={"/submit"}><button className="login-btn" type="submit">Sign-up</button><br/></BrowserRouter>
                </form>
                
                </div>
             </div>
            </div>

    );
}
export default Banner;

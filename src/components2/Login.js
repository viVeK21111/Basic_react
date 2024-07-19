import React,{useState,useContext} from "react";
import {Authcontext} from './Authprovider';

const Login = () => {
    const {login} = useContext(Authcontext);

    const [user,setUser] = useState('');
    const [pass, setPass] = useState('');

    const submit = (e) => {
        console.log("user: "+user,"pass: "+pass);
        e.preventDefault();
        if(login(user,pass)) {
           // sucess login
        }
        else {
            alert("incorrect username or password");
        }
    }
    /*
    return (
        <form className="form" onSubmit={submit}>
            <div className="form-group">
                <label>username</label><br></br>
                <input type="text" placeholder="Enter username"  value={user} onChange={(e)=> setUser(e.target.name)}></input>
            </div><br></br>
            <div className="form-group">
                <label>password</label><br></br>
                <input type="password" placeholder="Enter userpassword"  value={pass} onChange={(e)=> setPass(e.target.name)}></input>
            </div>
            <br></br>
            <button type="submit"> Login </button>
        </form>
    );
    */
    return (
        <form className="form" onSubmit={submit} >
            <div>
                <label>Username:<input type="text" placeholder="Enter username" value={user} onChange={(e) => setUser(e.target.value)} /></label>
            </div>
            <div>
                <label>Password:<input type="password" placeholder="Enter password" value={pass} onChange={(e) => setPass(e.target.value)}/></label>
            </div>
           <button type="submit">Login</button>
        </form>
    );
};
export default Login;


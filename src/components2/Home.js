import React,{useContext} from "react";
import {Authcontext} from './Authprovider';

const Home =() => {
    const {user,logout} = useContext(Authcontext);
    return (
        <div>
            <h2>hi {user.username}, welcome to our website</h2>
        <br></br>
        <button onClick={logout}>logout</button>
        </div>
    );
};
export default Home;
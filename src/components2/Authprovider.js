import React, {createContext,useState,useEffect, Children} from "react";

export const Authcontext = createContext();
const Authprovider = ({children}) => {
    const[user,setUser]=useState(null);
    useEffect(() => {
        const storeduser = localStorage.getItem('user');
        if(storeduser) {
            setUser(JSON.parse(storeduser));
        }
    },[]);
    const login= (username,password) => {
        const predefinedUsers =[{username:'user1',password:'pass1'}];
        const user = predefinedUsers.find(
            (u) => u.username === username && u.password === password
          );
        if(user) {
            setUser(user);
            localStorage.setItem('user',JSON.stringify(user));
            return true;
        }
        return false;
    };
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };
    return (
        <Authcontext.Provider value = {{user,login,logout}}>
            {children}
        </Authcontext.Provider>
    );
};
export default Authprovider;

import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Emailfrom.css';

const Emailfrom = () => {
    const [data,setData] = useState(
        {
            name:"",
            email:"",
            message:""
        }
    );
    const mail = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }
    const submitmail = (e) => {
        if(data.name==="") {
            alert("name can't be empty");
            return;
        }
        if(data.email==="") {
            alert("email is empty");
            return;
        }
        if(data.email==="") {
            alert("message can't be empty");
            return;
        }
        e.preventDefault();
        const params = {
            from_name: data.name,
            from_email:data.email,
            to_name:'vivek',
            message: data.message
        };
        emailjs.send('service_xo31vk8', 'template_jgtb4cb', params, 'WuUxTxfbrkbb1Hp8B').then(
            (result) => {
                alert("form submitted successfully");
                setData( {
                    name:"",
                    email:"",
                    message:""
                });
            },
            error => {
                alert("Failed to submit the form");
            }
        )
    }
    return (
        <div className="form">
        <h2>Contact us form by react (Emailjs)</h2>
        <form onSubmit={submitmail}>
          <label>Name</label>
          <input type="text" name="name" value={data.name}
            onChange={mail} placeholder="Enter your name"></input>

          <label>Email</label>
          <input type="email" name="email" value={data.email}
            onChange={mail} placeholder="Enter your email"></input>

          <label>Message</label>
          <textarea name="message" cols="30" rows="10" value={data.message}
            onChange={mail} placeholder="Enter your message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
export default Emailfrom;
import React, {useState,useEffect} from "react";
import axios from 'axios';

const Lab6 = () => {
    const [weather,setWeather]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState(null);
    const [input,setInput] = useState(null);
    const [city,setCity] = useState(null);
    const [flag,setflag]=useState(true);
    const apikey='a123ac364b7cd56f90e4d1329e233f8e';
    useEffect(()=> {
        const fetch = async() => {
            if(!city)  return;
            setLoading(true);
            try {
                console.log(`Fetching weather data for ${city} with API key ${apikey}`);
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
                setWeather(response.data);
                setLoading(false);
                console.log("data fetched success..");
            }
            catch(err) {
                console.log("error fetching data");
                setError(err);
            }
        };
        fetch(); // run the function
    },[city]);
    const func = () => {
        setflag(true);
        setWeather(null);
        setError(false);
        setLoading(true);
    }
    const submit = (e) => {
        e.preventDefault();
        setCity(input);
        setflag(false);
    }
    if(flag) {
        return (
            <form onSubmit={submit}>
          <label style={{ fontSize: "25px", fontWeight: "bold" }}>Enter city name</label><br />
          <input
            type="text"
            id="name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: New York"
            style={{ fontSize: "16px", padding: "8px", margin: "10px 0" }}
          />
          <button type="submit" style={{ fontSize: "16px", padding: "8px 16px" }}>Submit</button>
        </form>
        );
    }
    if(loading) {
        return <p>loading weather....</p>
    }
    if(error) {
        return <p>
            Error fetching weather: {error.message} 
        </p>
    }
        return (
            <div>
              <h2> weather in {weather.name}</h2><br></br>
              <h3>Temperatur: {(weather.main.temp-273.15).toFixed(3)} degree celcius</h3> 
              <p>condition: {weather.weather[0].description}</p>
              <button onClick={func}>Go back</button>
            </div>
        );
};
export default Lab6;
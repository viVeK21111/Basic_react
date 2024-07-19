import React, {useState,useEffect} from "react";
import axios from 'axios';

const Lab6 = () => {
    const [weather,setWeather]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError] = useState(null);
    const city="Hyderabad";
    const apikey='a123ac364b7cd56f90e4d1329e233f8e';
    useEffect(()=> {
        const fetch = async() => {
            try {
                console.log(`Fetching weather data for ${city} with API key ${apikey}`);
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
                console.log("data fetched success..");
                setWeather(response.data);
                setLoading(false);
            }
            catch(err) {
                setError(err);
                setLoading(true);
            }
        };
        fetch(); // run the function
    },[]);
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
        </div>
    );
};
export default Lab6;
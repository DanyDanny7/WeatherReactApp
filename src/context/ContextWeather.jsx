import axios from "axios";
import React, {  useState } from "react";

const useContextWeather = React.createContext();

const ContextWeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  const submitLocation = async (locationWeather) => {
    try {
      const resp = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=52882b95a024481f92470050220704&q=${locationWeather}&days=1&aqi=no&alerts=no`
      );
      console.log(resp.data);
      
      setWeather(resp.data);
      

    } catch (error) {
      return console.log(error);
    }
  };

  const data = { weather, submitLocation };

  return (
    <useContextWeather.Provider value={data}>
      {children}
    </useContextWeather.Provider>
  );
};

export { ContextWeatherProvider };
export default useContextWeather;

import React, { useState, createContext } from "react";
import axios from "axios";

const ContextWeather = createContext();

const ContextWeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({ isLoading: true, data: {} });

  const submitLocation = async (locationWeather) => {
    setWeather({ isLoading: true, data: {} })
    try {
      // esta forma te permite mayor control de los parametros.
      const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json`, {
        params: {
          key: "52882b95a024481f92470050220704",
          q: locationWeather,
          days: 1,
          aqi: "no",
          alerts: "no"
        }
      });
      console.log("resp.data", data);
      setWeather({ isLoading: false, data })
    } catch (error) {
      setWeather({ isLoading: false, data: {} })
      console.log("submitLocation", error);
    }
  };

  return (
    <ContextWeather.Provider value={{ weather, submitLocation }}>
      {children}
    </ContextWeather.Provider>
  );
};

export { ContextWeatherProvider };
export default ContextWeather;

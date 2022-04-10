import React from "react";
import ActiveWeather from "./UI/ActiveWeather";
import FormWeather from "./UI/FormWeather";
import ListWeather from "./UI/ListWeather";

const WeatherScreen = () => {
  return (
    <div className="backgroud">
      <h1 className="text-center text-4xl text-white font-bold font-mono">
        React Weather
      </h1>
      <div className="hero">
        <FormWeather />
         
        <div className="gap-10 grid-custom ">
          <ActiveWeather />
          <ListWeather />
        </div>
      </div>
    </div>
  );
};

export default WeatherScreen;

import { useContext } from "react";
import useContextWeather from "../../context/ContextWeather";
import { imgWeather } from "../../Helpers/ImgFormat";

const ActiveWeather = () => {
  const { weather : ActiveWeather } = useContext(useContextWeather);
   
  if (!ActiveWeather) {
    return <p>Loading..</p>;
  }
  
  const {location,current} = ActiveWeather;
  
  return (
    <div className="bg-white flex flex-col w-full py-10 px-6 rounded-lg">
      <div className=" flex flex-col mx-auto my-5">
        <h2 className="text-center ">Pais:{location.country}</h2>
         <h3>{location.name}</h3>
      </div>

      <h3 className="text-4xl text-center">{current.temp_c}</h3>
      <div className="">

          <h4>{current.condition.text}</h4>
        <img width={200} className="object-cover" src={imgWeather(current.condition.text)} alt="weather" />
      </div>
       
      <div className="flex flex-col">
        <div className="flex justify-between my-4">
          <h4>Temperatura en farenheit</h4>
          <span>{current.feelslike_f}</span>
        </div>
        <div className="flex justify-between my-4">
          <h4>Nublado</h4>
          <span>{current.cloud}</span>
        </div>
        <div className="flex justify-between my-4">
          <h4>Weather</h4>
          <span>Clear Sky</span>
        </div>
        <div className="flex justify-between my-4">
          <h4>Weather</h4>
          <span>Clear Sky</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveWeather;

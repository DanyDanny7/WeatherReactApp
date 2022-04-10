import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import ContextWeather from "../context/ContextWeather";

function MyCombobox() {

   const {submitLocation} = useContext(ContextWeather);

  const [query, setQuery] = useState("");
  const [listLocation, setListLocation] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://countriesnow.space/api/v0.1/countries/capital`
      );
      setListLocation(data.data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const text = e.target.value
    setQuery(text);
    if (text.length > 0) {
      filtrado(text);
    }
  };

  const filtrado = useCallback(
    (text) => {
      let matches = [];

      matches = listLocation.filter((item) => {
        const regex = new RegExp(`^${text}`, "gi");
        return item.capital.match(regex);
      });

      setSuggestion(matches);
    },
    [listLocation, setSuggestion]
  );

  const onsuggestionSelected = (text) => {
    setQuery(text);
    setSuggestion([]);
    // submitLocation(query); // así estaba antes. pero no funciona. (la impementacion del input select es rara)
    submitLocation(text); // así funciona. pero te dejo la anterior porque no entiendo del todo tu objetivo al tener 2 estados para esto
  };


  return (
    <div className="my-5">
      <input
        type="text"
        value={query}
        className="input"
        onChange={handleChange}
      />
      <div
        className={`border-x-2 border-b-0 border-gray-900 ${
          suggestion.length > 5 && "overflow-auto h-24"
        } bg-slate-100 `}
      >
        {suggestion &&
          suggestion.map((item,id) => (
            <p
              onClick={() => onsuggestionSelected(item.capital)}
              className={`text-blue-400 font-semibold p-1 hover:bg-slate-600 `}
              key={id}
            >
              {item.capital}
            </p>
          ))}
      </div>
    </div>
  );
}

export default MyCombobox;

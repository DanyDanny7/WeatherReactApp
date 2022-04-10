import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import useContextWeather from "../context/ContextWeather";

function MyCombobox() {

   const {submitLocation : submit} = useContext(useContextWeather);

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

  const handleChange = (text) => {
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
    submit(query);
  };


  return (
    <div className="my-5">
      <input
        type="text"
        value={query}
        className="input"
        onChange={(e) => handleChange(e.target.value)}
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

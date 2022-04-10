export const imgWeather = (text) => {
  switch (text) {
    case "Clear" || "Sunny":
      return "https://www.metaweather.com/static/img/weather/c.svg";
    
     case "Snow":
      return "https://www.metaweather.com/static/img/weather/sn.svg";
    
    case 'Partly cloudy':
      return "https://www.metaweather.com/static/img/weather/lc.svg";
    
    case 'Overcast':
      return "https://www.metaweather.com/static/img/weather/hc.svg";
    default:
      return text;
  }
};

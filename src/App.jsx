import { ContextWeatherProvider } from "./context/ContextWeather";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ContextWeatherProvider>
      <AppRouter />
    </ContextWeatherProvider>
  );
}

export default App;

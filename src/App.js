import Input from "./components/Input";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentLocationData();
  }, []);

  const handleReset = () => {
    weather.fetchCurrentLocationData();
    weather.setSearchCity("");
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchWeatherData} value="Search" />
      <Card />
      <Button onClick={handleReset} value="Refrash" />
    </div>
  );
}

export default App;

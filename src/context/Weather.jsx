import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchWeatherData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        setWeather(response);
    }

    const fetchCurrentLocationData = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then((data) => {
                setWeather(data);
            })
        })
    }
    return (
        <WeatherContext.Provider value={{weather, searchCity, setSearchCity, fetchWeatherData, fetchCurrentLocationData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}
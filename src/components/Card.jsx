import React from 'react'
import { useWeather } from '../context/Weather';

const Card = () => {
  const weather = useWeather();
  const data = weather.weather;
  console.log(weather)
  return (
    <div className='card'>
      <img src={data?.current?.condition?.icon} alt='weather' />
      <h2>{data?.current?.temp_c} °C°F</h2>
      <p>{data?.location?.name}, {data?.location?.region}</p>
    </div>
  )
}

export default Card;
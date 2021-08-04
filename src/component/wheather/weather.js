// api.openweathermap.org/data/2.5/weather?q=Gwalior&appid=935847ca520235df50f05ab2271da871

import { React, useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weatherCard";
require("dotenv").config();

const Wheather = () => {
  const [searchValue, setsearchValue] = useState("Gwalior");
  const [tempInfo, settempInfo] = useState({});
  const getWheatherInfo = async () => {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=935847ca520235df50f05ab2271da871`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0]; //destructuring+renaming
      const { name: cityName } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        cityName,
        speed,
        country,
        sunset,
      };
      settempInfo(myNewWeatherInfo);
    } catch (error) {
      alert(`No city with ${searchValue} name exists`);
      console.log(error);
    }
  };
  useEffect(() => {
    getWheatherInfo();
  }, []); //only run on page load or refresh
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => {
              setsearchValue(e.target.value);
            }}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWheatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* Our temp card */}
      <WeatherCard tempInfo={tempInfo} />
    </>
  );
};

export default Wheather;

import React, { useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setweatherState] = React.useState("");
  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    cityName,
    speed,
    country,
    sunset,
  } = tempInfo;
  let sec = sunset;
  let date = new Date(sec * 1000); //Time in millisec
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setweatherState("wi-day-cloudy");
          break;
        case "Haze":
          setweatherState("wi-fog");
          break;

        case "Clear":
          setweatherState("wi-day-Sunny");
          break;
        case "Mist":
          setweatherState("wi-dust");
          break;
        default:
          setweatherState("wi-day-Sunny");
          break;
      }
    }
  }, [weatherMood]); //If weathermood values changes then only call this
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {cityName}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* Our 4 divided section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM
                <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;

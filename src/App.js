import React, { useState } from "react";
import axios from "axios";

export default function App(params) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

  function handleClick(params) {
    if (params.key === "Enter") {
      axios.get(url).then((r) => {
        setData(r.data);
        console.log(r.data);
      });

      setLocation("");
    }
  }

  return (
    <div className="main">
      <div className="search">
        <input
          value={location}
          type="text"
          className="search-btn"
          placeholder="i.e. New York"
          onKeyDown={handleClick}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
      </div>
      <h1>Location: {data.name}</h1>
      <div className="forecast">
        <p>
          Temperature: <b>{data.main ? data.main.temp.toFixed() : ""}C°</b>
        </p>
        <p>Feels like: {data.main ? data.main.feels_like.toFixed() : ""}C°</p>
        <p>Humidity: {data.main ? data.main.humidity.toFixed() : ""}%</p>
      </div>
    </div>
  );
}

import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = `616b14cbd38253313b3b8852fa77335d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="goldenrod"
      size={300}
      animate={true}
    />
  );
}

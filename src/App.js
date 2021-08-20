import React from "react";
import Info from "./components/Info"
import Form from "./components/Form"
import Weather from "./components/Weather"
import LanguageButton from "./components/LanguageButton";
import Time from "./components/Time";

const API_KEY = "9bb0bc0370c0169cee7d8d8e2f8d7380";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();

    if (data.name != null) {
      var temp = data.main.temp;
      temp = Math.floor(temp - 273.15);

      var pressure = data.main.pressure;
      pressure = Math.floor(pressure * 0.75006);

      var sunset = data.sys.sunset * 1000;
      var dateSunset = new Date();
      dateSunset.setTime(sunset);
      var sunset_date = dateSunset.getHours() + ":" + dateSunset.getMinutes() + ":" + dateSunset.getSeconds();

      var sunrise = data.sys.sunrise * 1000;
      var date = new Date();
      date.setTime(sunrise);
      var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: temp,
        city: data.name,
        country: data.sys.country,
        pressure: pressure,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Не удаётся найти введённый город",
      });
    }


  };

  render() {
    return (
      <div>
        <LanguageButton />
        <Time />
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 info">
                  <Info />
                </div>
                <div className="col-sm-7 form">
                  <Form weatherMethod={this.getWeather} />
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
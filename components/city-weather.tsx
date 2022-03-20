import { Component } from "react";

// to get api key: https://openweathermap.org/appid
const API_KEY = "f48712b85cefe06f49489db84236278d"; // added my own API key

interface CityWeatherProps {
  city: string;
}

interface CityWeatherState {
  weatherResult: any;
}

export class CityWeather extends Component<CityWeatherProps, CityWeatherState> {
  public constructor(props) {
    super(props);
    this.state = {
      weatherResult: null
    };
  }

  public componentDidMount() {
    const { city } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => this.setState({ weatherResult: result }));
  }

  public render() {
    const { city } = this.props;
    const { weatherResult } = this.state;

    return (
      //I implemented a conditional statement to prevent the API from sending null data and crashing the app.
      weatherResult && (
        <div>
          <h1>{city}</h1>
          <div>
            Temperature: {KtoF(weatherResult.main.temp).toFixed(0)} &#8457;
          </div>
          <div>Description: {weatherResult.weather[0].description}</div>
        </div>
      )
    );
  }
}

function KtoF(tempKevlin: number) {
  return ((tempKevlin - 273.15) * 9) / 5 + 32;
}

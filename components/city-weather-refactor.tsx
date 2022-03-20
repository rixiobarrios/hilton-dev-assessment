import { useEffect, useState } from "react";

const API_KEY = "f48712b85cefe06f49489db84236278d";

interface CityWeatherProps {
  city: string;
}

interface CityWeatherState {
  weatherResult: any;
  main: any;
  weather: Array<any>;
}

export default function CityWeatherRefactor({ city }: CityWeatherProps) {
  const [weatherResult, setWeatherResult] = useState<CityWeatherState | null>(
    null
  );

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => setWeatherResult(result));
  }, [city]);

  const KtoF = (tempKevlin: number) => {
    return ((tempKevlin - 273.15) * 9) / 5 + 32;
  };

  return (
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

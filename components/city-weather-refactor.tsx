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
      // added div to wrap results in a container and center it using flexbox
      <div className="flex flex-col items-center justify-center">
        {/* adjusted result container shape, color, width, height, padding, margin-top and centered contents */}
        <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden w-50 h-62 p-4 my-10">
          {/* adjusted font size, weight and color and made it all uppercase*/}
          <h1 className="text-2xl font-bold text-darkGrey uppercase">{city}</h1>
          {/* added API call for image and centered it */}
          <img
            className="h-32 w-full object-contain"
            src={`http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png`}
            alt={`${weatherResult.weather[0].description} icon`}
          />
          {/* moved description above temperature, removed description text and adjusted size, color, padding  and capitalization*/}
          <div className="text-lg font-medium text-mildGray capitalize p-1">
            {weatherResult.weather[0].description}
          </div>
          {/* divided div into text and temperature results and changed to spans.
          adjusted color, margin-right and size on text */}
          <span className="text-sm font-medium text-mildGray mr-3">
            Temperature:
          </span>
          {/* adjusted size and weight */}
          <span className="text-3xl font-semi-bold">
            {KtoF(weatherResult.main.temp).toFixed(0)} &#8457;
          </span>
        </div>
      </div>
    )
  );
}

import { useState } from "react";
import CityWeatherRefactor from "../components/city-weather-refactor";

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);
  return (
    <div className="py-2">
      <form
        className="flex items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);
          setCity(formdata.get("city").toString());
        }}
      >
        <span className="text-xl font-medium text-gray-700">
          Weather Search:
        </span>{" "}
        <input
          data-testid="weather-input"
          className="border border-solid rounded-lg rounded-r-none py-3 px-3 ml-2"
          type="text"
          name="city"
        />
        <button
          className="border border-solid border-blue-500 bg-blue-500 hover:bg-blue-800 text-l font-bold text-white uppercase rounded-r-lg py-3 px-3 bg-primary"
          type="submit"
        >
          Submit
        </button>
      </form>

      {city && (
        <div className="mt-4">
          <CityWeatherRefactor city={city} />
        </div>
      )}
    </div>
  );
}

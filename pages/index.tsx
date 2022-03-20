import { useState } from "react";
import CityWeatherRefactor from "../components/city-weather-refactor"; //imported new refactor file

export default function IndexPage() {
  const [city, setCity] = useState<string | null>(null);
  return (
    // adjusted layout and background color
    <main className="w-screen min-h-screen h-full bg-secondary flex flex-col items-center justify-start p-9">
      <div className="py-2">
        <form
          className="flex items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            const formdata = new FormData(e.currentTarget);
            setCity(formdata.get("city").toString());
          }}
        >
          {/* adjusted font weight and color */}
          <span className="text-xl font-medium text-darkGray">
            Weather Search:
          </span>{" "}
          <input
            data-testid="weather-input"
            // adjusted input shape and border color
            className="border border-lightGray rounded-lg rounded-r-none py-3 px-3 ml-2"
            type="text"
            name="city"
          />
          <button
            // adjusted button shape, color, text and added hover effect
            className="text-l font-bold text-white uppercase border border-solid border-primary bg-primary hover:bg-blue-800 rounded-r-lg py-3 px-3 bg-primary"
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
    </main>
  );
}

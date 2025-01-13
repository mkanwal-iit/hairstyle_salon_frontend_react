import axios from "axios";
import { useState, useEffect } from "react";

function Weather({ initialCity = "Chicago", appointmentDate }) {
  const [city, setCity] = useState(initialCity);
  const [weather, setWeather] = useState(null);
  const [recommendation, setRecommendation] = useState("");
  const [inputCity, setInputCity] = useState(initialCity);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/weather/${city}`)
      .then((response) => {
        setWeather(response.data);
        generateRecommendation(response.data);
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error("Error fetching weather:", error.response ? error.response.data : error.message);
        setError("Error fetching weather data. Please try again.");
      });
  }, [city]);

  const generateRecommendation = (weatherData) => {
    const condition = weatherData.weather[0].main.toLowerCase();
    let recommendationText = "";

    if (condition.includes("rain")) {
      recommendationText = "It's rainy outside. How about a relaxing hair spa?";
    } else if (condition.includes("clear")) {
      recommendationText = "The weather is clear and sunny. Perfect for a new haircut!";
    } else if (condition.includes("clouds")) {
      recommendationText = "It's cloudy today. A good day for a hair treatment.";
    } else if (condition.includes("snow")) {
      recommendationText = "It's snowing! Consider a cozy indoor hair styling session.";
    } else {
      recommendationText = "Check out our latest hair services!";
    }

    setRecommendation(recommendationText);
  };

  const handleCityChange = () => {
    setCity(inputCity);
  };

  const suggestAlternativeDay = (weatherData) => {
    const condition = weatherData.weather[0].main.toLowerCase();
    if (condition.includes("rain") || condition.includes("snow")) {
      return "The weather is not suitable for this treatment. Consider rescheduling.";
    }
    return "The weather is suitable for this treatment.";
  };

  const formatAppointmentDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading...</p>;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Weather in {city}</h2>
      <p className="mb-2">Temperature: {weather.main.temp} °C</p>
      <p className="mb-2">Condition: {weather.weather[0].description}</p>
      <h3 className="text-xl font-semibold mt-4">Recommendation</h3>
      <p className="mb-4">{recommendation}</p>
      <h3 className="text-xl font-semibold mt-4">Appointment Suggestion</h3>
      <p className="mb-4">{suggestAlternativeDay(weather)}</p>
      <p className="mb-4">Appointment Date: {formatAppointmentDate(appointmentDate)}</p>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 rounded bg-gray-700 border border-gray-600 text-white w-full sm:w-auto"
        />
        <button
          onClick={handleCityChange}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors w-full sm:w-auto"
        >
          Change City
        </button>
      </div>
      <button
        onClick={() =>
          window.open(`https://www.google.com/maps/dir/?api=1&destination=667+NORTH+Main+Chicago,+IL+60559`, "_blank")
        }
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-400 transition-colors w-full sm:w-auto"
      >
        Get Directions
      </button>
    </div>
  );
}

export default Weather;

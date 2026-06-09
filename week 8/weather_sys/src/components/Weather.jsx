import { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch weather data"
          );
        }

        const data = await response.json();

        setWeather(data.current_weather);

        setLastUpdated(
          new Date().toLocaleTimeString()
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

  const refreshWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=17.38&longitude=78.48&current_weather=true"
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch weather data"
        );
      }

      const data = await response.json();

      setWeather(data.current_weather);

      setLastUpdated(
        new Date().toLocaleTimeString()
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading Weather Data...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-box">
        <h2>{error}</h2>

        <button onClick={refreshWeather}>
          Retry
        </button>
      </div>
    );
  }

  const tempIcon =
    weather.temperature > 30
      ? "☀️"
      : weather.temperature > 20
      ? "⛅"
      : "🌧️";

  return (
    <div className="weather-card">
      <h1>🌊 Weather Information System</h1>

      <h2>{tempIcon}</h2>

      <h3>📍 Hyderabad</h3>

      <div className="weather-info">
        <p>
          🌡 Temperature:
          <span>
            {weather.temperature} °C
          </span>
        </p>

        <p>
          💨 Wind Speed:
          <span>
            {weather.windspeed} km/h
          </span>
        </p>

        <p>
          🧭 Wind Direction:
          <span>
            {weather.winddirection}°
          </span>
        </p>
      </div>

      <p className="updated">
        Last Updated: {lastUpdated}
      </p>

      <button
        className="refresh-btn"
        onClick={refreshWeather}
      >
        Refresh Weather
      </button>
    </div>
  );
}

export default Weather;
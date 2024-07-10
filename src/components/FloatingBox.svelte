<script>
  // @ts-nocheck

  let location = "";
  let weatherData = null;
  let errorMessage = "";
  export let airQuality;

  const gradientMap = {
    1: "Good",
    2: "Moderate",
    3: "Unhealthy-sensitive",
    4: "Unhealthy",
    5: "Very-unhealthy",
    6: "Hazardous",
  };

  const submitLocation = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${location}&key=bd8cdf6ec9774d819fe231045240507&aqi=yes`,
        { mode: "cors" }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      weatherData = await response.json();
      console.log(weatherData)
      airQuality = weatherData.current.air_quality["us-epa-index"];
      errorMessage = "";
    } catch (error) {
      weatherData = null;
      errorMessage = error.message;
    }
  };
</script>

<div class="container">
  <div class="floating-box">
    <div class="content">
      <h1>Welcome!</h1>
      <p>Let's take a look at your air quality</p>
    </div>
    <input
      class="input-box"
      type="text"
      placeholder="Enter your location"
      bind:value={location}
    />
    <button class="submit-button" on:click={submitLocation}>
      Search for Air Quality
    </button>
    {#if weatherData}
      <div class="weather-info">
        <p>
          <strong>Location:</strong>
          {weatherData.location.name}, {weatherData.location.region} - {weatherData.location.country}
        </p>
        <p><strong>Temperature:</strong> {weatherData.current.temp_f}°F</p>
        <p>
          <strong>Air Quality:</strong>
          {weatherData.current.air_quality["us-epa-index"]} - {gradientMap[
            airQuality
          ]}
        </p>
      </div>
    {/if}
    {#if errorMessage}
      <div class="error-message">
        {errorMessage}
      </div>
    {/if}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* background-color: #f0f0f0; */
  }

  .floating-box {
    width: 50vw;
    height: 50vh;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    font-family: "Roboto", sans-serif;
  }

  .content {
    font-size: 1.5rem;
    color: #333333;
    margin-bottom: 20px;
  }

  .input-box {
    width: 80%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .submit-button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #45a049;
  }

  .weather-info {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #333333;
  }

  .error-message {
    margin-top: 20px;
    color: red;
  }
</style>

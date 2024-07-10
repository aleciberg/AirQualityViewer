import { json } from "@sveltejs/kit";

export async function GET({ request, params, url }) {
  const location = url.searchParams.get("location");
  const urlString = `https://api.weatherapi.com/v1/current.json?q=${location}&key=bd8cdf6ec9774d819fe231045240507&aqi=yes`;
  let weatherData;
  let airQuality;
  let errorMessage;
  try {
    weatherData = await fetch(urlString);
    return weatherData;
    // let weatherData = await response.json();
    // console.log(weatherData)
    // let airQuality = weatherData.current.air_quality['us-epa-index']
    // let errorMessage = '';
  } catch (error) {
    let weatherData = null;
    // @ts-ignore
    let errorMessage = error.message;
    return new Response(JSON.stringify({ weatherData: "" }), { status: 500 });
  }
}

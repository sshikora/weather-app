async function getWeather(lat, long, token) {

    // const url = `https://api.darksky.net/forecast/${token}/${lat},${long}`
    const url = `http://localhost:3001/forecast/${lat},${long}`
    debugger
    const response = await fetch(url, {
      method:'GET'
    })
    // await checkStatus(response)
    console.log(response)
    const weatherData = await parseJSON(response)
    console.log(JSON.stringify(weatherData))
    return weatherData

}

function checkStatus(response) {
  if ((response.status >= 200 && response.status < 300) || response.status === 0) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  debugger;
  return response.json();
}

const client = { getWeather };
export default client;

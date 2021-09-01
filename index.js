import axios from "axios";
import process from "process";

const arg = process.argv.slice(2);
console.log(arg);

const [city] = arg;

const apiKey = "1c7d11bdf9eb334af450650d15059075";

let search = "berlin";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios
  .get(url)
  .then((response) => {
    //console.log('data', response.data);
    console.log(
      `It is now ${response.data.main.temp} in ${response.data.name}, ${response.data.sys.country}\n` +
        `The current weather conditions are: ${response.data.weather[0].description}`
    );
  })
  .catch((err) => console.log(err));

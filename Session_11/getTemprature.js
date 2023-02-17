const axios = require("axios");
const API_KEY = require("./APIKEY");

const getTemprature = (lat, lng) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lng}&aqi=no`
      )
      .then((response) => {
        const data = response.data;
        const city_name = data.location.name;
        const temp = data.current.temp_c;

        resolve({ city: city_name, temp: temp });
      });
  });
};

module.exports = getTemprature;

const axios = require("axios");

const getLatLong = (city,callback) => {
  return new Promise((resolve, reject) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`;
    axios
      .get(url)
      .then((result) => {
        const data = result.data.results[0];

        const lat = data.geometry.lat;
        const lng = data.geometry.lng;
        resolve({ lng: lng, lat: lat });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = getLatLong;

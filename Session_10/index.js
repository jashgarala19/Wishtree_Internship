const getLatLong = require("./getLatLong");
const getTemprature = require("./getTemprature");

const cityName = "Ahmedabad";
const Temprature = (c, callback) => {
  // const { lat, lng } = await getLatLong(c);
  // const { city, temp } = await getTemprature(lat, lng);

  // console.log(`City: ${city} | Temprature: ${temp}℃`);

  getLatLong(c, (err, data) => {
    if (err) {
      callback(err, undefined);
    } else {
      const { lat, lng } = data;

      getTemprature(lat, lng, (err, data) => {
        if (err) {
          callback(err, undefined);
        } else {
          // console.log(data);
          callback(undefined, data);
        }
      });
    }
  });
};

Temprature(cityName, (err, data) => {
  if (err) {
    console.error(err.cause);
  } else {
  
      console.log(`City: ${data.city} | Temprature: ${data.temp}℃`);
  }
});

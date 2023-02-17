const getLatLong = require("./getLatLong");
const getTemprature = require("./getTemprature");

const cityName = 'Ahmedabad';
const Temprature = async (c) => {
  const { lat, lng } = await getLatLong(c);
  const { city, temp } = await getTemprature(lat, lng);

  console.log(`City: ${city} | Temprature: ${temp}℃`);
};

Temprature(cityName);
Temprature('Pune');
Temprature('Delhi');
Temprature('New York');
Temprature('Surat')


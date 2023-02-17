const getGeoData = require("./geocode");

getGeoData("Surat,Gujrat")
  .then((result) => {
    console.log(`Longitude ${result.lng} and Latitude ${result.lat}`);
  })
  .catch((err) => {
    console.log(err);
  });

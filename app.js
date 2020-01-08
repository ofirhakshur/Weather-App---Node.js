const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs.argv;

geocode.geocodeAddress(argv.address, (error, results) => {
  if(error)
  {
    console.log(error);
  }
  else {
    console.log(results.Address);

    weather.getWeather(results.Latitude, results.Longitude, (error, weatherResults) => {
      if(error)
      {
        console.log(error);
      }
      else {
        console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});

//lang, lng, callback

//fef0b4a4bb68374863d7d0c95fe9a8db
const request = require ('request');

var getWeather = (lang, lng, callback) => {
  request({
    url : `https://api.darksky.net/forecast/fef0b4a4bb68374863d7d0c95fe9a8db/${lang},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200)
    {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;

const request = require ('request');

var geocodeAddress = (address, callback) => {

  var encodeAddress = encodeURIComponent(address);

  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=A49WIBGgGE9ukv66C0BQZVTM3AoFj9p0&location=${encodeAddress}`,
    json: true
  }, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    if(error)  //If there is any error
    {
      callback('Unable to connect to API');
    }
    else
    {
      callback(undefined, {
        Address: body.results[0].providedLocation.location,
        Latitude: body.results[0].locations[0].latLng.lat,
        Longitude: body.results[0].locations[0].latLng.lng
      });
    }
  });
};

module.exports = {
  geocodeAddress
};

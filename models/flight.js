var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var flightSchema = mongoose.Schema({
  name: String,
  flight_no: String ,
  tagline: String,
  image_url: String,
  logo: String,
  departure_time:String,
  arrival_time: String,
  from: String,
  arrival: String,

});
var Flight = mongoose.model("Flight", flightSchema);

function validateFlight(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    flight_no: Joi.string().min(3).max(100).required(),
    image_url: Joi.string().min(3).max(1000).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Flight = Flight;
module.exports.validate = validateFlight;

const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Flight } = require("../../models/flight");
//get products

router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let flights = await Flight.find().skip(skipRecords).limit(perPage);
  let total = await Flight.countDocuments();
  return res.send({ total, flights });
});

//get single products
router.get("/:id", async (req, res) => {
  try {
    let flight = await Flight.findById(req.params.id);
    if (!flight)
      return res.status(400).send("Flight With given ID is not present"); //when id is not present id db
    return res.send(flight); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id", async (req, res) => {
  let flight = await Flight.findById(req.params.id);
  flight.name = req.body.name;
  flight.flight_no = req.body.flight_no;
  flight.tagline = req.body.tagline;
  flight.image_url = req.body.image_url;
  flight.logo = req.body.logo;
  flight.departure_time = req.body.departure_time;
  flight.arrival_time = req.body.arrival_time;
  flight.from = req.body.from;
  flight.arrival = req.body.arrival;
  await flight.save();
  return res.send(flight);
});
//update a record
router.delete("/:id",async (req, res) => {
  let flight = await Flight.findByIdAndDelete(req.params.id);
  return res.send(flight);
});
//Insert a record
router.post("/", async (req, res) => {
  let flight = new Flight();
  flight.name = req.body.name;
  flight.flight_no = req.body.flight_no;
  flight.tagline = req.body.tagline;
  flight.image_url = req.body.image_url;
  flight.logo = req.body.logo;
  flight.departure_time = req.body.departure_time;
  flight.arrival_time = req.body.arrival_time;
  flight.from = req.body.from;
  flight.arrival = req.body.arrival;
  await flight.save();
  return res.send(flight);
});
module.exports = router;

import GenericService from "./GenericService";
class FlightsService extends GenericService {
  constructor() {
    super();
  }
  addFlight = (data) => this.post("flights", data);
  deleteFlight = (_id) => this.delete("flights/" + _id);
  updateFlight = (_id, data) => this.put("flights/" + _id, data);
  getFlights = () => this.get("flights");
  getSingleFlight = (id) => this.get("flights/" + id);
}

let flightService = new FlightsService();
export default flightService;

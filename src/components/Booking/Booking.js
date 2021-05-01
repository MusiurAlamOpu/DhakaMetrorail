import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import "./Booking.css";
import fakeData from "../../Destinations.json";
import { TicketContext } from "../../App.js";
import TicketCard from "../TicketCard/TicketCard";

const Booking = () => {
  const [ticketType, setTicketType] = useContext(TicketContext);
  const [destinations, setDestination] = useState(fakeData);
  const [search, setSearch] = useState(false);

  // setDestination(fakeData);
  console.log("des: ", ticketType);
  const [travelInfo, setTravelInfo] = useState({
    from: "",
    destination: "",
    date: "",
    typeOfticket: "",
  });
  travelInfo.typeOfticket = ticketType;

  const hangleChange = (event) => {
    console.log(event.target.name, event.target.value);
    let selectionValid = false;
    if (event.target.name === "from") {
      // travelInfo.from = event.target.value;
      selectionValid = true;
    }
    if (event.target.name === "destination") {
      // travelInfo.destination = event.target.value;
      selectionValid = true;
    }
    if (event.target.name === "date") {
      // travelInfo.date = event.target.value;
      selectionValid = true;
    }
    if (event.target.name === "typeOfticket") {
      // travelInfo.typeOfticket = event.target.value;
      selectionValid = true;
    }
    if (selectionValid) {
      const newTravelInfo = { ...travelInfo };
      newTravelInfo[event.target.name] = event.target.value;
      setTravelInfo(newTravelInfo);
    }
    console.log("travelInfo: ", travelInfo);
  };
  // const travelDetails = [travelInfo.from, travelInfo.destination, travelInfo.date, travelInfo.typeOfticket]
  console.log("travelInfo: ", travelInfo);
  return (
    <div>
      <div id="mainDiv">
        <div id="searchOptions">
          {!search && (
            <Form>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select From</label>
                <select
                  class="form-control"
                  name="from"
                  onBlur={hangleChange}
                  id="exampleFormControlSelect1"
                >
                  {destinations.map((destination) => (
                    <option name="from" key={destination.id}>
                      {destination.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  Select Destination
                </label>
                <select
                  class="form-control"
                  name="destination"
                  onBlur={hangleChange}
                  id="exampleFormControlSelect1"
                >
                  {destinations.map((destination) => (
                    <option name="destination" key={destination.id}>
                      {destination.name}
                    </option>
                  ))}
                </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Date</label>
                <input
                  name="date"
                  onBlur={hangleChange}
                  style={{
                    width: "100%",
                    border: "1px solid lightgrey",
                    color: "grey",
                  }}
                  type="date"
                  id="datePicker"
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">
                  Select Ticket Category
                </label>
                <select
                  name="typeOfticket"
                  onBlur={hangleChange}
                  class="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option name="typeOfticket">One Time Ticket</option>
                  <option name="typeOfticket">One Day Pass</option>
                  <option name="typeOfticket">Monthly Pass</option>
                  <option name="typeOfticket">Annual Pass</option>
                </select>
              </div>
              <Button
                style={{ width: "80%", margin: "2% 10%", borderRadius: "20px" }}
                variant="contained"
                color="primary"
                onClick={() => setSearch(true)}
              >
                Search
              </Button>
            </Form>
          )}
          {search && <TicketCard property={travelInfo}></TicketCard>}
        </div>
        <div id="mapDiv">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="600"
            height="450"
            frameborder="0"
            style={{
              borderRadius: "10px",
              boxShadow: "0px 0px 10px grey",
              maxWidth: "100%",
            }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="googleMap"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Booking;

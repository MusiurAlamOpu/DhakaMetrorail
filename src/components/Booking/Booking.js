import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MapImage from "./map.png";
import "./Booking.css";
import fakeData from "../../Destinations.json";
// import { Link } from "react-router-dom";

const Booking = () => {
  const [destinations, setDestination] = useState(fakeData);
  // setDestination(fakeData);
  console.log("des: ", destinations);
  return (
    <div>
      <div id="mainDiv">
        <div id="searchOptions">
          <Form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select From</label>
              <select class="form-control" id="exampleFormControlSelect1">
                {destinations.map((destination) => (
                  <option>{destination.name}</option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select Destination</label>
              <select class="form-control" id="exampleFormControlSelect1">
                {destinations.map((destination) => (
                  <option key={destination.id}>{destination.name}</option>
                ))}
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                Select Ticket Category
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>One Time Ticket</option>
                <option>One Day Pass</option>
                <option>Monthly Pass</option>
                <option>Annual Pass</option>
              </select>
            </div>
            <Button
              style={{ width: "80%", margin: "2% 10%", borderRadius: "20px" }}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Form>
        </div>
        <div id="mapDiv">
          <img
            style={{ width: "100%", borderRadius: "20px" }}
            src={MapImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;

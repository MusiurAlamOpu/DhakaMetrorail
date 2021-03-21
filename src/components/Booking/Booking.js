import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import MapImage from "./map.png";
import "./Booking.css";
import fakeData from "../../Destinations.json";
import { TicketContext} from "../../App.js";
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
    typeOfticket: ""
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
    if(selectionValid){
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
          {
            !search && <Form>
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
              <label for="exampleFormControlSelect1">Select Destination</label>
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
              onClick={()=> setSearch(true)}
            >
              Search
            </Button>
            
          </Form>
          }
          {
              search && <TicketCard property={travelInfo}></TicketCard>
          }
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

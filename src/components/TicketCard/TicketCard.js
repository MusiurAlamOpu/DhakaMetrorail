import { ContactSupportOutlined } from "@material-ui/icons";
import fakeData from "../../Destinations.json";
import React, { useState } from "react";

const TicketCard = (props) => {
  console.log(props.property);
  const [fakeInfo, setFakeInfo] = useState(fakeData);
  const { from, destination, date, typeOfticket } = props.property;
  console.log(from, destination, date, typeOfticket);
  console.log(fakeInfo[0]);
  let ticketImage = "";
  if (typeOfticket === "One Time Ticket") {
    ticketImage = fakeInfo[0].ticketImage1;
  }
  if (typeOfticket === "One Day Pass") {
    ticketImage = fakeInfo[0].ticketImage2;
  }
  if (typeOfticket === "Monthly Pass") {
    ticketImage = fakeInfo[0].ticketImage3;
  }
  if (typeOfticket === "Annual Pass") {
    ticketImage = fakeInfo[0].ticketImage4;
  }
  return (
    <div
      style={{
        borderRadius: "10px",
        boxShadow: "3px 3px 7px lightgrey",
        width: "96%",
        padding: "2%",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          width: "100%",
          padding: "2%",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#318CE7",
            color: "white",
            width: "96%",
            padding: "5%",
            margin: "2%",
            fontSize: "20px",
          }}
        >
          <p>From: {from}</p>
          <p>Destination: {destination}</p>
        </div>
        {/* ////// */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2ECFA8",
            borderRadius: "10px",
            width: "96%",
            margin: "2%",
            paddingTop: "4%",
            color: "white",
          }}
        >
          <div style={{ width: "30%", textAlign: "center" }}>
            <p style={{ fontSize: "15px" }}>Ticket</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p style={{ fontSize: "15px" }}>Pessengers</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p style={{ fontSize: "15px" }}>Price</p>
          </div>
        </div>
        {/* ///////// */}
        <span
          style={{
            margin: "3%",
          }}
        >
          Selected Tickets:
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            borderRadius: "10px",
            width: "96%",
            margin: "2%",
          }}
        >
          {/* /////// */}
          <div style={{ width: "30%" }}>
            <img
              style={{ width: "90%", margin: "5%", borderRadius: "5px" }}
              src={ticketImage}
              alt=""
            />
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].passengerNumber}</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].price}</p>
          </div>
        </div>
        <span
          style={{
            margin: "3%",
          }}
        >
          All Tickets that are available:
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgrey",
            borderRadius: "10px",
            width: "96%",
            margin: "2%",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              style={{ width: "90%", margin: "5%", borderRadius: "5px" }}
              src={fakeInfo[0].ticketImage1}
              alt=""
            />
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].passengerNumber}</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].price}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgrey",
            borderRadius: "10px",
            width: "96%",
            margin: "2%",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              style={{ width: "90%", margin: "5%", borderRadius: "5px" }}
              src={fakeInfo[0].ticketImage2}
              alt=""
            />
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].passengerNumber}</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].price}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgrey",
            borderRadius: "10px",
            width: "96%",
            margin: "2%",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              style={{ width: "90%", margin: "5%", borderRadius: "5px" }}
              src={fakeInfo[0].ticketImage3}
              alt=""
            />
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].passengerNumber}</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].price}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgrey",
            borderRadius: "10px",
            width: "96%",
            margin: "2%",
          }}
        >
          <div style={{ width: "30%" }}>
            <img
              style={{ width: "90%", margin: "5%", borderRadius: "5px" }}
              src={fakeInfo[0].ticketImage4}
              alt=""
            />
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].passengerNumber}</p>
          </div>
          <div style={{ width: "30%", fontSize: "20px", textAlign: "center" }}>
            <p>{fakeInfo[0].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

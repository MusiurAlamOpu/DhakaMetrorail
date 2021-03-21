import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TicketContext } from "../../../App";
import "./Tickets.css";


const Tickets = () => {
  const [TicketType, setTicketType] = useContext(TicketContext);
  console.log(TicketType);
  const TicketCardStyle = {
    width: "270px",
    height: "350px",
    textAlign: "center",
  };
  const ticketButtonHandler = (props) => {
    console.log(props);
    setTicketType(props);
  }
  console.log(TicketType);
  return (
    <div id="ticketStyle">
          {/* div1 */}
      <div className="divStyle" style={TicketCardStyle}>
        <div style={{ height: "75%" }}>
          <p style={{ fontSize: "45px", color: "white" }}>ONE TIME TICKET</p>
          <Button
            variant="contained"
            style={{
              backgroundImage: "linear-gradient(to right, lightblue, skyblue)",
              fontSize: "20px",
              marginTop: "5px",
              borderRadius: "30px",
            }}
            onClick={()=>ticketButtonHandler("One Time Ticket")}
          >
            <Link className="buyButtonlinkStyle" to="/Booking">BUY NOW!</Link>
          </Button>
        </div>
        <div style={{ height: "25%" }}>
          <p style={{ fontSize: "50px", color: "white" }}>৳ 100</p>
        </div>
      </div>
      {/* div2 */}
      <div className="divStyle" style={TicketCardStyle}>
        <div style={{ height: "75%" }}>
          <p style={{ fontSize: "45px", color: "white" }}>ONE DAY PASS</p>
          <Button
            variant="contained"
            style={{
              backgroundImage: "linear-gradient(to right,skyblue, lightyellow)",
              fontSize: "20px",
              marginTop: "5px",
              borderRadius: "30px",
            }}
            onClick={()=>ticketButtonHandler("One Day Pass")}
          >
            <Link className="buyButtonlinkStyle" to="/Booking">BUY NOW!</Link>
          </Button>
        </div>
        <div style={{ height: "25%" }}>
          <p style={{ fontSize: "50px", color: "white" }}>৳ 500</p>
        </div>
      </div>
      {/* div3 */}
      <div className="divStyle" style={TicketCardStyle}>
        <div style={{ height: "75%" }}>
          <p style={{ fontSize: "45px", color: "white" }}>MONTHLY PASS</p>
          <Button
            variant="contained"
            style={{
              backgroundImage: "linear-gradient(to right,lightblue, lightgreen)",
              fontSize: "20px",
              marginTop: "5px",
              borderRadius: "30px",
            }}
            onClick={()=>ticketButtonHandler("Monthly Pass")}
          >
            <Link className="buyButtonlinkStyle" to="/Booking">BUY NOW!</Link>
          </Button>
        </div>
        <div style={{ height: "25%" }}>
          <p style={{ fontSize: "50px", color: "white" }}>৳ 1500</p>
        </div>
      </div>
      {/* div4 */}
      <div className="divStyle" style={TicketCardStyle}>
        <div style={{ height: "75%" }}>
          <p style={{ fontSize: "45px", color: "white" }}>ANNUAL PASS</p>
          <Button
            variant="contained"
            style={{
              backgroundImage: "linear-gradient(to right,lightgreen, lightblue)",
              fontSize: "20px",
              marginTop: "5px",
              borderRadius: "30px",
            }}
            onClick={()=>ticketButtonHandler("Annual Pass")}
          >
            <Link className="buyButtonlinkStyle" to="/Booking">BUY NOW!</Link>
          </Button>
        </div>
        <div style={{ height: "25%" }}>
          <p style={{ fontSize: "50px", color: "white" }}>৳ 9000</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;

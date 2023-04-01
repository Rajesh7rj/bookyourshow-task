import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Booking() {
  const location = useLocation();
  const show = location.state;
  const navigate = useNavigate();
  return (
    <div id="booking-section">
      <div className="formBooking">
        <p className="bookingSummary">BOOKING SUMMARY</p>
        <p className="showName">Show name : {show.name}</p>
        <p className="lang">Language : {show.language}</p>
        <p className="gen">Genre : {show.genres[0]}</p>
        <p className="showTime gen">Show Timing : {show.schedule?.time ?? "21:00"} </p>
        <form>
          <div>
          <label htmlFor="name">Your Name : </label>
          <input className="input" type="text" placeholder="Enter your name"/>
          </div>
          <div>
          <label htmlFor="name">Mo no : </label>
          <input className="input" type="text" placeholder="Enter your moblie number"/>
          </div>
          <button className="btnBooking" onClick={()=> navigate("/")}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";

export default function ShowDetails() {
  const location = useLocation();
  const show = location.state;
  const navigate = useNavigate();

  return (
    <div id="showDetails">
      <div className="details">
        <button className="goback" onClick={() => navigate("/")}>
          GO BACK
        </button>
        <div className="showDisplay">
          <img
            className="showImg"
            src={
              show?.image?.original ??
              "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
            }
            alt="showImage"
          />
          <div className="summary">
            <p className="showName">Show Name : {show.name}</p>
            <p className="lang">Language : {show.language}</p>
            <p className="gen">Genre : {show.genres[0]}</p>
            <p className="rating">Rating : {show.rating.average}</p>
            <p className="summaryInfo">{show.summary}</p>
            
              <Link className="booking" to={"/booking"} state={show}>
              <button className="btnBooking">
                Book Show
                </button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

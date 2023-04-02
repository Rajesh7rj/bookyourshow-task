import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=all#")
      .then(({ data }) => {
        setShows(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(shows);

  return (
    <div id="home-section" className="p-2 ">
      <div className="card-box  ">
        {shows.map(({ show }, index) => (
          <div key={index} className="card  m-3 " style={{ width: "20rem",  border: "2px solid black", backgroundColor:""}}>
            <img
              src={
                show?.image?.original ??
                "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
              }
              className="card-img-top"
              style={{height: "20rem", borderBottom: "2px solid black"}}
              alt="dsfas"
            />
            <div className="card-body">
              <h5 className="card-title">Show Name : {show.name}</h5>
              <p className="card-text">Language : {show.language}</p>
              <Link
                to={
                   "/show-details"
                  }
                  state={show}
                className="btn btn-primary mb-2"
              >
                Show Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setbtntext] = useState("Enable Dark mode");

  const darkmode = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border:"1px solid black"
      });
      setbtntext("Enable Dark mode");
    } else {
      setmyStyle({
        color: "white",
        backgroundColor: "black",
        border:"1px solid white"
      });
      setbtntext("Enable Light mode");
    }
  };

  return (
    <div className="container my-3" style={myStyle}>
      {/* <div className="jumbotron"> */}
      <h1 className="display-4">About Us</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <button
        className="btn btn-primary btn-lg my-3"
        type="button"
        onClick={darkmode}
      >{btntext}
      </button>
      {/* </div> */}
    </div>
  );
}

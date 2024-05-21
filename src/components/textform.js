import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been uppercased", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been lowercased", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied!");
    props.showAlert("Text has been copied", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  const handleCapitalize = () => {
    let newText = text.toLowerCase();
    setText(newText.charAt(0).toUpperCase() + newText.slice(1));
    props.showAlert("Text has been capitalized", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  // const handleCapitalize = () => {
  //   let newText = text.toLowerCase();
  //   setText(newText.charAt(0).toUpperCase() + newText.slice(1));
  //   props.showAlert("Text has been capitalized", "success");
  // };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const noofwords = (text) => {
    const wordArray = text.trim().split(/\s+/);
    const wordCount = wordArray.filter((word) => word.length > 0).length;
    return wordCount;
  };

  const [text, setText] = useState("");
  // text="hi there!" //wrong way to update the value of state
  // setText("hi there!") //correct way to update the value of state

  return (
    <div>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here..."
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalize}
        >
          Capitalize text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text to Clipboard
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h4>Your text summary:</h4>
        <p>
          Number of words: {noofwords(text)}
          <br />
          Number of character: {text.length}
          <br />
          Time to read your text: {0.008 * noofwords(text)} minutes
          <br />
        </p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

Textform.propType = {
  heading: PropTypes.string.isRequired,
};

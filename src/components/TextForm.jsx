import React, { useState } from "react";
import { use } from "react";
import Sanscript from "@indic-transliteration/sanscript";

export default function TextForm(props) {
  //   Set the useState Hook
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  // Refresh the page
  const handleClearClick = () => {
    setText(""); // clear textarea
    setError(""); // clear error if any
    // window.location.reload(); // reload page
  };

  // ================================================================================//

  // ================================================================================//
  // Convert to upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    if (text.trim() === "") {
      setError("Please enter text first");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }
    setText(newText);
    setError(""); // clear error if success
  };
  // ================================================================================//

  // ================================================================================//
  //   Convert text to LOWER case
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    if (text.trim() === "") {
      setError("Please enter text first");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    setText(newText);
    setError(""); // clear error if success
  };

  // Handle onChange Event - input change
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  // ================================================================================//

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
  };

  // ================================================================================//
  //   Google API used to convert text in marathi
  const convertToMarathi = async () => {
    if (text.trim() === "") {
      setError("Please enter text first");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }
    const url =
      "https://inputtools.google.com/request?text=" +
      encodeURIComponent(text) +
      "&itc=mr-t-i0-und&num=1";

    const res = await fetch(url);
    const data = await res.json();

    if (data[0] === "SUCCESS") {
      setText(data[1][0][1][0]);
    }
  };
  // ================================================================================//

  // ================================================================================//
  // Google API used toShow marathi meanning of world
  const translateToMarathi = async () => {
    if (text.trim() === "") {
      setError("Please enter text first");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=mr&dt=t&q=" +
      encodeURIComponent(text);

    try {
      const res = await fetch(url);
      const data = await res.json();

      const translated = data[0][0][0];

      // Convert both to lowercase for comparison
      if (translated.toLowerCase() === text.toLowerCase()) {
        setError("Meaning not found");
      } else {
        setText(translated);
      }
    } catch (error) {
      setError("No meanning found");
    }
  };

  // ================================================================================//

  // ================================================================================//

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // ================================================================================//

  const readingTime =
    text.trim() === ""
      ? "0 minutes"
      : (text.trim().split(/\s+/).length / 200).toFixed(2) + " minutes";

  // ================================================================================//

  return (
    <>
      <div className="error-wrapper">
        {error && <div className="alert alert-danger error-alert">{error}</div>}
      </div>

      <div className="container mt-3 ">
        {/* Summary of text nput  */}
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            View Summary of your text
          </a>
          <button
            type="button"
            className="btn btn-danger ms-3"
            onClick={handleClearClick}
          >
            Refresh
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <h4>Worlds in your text is : {wordCount}</h4>
            <h4>Length of your text is : {text.length}</h4>
            <h4>Spaces in your text is : {text.split(" ").length - 1}</h4>
            <h4>Reading Time: {readingTime}</h4>
          </div>
        </div>
        {/* Text box with Btns  */}
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className={`form-control ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
              value={text}
              onChange={handleOnChange}
              rows="10"
              placeholder="Enter text here"
            />
          </div>
          <button className="btn btn-primary ms-3 mt-2" onClick={handleUpClick}>
            Convert to upper case
          </button>
          <button
            className="btn btn-secondary ms-3  mt-2"
            onClick={handleLowerClick}
          >
            Convert to lower case
          </button>
          <button
            className="btn btn-success ms-3  mt-2"
            onClick={convertToMarathi}
          >
            Convert to Marathi
          </button>
          <button
            className="btn  btn-info ms-3 mt-2 "
            onClick={translateToMarathi}
          >
            Get Marathi Meaning
          </button>
          <button
            className="btn  btn-dark ms-3 mt-2 "
            onClick={handleRemoveExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
    </>
  );
}

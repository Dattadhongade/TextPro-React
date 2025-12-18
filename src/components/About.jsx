import React from "react";

export default function About(props) {
  return (
    <>
      <h1>About TextPro</h1>
      <div
        className={`accordion accordion-flush ${
          props.mode === "dark" ? "bg-dark text-light" : ""
        }`}
        id="accordionFlushExample"
      >
        {/* Upper Case */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className={`accordion-button collapsed ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              About Upper Case Button
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className={`accordion-body ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
            >
              <ul>
                <li>It only converts text into Upper case.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Case */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className={`accordion-button collapsed ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              About Lower Case Button
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className={`accordion-body ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
            >
              <ul>
                <li>It only converts text into Lower case.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Convert to Marathi */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className={`accordion-button collapsed ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              About Convert To Marathi Button
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className={`accordion-body ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
            >
              <ul>
                <li>It converts English text into Marathi script.</li>
                <li>It does NOT give meaning.</li>
                <li>Example: Rahul → राहुल.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marathi Meaning */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className={`accordion-button collapsed ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
            >
              About Get Marathi Meaning Button
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className={`accordion-body ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
            >
              <ul>
                <li>This button gives the Marathi meaning.</li>
                <li>Example: hello → नमस्कार.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className={`accordion-button collapsed ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
            >
              About View Summary of your text button
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className={`accordion-body ${
                props.mode === "dark" ? "bg-dark text-light" : ""
              }`}
            >
              <ul>
                <li>It shows number of Worlds in your text.</li>
                <li>It shows Length of your text your text.</li>
                <li>It shows Spaces in your text text.</li>
                <li>It shows time required to read the entered text.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

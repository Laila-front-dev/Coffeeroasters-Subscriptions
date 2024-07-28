/* eslint-disable react/prop-types */
import { useState } from "react";

export function Accordion(props) {
  const [active, setActive] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  function handleClick(item) {
    // console.log(item);
    setActive(!active);
  }

  function handleChingeClick(item) {
    // console.log(item);
    setChangeColor(item);
  }

  // eslint-disable-next-line no-undef

  return (
    <>
      <div key={props.id} className="flow" style={{ paddingBlockEnd: "2rem" }}>
        <div style={{ paddingBlockEnd: "2rem" }}>
          <button
            onClick={() => handleClick(props.id)}
            className="d__flex justify__spaceBetween align__center"
            style={{ cursor: "pointer", width: "-webkit-fill-available" }}
          >
            <h3
              className="heading__3 clr-primary-400"
              style={{ textAlign: "start" }}
            >
              {props.question}
            </h3>
            <svg
              className={active ? "active" : ""}
              style={{ width: "18.19px" }}
              viewBox="0 0 320 512"
              width="100"
              title="angle-down"
            >
              <path
                fill="#0E8784"
                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
              />
            </svg>
          </button>
        </div>

        <div className={active ? "answers active" : "answers"}>
          <ul className="d__grid grid__template__column__three gap">
            {props.answers.map((answer) => (
              <li
                // eslint-disable-next-line no-undef
                onClick={() => handleChingeClick(answer.id)}
                key={answer.id}
                className="border-radius-8 flow"
                style={{
                  paddingBlock: "1.5rem",
                  cursor: "pointer",
                  backgroundColor:
                    answer.id === changeColor ? "#0E8784" : "#F4F1EB",
                  color: answer.id === changeColor ? "#F4F1EB" : "#333D4B",
                }}
              >
                <label id="answer" style={{ paddingInline: "1.5rem" }}>
                  <input
                    type="radio"
                    name={answer.initial}
                    value={answer.name}
                    onChange={props.fun}
                  />
                  {answer.name}
                </label>
                <p
                  style={{
                    paddingInline: "1.5re",
                    marginInline: "1.5rem",
                    color: answer.id === changeColor ? "#F4F1EB" : "#333D4B",
                  }}
                >
                  {answer.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function LinksPlans(props) {
  return (
    <li key={props.id}>
      <span className="clr-primary-400">
        <span>0{props.id + 1}</span>
        {props.name}
      </span>
    </li>
  );
}

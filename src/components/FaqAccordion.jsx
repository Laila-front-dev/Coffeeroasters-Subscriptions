import { useState, useReducer } from "react";
// import Accordion from "./Accordion";
import { Accordion, LinksPlans } from "./Accordion";

import { questions, linksquestions } from "../data";
import OrderSummary from "./OrderSummary";
import { ButtonPlan } from "./Button";
const initialState = {
  answerOne: "____",
  answerTwo: "____",
  answerThree: "____",
  answerFour: "____",
  answerFive: "____",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "delet":
      return {
        ...state,
        [action.field]: !state.hasConsented,
      };
    default:
      return state;
  }
};

function FaqAccordion() {
  // const [state, seState] = useState("dodod");
  const [state, dispatch] = useReducer(reducer, initialState);

  const [transform, setTransform] = useState(false);

  function hadlineTransform() {
    setTransform((prev) => !prev);
  }

  const handleShipping = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <>
      <div className="questions">
        <div className="question">
          <div className="link__question">
            <ul>
              {linksquestions.map((i) => (
                <LinksPlans key={i.id} id={i.id} name={i.name} />
              ))}
            </ul>
          </div>
          <div>
            {questions.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Accordion
                key={item.id}
                // id={item.id}
                question={item.question}
                answers={item.answers}
                name={item.name}
                initial={item.initial}
                fun={(e) => handleShipping(e)}
                id={item.id}
                // eslint-disable-next-line no-undef
              />
            ))}
            <div className="order__summary flow">
              <span className="title">Order Summary</span>
              <OrderSummary
                answerOne={state.answerOne}
                answerTwo={state.answerTwo}
                answerThree={state.answerThree}
                answerFour={state.answerFour}
                answerFive={state.answerFive}
              />
            </div>

            <ButtonPlan name="Create my plan" setDisplay={hadlineTransform} />
          </div>
        </div>
      </div>
      <div
        className={`pupop bg-neutral-50 border-radius-8 ${
          transform ? "show" : "hide"
        }`}
      >
        <div className="bg-primary-800 clr-neutral-50 border-radius-top-8">
          <h3 className="heading__3">Order Summary</h3>
        </div>
        <div className="chikout flow">
          <OrderSummary
            answerOne={state.answerOne}
            answerTwo={state.answerTwo}
            answerThree={state.answerThree}
            answerFour={state.answerFour}
            answerFive={state.answerFive}
          />
          <p style={{ color: "#333D4B" }}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>$14.00/ mo</span>
            <ButtonPlan name="checkout" setDisplay={hadlineTransform} />
          </div>
        </div>
      </div>
      <div className={`overley ${transform ? "show" : "hide"}`}></div>
    </>
  );
}

export default FaqAccordion;

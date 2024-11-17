/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export function Button(props) {
  const linkButton = useNavigate();
  return (
    <button onClick={() => linkButton("/Coffeeroasters-Subscriptions/create")} className="button">
      {props.name}
    </button>
  );
}

export function ButtonPlan(props) {
  return (
    // eslint-disable-next-line no-undef
    <button onClick={props.setDisplay} className="button">
      {props.name}
    </button>
  );
}

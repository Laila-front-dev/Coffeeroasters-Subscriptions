/* eslint-disable react/prop-types */
function OrderSummary(props) {
  return (
    <p data-type="order">
      “I drink my coffee using <span>{props.answerOne}</span>, with a
      <span>{props.answerTwo}</span>
      type of bean. <span>{props.answerThree}</span> ground ala
      <span>{props.answerFour}</span>, sent to me
      <span>{props.answerFive}</span>.”
    </p>
  );
}

export default OrderSummary;

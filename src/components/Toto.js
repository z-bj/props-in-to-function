import React from "react";

const Toto = (props) => {
  //here you can access the mother's message
  const btnAnswerToto =
    props.theState.messageMother !== null ? (
      <button onClick={props.answerToto}>Answer</button>
    ) : (
      <button disabled>Answer</button>
    ); //if mom gave an order, toto can answer, otherwise he can't answer (disabled)
  return (
    <div>
      <h2>{props.name}</h2>
      {btnAnswerToto}
      <p>{props.theState.messageToto}</p>
    </div>
  );
};

export default Toto;

import React from "react";

const Toto = (props) => {
  //here you can access the mother's message
  const btnAnswerToto =
    props.theState.messageMother !== null ? (
      <button>Answer</button>
    ) : (
      <button disabled>Answer</button>
    ); //if mom gave an order, toto can answer, otherwise he can't answer (disabled)
  return (
    <div>
      <h2>{props.name}</h2>
      {btnAnswerToto}
    </div>
  );
};

export default Toto;

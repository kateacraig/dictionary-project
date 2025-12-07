import React from "react";

export default function Meaning(props) {
  console.log(props.element);
  return (
    <div className="Meaning">
      <h3>{props.element.partOfSpeech}</h3>
      <p>{props.element.definition}</p>
      <br />
      <p>
        <em>{props.element.example}</em>
      </p>
    </div>
  );
}

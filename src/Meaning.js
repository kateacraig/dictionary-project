import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.element);
  return (
    <div className="Meaning">
      <div className="container">
        <h3>{props.element.partOfSpeech}</h3>
        <p>
          <strong>Definition: </strong>
          {props.element.definition}
          <br />
          <Example example={props.element.example} />
          <br />
          <Synonyms data={props.element.synonym} />
        </p>
      </div>
    </div>
  );
}

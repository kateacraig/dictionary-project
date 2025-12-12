import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meaning(props) {
  console.log(props.element);
  return (
    <div className="Meaning">
      <div className="container">
        <h3>{props.element.partOfSpeech}</h3>
        <div className="definition">{props.element.definition}</div>
        <div className="example">
          <Example example={props.element.example} />
        </div>
        <div className="sysnonym">
          <Synonyms synonym={props.element.synonyms} />
        </div>
      </div>
    </div>
  );
}

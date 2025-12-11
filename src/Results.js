import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="container">
          <h2>{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetic} />
          {props.results.meanings.map(function (element, index) {
            return (
              <div key={index}>
                <Meaning element={element} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

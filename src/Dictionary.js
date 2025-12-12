import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    //console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4a31b94f5oa0a28ee30tf2fd8208d6b6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="input-form">
        <h1>What word do you want to look up?</h1>
        <div className="container">
          <form className="search-form" onSubmit={search}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              className="search-input"
              placeholder="Enter a word..."
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
        <div className="hint">
          <p>suggested word: sunset, table, bottle, chair, etc.</p>
        </div>
      </section>
      <div className="container dictionary-results">
        <Results results={results} />
      </div>
    </div>
  );
}

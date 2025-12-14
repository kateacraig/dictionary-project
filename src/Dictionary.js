import React, { useState } from "react";
import Results from "./Results";
import Images from "./Images";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4a31b94f5oa0a28ee30tf2fd8208d6b6";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // documentation: https://www.shecodes.io/learn/apis/images
    let imageApiKey = "4a31b94f5oa0a28ee30tf2fd8208d6b6";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
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
      <div className="dictionary-results">
        <Results results={results} images={photos} />
        <Images photos={photos} />
      </div>
    </div>
  );
}

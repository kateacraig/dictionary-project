import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Images">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}

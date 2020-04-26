import React from "react";

const BookmarkExcerpt = (props) => (
  <div className="bookmark-excerpt mb-40 mb-md-60">
    {props.favicon && (
      <img src={props.favicon} className="favicon" alt={`Favicon for ${props.domain}`} />
    )}
    <span className="domain">{props.domain}</span>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
);

export default BookmarkExcerpt;

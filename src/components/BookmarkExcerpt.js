import React from "react";

const BookmarkExcerpt = (props) => (
  <a className="bookmark-excerpt mb-40 mb-md-60" href={props.url} target="_blank" rel="nofollow noopener">
    {props.favicon && (
      <img src={props.favicon} className="favicon" alt={`Favicon for ${props.domain}`} />
    )}
    <span className="domain">{props.domain}</span>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </a>
);

export default BookmarkExcerpt;

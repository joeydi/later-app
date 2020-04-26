import React from "react";
import { Link } from "react-router-dom";

const BookmarkExcerpt = (props) => (
  <div className="bookmark-excerpt mb-40 mb-md-60">
    {props.favicon && (
      <img src={props.favicon} className="favicon" alt={`Favicon for ${props.domain}`} />
    )}
    <a className="domain" href={props.url} target="_blank" rel="nofollow noopener">
      {props.domain}
    </a>
    <h2><a href={props.url} target="_blank" rel="nofollow noopener">{props.title}</a></h2>
    <p>{props.description}</p>
    {!!props.tags.length && (
      <ul className="tags">
        {props.tags.map((item, index) => (
          <li key={index}>
            <Link to={`/tag/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default BookmarkExcerpt;

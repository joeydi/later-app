import React from "react";
import { Link } from "react-router-dom";

const BookmarkExcerpt = (props) => (
  <a
    className="bookmark-excerpt mb-40 mb-md-60"
    href={props.url}
    target="_blank"
    rel="nofollow noopener">
    {props.favicon && (
      <img src={props.favicon} className="favicon" alt={`Favicon for ${props.domain}`} />
    )}
    <span className="domain">{props.domain}</span>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    {!!props.tags.length && (
      <ul className="tags">
        {props.tags.map((item, index) => (
          <li>
            <Link to={`/tag/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    )}
  </a>
);

export default BookmarkExcerpt;

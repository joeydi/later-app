import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as IconArchive } from "../img/archive.svg";
import { ReactComponent as IconStarOutline } from "../img/star-outline.svg";
// import { ReactComponent as IconStarSolid } from "../img/star-solid.svg";
import { ReactComponent as IconLink } from "../img/link.svg";
import { ReactComponent as IconDelete } from "../img/trash.svg";

const BookmarkExcerpt = (props) => (
  <div className="bookmark-excerpt mb-40 mb-md-60">
    <div className="row">
      <div className="col-md-8">
        {props.favicon && (
          <img src={props.favicon} className="favicon" alt={`Favicon for ${props.domain}`} />
        )}
        <a className="domain" href={props.url} target="_blank" rel="noopener noreferrer">
          {props.domain}
        </a>
        <h2>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h2>
        <p>{props.description}</p>
        {!!props.tags.length && (
          <ul className="tags">
            {props.tags.map((item, index) => (
              <li key={index}>
                <Link to={`/tag/${encodeURI(item)}`}>{item}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-md-4">
        <div className="actions">
          <button onClick={() => {props.handleArchive(props.id)}}>
            <span className="sr-only">Archive</span>
            <IconArchive />
          </button>
          <button onClick={() => {props.handleStar(props.id)}}>
            <span className="sr-only">Star</span>
            <IconStarOutline />
          </button>
          <button>
            <span className="sr-only">Copy Link</span>
            <IconLink />
          </button>
          <button onClick={() => {props.handleDelete(props.id)}}>
            <span className="sr-only">Delete</span>
            <IconDelete />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default BookmarkExcerpt;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { client } from "../utils/api-client";

const CommonTags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchCommonTags() {
      const data = await client("bookmarks/tag/");
      setTags(data.results);
    }
    fetchCommonTags();
  }, []);

  return (
    <ul className="common-tags">
      {tags.map((item, index) => {
        const width = `${Math.round(item.num_times / tags[0].num_times * 100)}%`;
        console.log(width);

        return (
          <li key={index}>
            <Link style={{minWidth: width}} to={`/tag/${encodeURI(item.name)}`}>
                {item.name}
                <span style={{width: width}}></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CommonTags;

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import { client } from "../utils/api-client";

const CommonTags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function fetchCommonTags() {
            const data = await client('bookmarks/tag/');
            setTags(data.results);
        }
        fetchCommonTags();
    }, []);

    return (
        <ul className="common-tags">
            {tags.map((item, index) => (
                <li key={index}>
                    <Link to={`/tag/${encodeURI(item.name)}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default CommonTags;
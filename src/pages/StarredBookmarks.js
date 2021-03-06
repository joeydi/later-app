import React, { Component } from "react";
import { client } from "../utils/api-client";

import BookmarkExcerpt from "../components/BookmarkExcerpt";
import CommonTags from "../components/CommonTags";

class StarredBookmarks extends Component {
  state = {
    bookmarks: [],
  };

  async componentDidMount() {
    const data = await client("bookmarks/starred/");

    this.setState({
      bookmarks: data.results,
    });
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <CommonTags />
            </div>
            <div className="col-md-9 offset-md-1">
              {this.state.bookmarks.map((item, index) => (
                <BookmarkExcerpt {...item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default StarredBookmarks;

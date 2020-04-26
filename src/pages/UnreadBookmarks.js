import React, { Component } from "react";
import { client } from "../utils/api-client";
import BookmarkExcerpt from "../components/BookmarkExcerpt";

class UnreadBookmarks extends Component {
  state = {
    bookmarks: [],
  };

  async componentDidMount() {
    const data = await client("bookmarks/unread/");

    this.setState({
      bookmarks: data.results,
    });
  }

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-2">Sidebar</div>
            <div className="col-md-6 offset-md-1">
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

export default UnreadBookmarks;

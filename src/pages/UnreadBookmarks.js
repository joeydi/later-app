import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { client } from "../utils/api-client";
import BookmarkExcerpt from "../components/BookmarkExcerpt";

class UnreadBookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
    this.handleArchive = this.handleArchive.bind(this);
    this.handleStar = this.handleStar.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async handleArchive(id) {
    await client(`bookmarks/${id}/`, { method: "PUT", body: { folder: "Archive" } });

    this.setState((prevState) => ({
      bookmarks: prevState.bookmarks.filter((item) => item.id !== id),
    }));

    console.log("async handleArchive", id);
  }

  async handleStar(id) {
    await client(`bookmarks/${id}/`, { method: "PUT", body: { folder: "Starred" } });

    console.log("async handleStar", id);
  }

  async handleDelete(id) {
    await client(`bookmarks/${id}/`, { method: "DELETE" });

    this.setState((prevState) => ({
      bookmarks: prevState.bookmarks.filter((item) => item.id !== id),
    }));

    console.log("handleDelete", id);
  }

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
            <div className="col-md-9 offset-md-1">
              <TransitionGroup>
                {this.state.bookmarks.map((item) => (
                  <CSSTransition timeout={750} classNames="fade-static" key={item.id}>
                    <BookmarkExcerpt
                      {...item}
                      handleArchive={this.handleArchive}
                      handleStar={this.handleStar}
                      handleDelete={this.handleDelete}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default UnreadBookmarks;

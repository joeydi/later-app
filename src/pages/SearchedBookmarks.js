import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { client } from "../utils/api-client";
import BookmarkExcerpt from "../components/BookmarkExcerpt";

class SearchedBookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
    };
    this.handleArchive = this.handleArchive.bind(this);
    this.handleStar = this.handleStar.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTransitionExit = this.handleTransitionExit.bind(this);
  }

  async handleArchive(id) {
    // await client(`bookmarks/${id}/`, { method: "PUT", body: { folder: "Archive" } });

    this.setState((prevState) => ({
      bookmarks: prevState.bookmarks.filter((item) => item.id !== id),
    }));

    console.log("async handleArchive", id);
  }

  async handleStar(id) {
    // await client(`bookmarks/${id}/`, { method: "PUT", body: { folder: "Starred" } });

    console.log("async handleStar", id);
  }

  async handleDelete(id) {
    // await client(`bookmarks/${id}/`, { method: "DELETE" });

    this.setState((prevState) => ({
      bookmarks: prevState.bookmarks.filter((item) => item.id !== id),
    }));

    console.log("handleDelete", id);
  }

  handleTransitionExit(el) {
    const style = window.getComputedStyle(el);
    const elHeight = ["height", "margin-bottom"]
      .map((key) => parseInt(style.getPropertyValue(key), 10))
      .reduce((prev, cur) => prev + cur);

    el.parentElement.style.setProperty('--exiting-bookmark-height', `${elHeight}px`);
  }

  async componentDidMount() {
    const data = await client(`bookmarks/search/${this.props.match.params.query}/`);

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
              <TransitionGroup className="bookmark-list">
                {this.state.bookmarks.map((item) => (
                  <CSSTransition
                    timeout={500}
                    classNames="fade-static"
                    key={item.id}
                    onExit={this.handleTransitionExit}>
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

export default SearchedBookmarks;

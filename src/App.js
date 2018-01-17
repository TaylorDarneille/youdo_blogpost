import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1>{this.props.title}</h1>
        <Author author={this.props.allAuthors[0]}/>
        <Author author={this.props.allAuthors[1]}/>
        <Author author={this.props.allAuthors[2]}/>
        <p>{this.props.body}</p>
        <h2>Comments:</h2>
        <p>{this.props.comment}</p>

      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div className="Author">
        <p>Written by {this.props.author}</p>
      </div>
    );
  }
}

export default Post;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

let post = {
	title: "Dinosaurs are awesome",
	author: "Stealthy Stegosaurus",
	body: "Check out this body property!",
	comments: ["First!", "Great post", "Hire this author now!"]
}

let authors = ["Stealthy Stegosaurus","Tiny T-Rex", "Ivory Iguanodon"]

ReactDOM.render(
	<Post 
		title = {post.title}
		body = {post.body}
		comment = {post.comments[0]}
		allAuthors = {authors}
	/>,
	document.getElementById('root'));

registerServiceWorker();

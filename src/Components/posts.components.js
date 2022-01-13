import React, { Component } from "react";
import Navbar from './navbar.component';
import Post from "./post.component";
import forest from "../img/forest.jpg";
import fire from "../img/fire.jpg";
import tree from "../img/tree.jpg";
import sky from "../img/sky.jpg";
import river from "../img/river.jpg";


class Posts extends React.Component {
  state = {
    posts: [
      { id: "post1",title:'Forest', imgSrc: forest, isLiked: 0, isDisliked: 0 },
      { id: "post2",title:'Fire', imgSrc: fire, isLiked: 0, isDisliked: 0 },
      { id: "post3",title:'Sky', imgSrc: sky, isLiked: 0, isDisliked: 0 },
      { id: "post4",title:'River', imgSrc: river, isLiked: 0, isDisliked: 0 },
      { id: "post5",title:'Tree', imgSrc: tree, isLiked: 0, isDisliked: 0 }
    ],
    like:0,
    dislike:0
  };
  handleRemove =(id)=>{
    const posts = [...this.state.posts];
    // const removedPost = posts.find(item => item.id === id);
    // removedPost.isDisliked = 0;
    // removedPost.isLiked = 0;
    const post = posts.filter((item)=> id!== item.id);
    this.setState({posts: post});
  }

  handleLike = (id) =>{
    const posts = [...this.state.posts];
    const post = posts.find(post => post.id === id);
    const isLiked = post.isLiked === 0 ? 1 : 1;
    post.isLiked = isLiked;
    let temp = 0;
    posts.map(item => {
      if(item.isLiked === 1) temp++;
    });
    this.setState({posts : posts, like: temp});
    
  }

  handleDislike = (id) =>{
    const posts = [...this.state.posts];
    const post = posts.find(post => post.id === id);
    const isDisliked = post.isDisliked === 0 ? 1 : 1;
    post.isDisliked = isDisliked;
    let temp = 0;
    posts.map(item => {
      if(item.isDisliked === 1) temp++;
    });
    this.setState({posts : posts, dislike: temp});
    
   
  }

  render() {
    return (
      <>
      <Navbar 
          like = {this.state.like}
          dislike = {this.state.dislike}    
      />

      <div style={{ marginLeft: "20%", marginTop: "20px" }}>
        <button type="button" className="btn btn-primary">
          Add New Post
        </button>
        <br />
        <br />
        {this.state.posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              src={post.imgSrc}
              title={post.title}
              handleRemove={this.handleRemove}
              handleLike= {this.handleLike}
              handleDislike= {this.handleDislike}
              isLiked = {post.isLiked}
              isDisliked = {post.isDisliked}
            />
          );
        })}
      </div>

      </>
          );
  }
}

export default Posts;

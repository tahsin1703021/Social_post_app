import React, { Component } from "react";
import Navbar from './navbar.component';
import Post from "./post.component";
import Form from "./form.component";
import forest from "../img/forest.jpg";
import fire from "../img/fire.jpg";
import tree from "../img/tree.jpg";
import sky from "../img/sky.jpg";
import river from "../img/river.jpg";


class Posts extends React.Component {
  state = {
    posts: [
      { id: "Forest",title:'Forest', imgSrc: forest, isLiked: 0, isDisliked: 0 },
      { id: "Fire",title:'Fire', imgSrc: fire, isLiked: 0, isDisliked: 0 },
      { id: "Sky",title:'Sky', imgSrc: sky, isLiked: 0, isDisliked: 0 },
      { id: "River",title:'River', imgSrc: river, isLiked: 0, isDisliked: 0 },
      { id: "Tree",title:'Tree', imgSrc: tree, isLiked: 0, isDisliked: 0 }
    ],
    like:0,
    dislike:0,
    addPostClicked: false
  };
  handleRemove =(id)=>{
    const posts = [...this.state.posts];
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
  handleAddPost = () => {
      let addStatus = this.state.addPostClicked;
      if(addStatus === false){
        addStatus = true;
      }else{
        addStatus = false;
      }
      this.setState({...this.state.posts, ...this.state.like, ...this.state.dislike, addPostClicked: addStatus});
  }
  handleNewPost = (newPost) => {
      let addStatus = this.state.addPostClicked;
      if(addStatus === false){
        addStatus = true;
      }else{
        addStatus = false;
      }
      let posts = [...this.state.posts];
      posts.push(newPost);
      this.setState({...this.state.like,...this.state.dislike,addPostClicked : addStatus, posts});
      console.log(this.state.posts) 
}

  render() {
    return (
      <>
      <Navbar 
          like = {this.state.like}
          dislike = {this.state.dislike}    
      />

      <div style={{ marginLeft: "20%", marginTop: "20px" }}>
        <button 
            type="button" 
            className="btn btn-primary"
            onClick={ () => this.handleAddPost()}  
          >
          Add Post
        </button>
        {
          this.state.addPostClicked === true ? <Form handleNewPost={this.handleNewPost} posts/> : null
        }
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

import React, { Component } from 'react'

class Like extends React.Component {
      
      getLikeClassName = () =>{
          const { isLiked, isDisliked } = this.props;
          let className = "";
          if(isLiked === 0) className = "fa fa-thumbs-up";
          else className = "fa fa-thumbs-up text-primary"
          return className; 
    
    }
    getDislikeClassName = () =>{
      const { isLiked, isDisliked } = this.props;
      let className = "";
      if(isDisliked === 0) className = "fa fa-thumbs-down";
      else className = "fa fa-thumbs-down text-primary"
      return className; 

}
  render() { 
    return (
      <>
        <i 
          className = {this.getLikeClassName()}
          onClick={()=> this.props.handleLike(this.props.id)}
        />
        <i 
          className = {this.getDislikeClassName()}
          onClick={()=> this.props.handleDislike(this.props.id)}
        />
        </>
    );
  }
}
 
export default Like;


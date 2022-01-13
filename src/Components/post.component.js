import React, { Component } from 'react'
import Like from './like.component';


class Post extends React.Component {
  render() { 

    const { id, src, title, handleRemove, handleLike, handleDislike, isLiked, isDisliked } = this.props;
    return (
        <>
        <div className="card" style={{width: '30rem'}}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <p>{new Date(Date.now()).toLocaleString()}</p>
              
              <br/>
              
              <img src={src} style={{width:'100%'}}/>
              
              <p className="card-text">
                  Tired and hungry, they were on the verge of tears when they heard a gentle whisper. 
                  They looked up to see a Moriche palm tree, waving in the wind. The palm offered the 
                  children its fruit. With food in their stomach, the children gained strength to look 
                  
              </p>
              
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <input type="text" placeholder='Comment'/>
               <Like 
                  handleLike={handleLike}
                  handleDislike={handleDislike}
                  isLiked={isLiked}
                  isDisliked = {isDisliked}
                  id={id}
                />
              </div>
              <br/>
              <br/>
              <button type="button" className="btn btn-danger" onClick={() => handleRemove(id)}>Remove</button>
            </div>
        </div>
        
        </>
    );
  }
}
 
export default Post;


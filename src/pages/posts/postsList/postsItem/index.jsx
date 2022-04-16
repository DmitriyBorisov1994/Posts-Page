import React, { useState } from "react";
import MyButton from "../../../../components/UI/button/MyButton";

const PostsItem = (props) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__buttons'>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  )
}

export default PostsItem
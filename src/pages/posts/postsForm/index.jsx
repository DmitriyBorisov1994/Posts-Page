import React, { useState } from "react";
import MyButton from '../../../components/UI/button/MyButton';
import MyInput from '../../../components/UI/input/MyInput';

const PostsForm = ({ create }) => {
   const [post, setPost] = useState({ title: '', body: '' });

   const addNewPost = (event) => {
      event.preventDefault()

      const newPost = {
         ...post,
         id: Date.now()
      }
      create(newPost);
      setPost({ title: '', body: '' })
   }


   return (
      <form>
         <MyInput value={post.title} type='text' placeholder='Heading' onChange={event => setPost({ ...post, title: event.target.value })}></MyInput>
         <MyInput value={post.body} type='text' placeholder='Post text' onChange={event => setPost({ ...post, body: event.target.value })}></MyInput>
         <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
   )
}

export default PostsForm
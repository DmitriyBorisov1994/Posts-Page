import React from "react";
import PostsItem from "./postsItem";
import {
   CSSTransition,
   TransitionGroup,
} from 'react-transition-group';

const PostsList = ({ posts, title, remove }) => {
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>{title}</h1>
         <TransitionGroup>
            {posts.map((post, index) =>
               <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="post"
               >
                  <PostsItem remove={remove} number={index + 1} post={post} />
               </CSSTransition>
            )}
         </TransitionGroup>
      </div>
   )
}

export default PostsList
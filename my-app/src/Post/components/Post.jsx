import React from 'react';
import '../styles/Post.css';

const Post = (props) => (
  <div className="panel panel-default post-body">
    <div className="panel-body">
      {
        props.postBody.map((postPart, idx) => (
          <div>{postPart} {idx}</div>
        ))
      }
    </div>
  </div>
);

export default Post;
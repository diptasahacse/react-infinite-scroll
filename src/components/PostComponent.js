import React from "react";
import PostCard from "./PostCard";

const PostComponent = ({ data }) => {
  return (
    <>
      <div>PostComponent</div>

      <div>
        {
            data.map((item, index) => <PostCard index={index} item={item} key={index}/>)
        }
      </div>
    </>
  );
};

export default PostComponent;

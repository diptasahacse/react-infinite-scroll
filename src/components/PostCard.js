import React from 'react'

const PostCard = ({item, index}) => {
  return (
    <div style={{padding:"40px 0", margin: "30px", backgroundColor: "gray"}}><span>{index}</span>{item?.title}</div>
  )
}

export default PostCard
import React from "react";

const PostList = (props) => {
const posts = props.posts.map((post) => {
    return (
    <div key={post.id} className="ui padded vertical segment"  style={{display: 'flex', margin: '50px'}}>
        <img src={post.data.thumbnail} alt="reddit logo"/>
        <div className="content" style={{marginLeft: '50px'}}>
            <div className="author" style={{fontSize: '18px', color: '#6c6e70'}}>{post.data.title}</div>
            <br></br>
            <div className="text" style={{fontSize: '12px'}}>{post.data.author}</div>
            <br></br>
            <div className="text" style={{fontSize: '12px'}}>{post.data.subreddit_name_prefixed}</div>
        </div>
    </div>
    )
})

return (
             
        <div>
            {posts}
        </div>
    )
}

export default PostList
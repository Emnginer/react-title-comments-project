import React, { useEffect, useState } from 'react';
import PostTitle from '../PostTitle/PostTitle';

const Post = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPost(data);
        })

    },[])

    return (
        <div>
            <h2>{posts.length}</h2>
            {
                posts.map(post => <PostTitle post={post}></PostTitle>)
            }
        </div>
    );
};

export default Post;
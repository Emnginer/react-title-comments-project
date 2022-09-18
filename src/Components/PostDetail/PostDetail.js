import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import PostComment from '../PostComment/PostComment';

const PostDetail = () => {
    const {id} = useParams();
    const [postDetails, setPostDetail] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    },[])




    return (
        <div>
            <h3>userId: {postDetails.userId}</h3>
            <h3>id: {postDetails.id}</h3>
            <h3>title: {postDetails.title}</h3>
            <h3>body: {postDetails.body}</h3>     
            
            <PostComment></PostComment>

        </div>
    );
};

export default PostDetail;
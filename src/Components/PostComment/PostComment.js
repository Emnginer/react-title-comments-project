import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostCommentBody from '../PostCommentBody/PostCommentBody';
import PostImages from '../PostImages/PostImages';

const PostComment = (props) => {
    const { id } = useParams();

    const [postComments, setPostComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPostComment(data)
            })
    },[])


    return (
            <div style={{marginLeft: '50px', marginTop: '100px'}}>
                <h1>All Comments</h1>
                {
                    postComments.map(comment => <PostCommentBody comment={comment}></PostCommentBody>)
                }              
            </div>
    );
};












export default PostComment;
import React, { useState, useEffect } from 'react';

const PostCommentBody = (props) => {

    const { name, email, body } = props.comment;

    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results[0]);
                setImages(data.results[0])
            })
    }, [])


    return (

        <div style={{ width: '700px' }}>

            <h4>name: {name}</h4>
            <img src={images.picture?.large} alt="" />
            <h4>email: {email}</h4>
            <p>body: {body}</p>

        </div>


    );
};

export default PostCommentBody;
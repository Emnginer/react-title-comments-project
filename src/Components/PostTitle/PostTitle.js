import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const PostTitle = (props) => {
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>

    const { title, id } = props.post

    const style = {
        width: '100%',
        borderRadius: '10px',
        backgroundColor: '#ddd',
        padding: '10px',
        margin: '20px',
        marginBottom: '10px',
        display: 'block'
        
    }

    return (

            <Card style={style}>
                <CardContent>
                    <Typography sx={{ mb: 2.5 }} variant="h4">title: {title}</Typography>
                    <Link to={"/post/" + id} style={{textDecoration:'none'}}><Button variant="contained" color='success'>see more</Button></Link>
                </CardContent>
            </Card>
    );
};

export default PostTitle;
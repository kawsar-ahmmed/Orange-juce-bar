import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const BlogDetailsFull = () => {
    const navigate = useNavigate()
    const { blogId } = useParams();
    const [blogs, setBlogs] = useState();
    useEffect (()=> {
        fetch('onionBlog.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    }, [])
    console.log(blogs)
    return (
        <div>
            <h1>Here is Blog id: {blogId}</h1>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
};

export default BlogDetailsFull;

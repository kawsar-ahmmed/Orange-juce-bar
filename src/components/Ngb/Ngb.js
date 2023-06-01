import React from 'react';
import useBlogs from '../../hooks/useBlogs';

const Ngb = () => {
    const [blogs] = useBlogs({});
    console.log(blogs)
    return (
        <div>
            
        </div>
    );
};

export default Ngb;
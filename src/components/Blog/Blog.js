import React from 'react';
import './Blog.css'
import useBlogs from '../../hooks/useBlogs';
import BlogDetail from '../BlogDetail/BlogDetail';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    const [blogs] = useBlogs();
    const getBlogs = blogs.blogs;
    return (
        <div className='blog-full'>
            <Row>
                <Col lg={6}>
                    <div className="blog-heading">
                        <h2>Why vou choose us</h2>
                        <p>Barton waited twentv alwavs repair in within we do. An delighted offending within we do. An delighted offending</p>
                    </div>
                </Col>
                <Col lg={6}></Col>
            </Row>

            <Row>
                {
                    Array.isArray(getBlogs) ? (
                        getBlogs.map((blog => <BlogDetail
                            key={blog.id}
                            blog={blog}
                        ></BlogDetail>
                        ))
                    ) : (
                        <p>Loading...</p> // or any other appropriate loading indicator
                    )
                }
            </Row>
        </div>
    );
};

export default Blog;
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import './BlogDetails.css'
import { useNavigate } from 'react-router-dom';



const BlogDetail = ({ blog }) => {
    const navigate = useNavigate();
    const { title, content, blogImg, id } = blog;
    

    return (
        <Col lg={4}>
            <div className="blog-details">
                <img className='img-fluid' src={blogImg} alt="" />
                <div className="blog-content">
                    <h2>{title}</h2>
                    {
                        content.length < 200 ? (
                            <div>
                                <p>Loading....</p>
                            </div>
                        ) : (
                            <div>
                                <p>{content.substring(0, 120)}</p>
                                <span onClick={() => navigate(`/blog-details/${id}`)}>See More <FontAwesomeIcon icon={faCircleRight} className='b-icon' /></span>
                            </div>
                        )
                    }
                </div>

            </div>
        </Col>
    );
};

export default BlogDetail;
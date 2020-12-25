import { get } from 'mongoose';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/post';

const Posts = ({ getAllPosts, posts }) => {

    useEffect(() => {
        getAllPosts();
        console.log(posts);
    }, [getAllPosts])

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.post.posts
});

export default connect(null, { getAllPosts })(Posts)

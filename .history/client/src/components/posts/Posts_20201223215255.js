import { get } from 'mongoose';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, posts }) => {

    useEffect(() => {
        getPosts();
        console.log(posts);
    }, [getPosts])

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.post.posts
});

export default connect(null, { getPosts })(Posts)

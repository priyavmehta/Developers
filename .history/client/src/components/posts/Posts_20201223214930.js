import React from 'react'
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/post';

const Posts = () => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    posts: state.post.posts
});

export default connect(null, { getAllPosts })(Posts)

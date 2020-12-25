import { get } from 'mongoose';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner'

const Posts = ({ getPosts, post: { posts, loading } }) => {

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
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts)

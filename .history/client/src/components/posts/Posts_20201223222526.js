import { get } from 'mongoose';
import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner'

const Posts = ({ getPosts, post: { posts, loading } }) => {

    useEffect(() => {
        getPosts();
        console.log(posts);
    }, [getPosts])

    return (
        loading ? <Spinner /> : (
            <Fragment>
                <h1 className="large text-primary">Posts</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> Wdelcome to the community
                </p>
            </Fragment>
        )
    );
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts)

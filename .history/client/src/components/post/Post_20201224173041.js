import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem';

const Post = ({ post: { post, loading }, getPost, match }) => {

    useEffect(() => {
        getPost(match.params.id);
        console.log(post);
    }, [getPost]);

    return loading || post === null ? <Spinner /> : <Fragment>
        <PostItem post={post} showActions={false} />
    </Fragment>
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post)

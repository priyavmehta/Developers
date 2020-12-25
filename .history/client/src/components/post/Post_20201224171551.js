import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner'

const Post = ({ post: { post, loading }, getPost, match }) => {

    useEffect(() => {
        getPost(match.params.id);
        console.log(post);
    }, [getPost]);

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPost })(Post)

import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addComment, deleteComment } from '../../actions/post'

const CommentForm = ({ addComment, deleteComment, post: { post, loading } }) => {

    const [text, setText] = useState('')

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { addComment, deleteComment })(CommentForm)

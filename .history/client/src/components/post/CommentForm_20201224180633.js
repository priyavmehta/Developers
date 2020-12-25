import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ addComment }) => {

    const [text, setText] = useState('')

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Leave a Comment</h3>
            </div>
            <form className="form my-1" onSubmit={e => {
                e.preventDefault();
                addPost({ text });
                setText('')
            }} >
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Create a Post"
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Add Post" />
            </form>
        </div>
    )
}

export default connect(mapStateToProps, { addComment })(CommentForm)

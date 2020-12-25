import React, { useState } from 'react'
import { addPost } from '../../actions/post';
import { connect } from 'react-redux';

const PostForm = ({ addPost }) => {

    const [text, setText] = useState('')

    return (
        <div className="post-form">
            <div className="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <form className="form my-1">
                <textarea>

                </textarea>
                <input type="submit" className="btn btn-dark my-1" value="Add Post" />
            </form>
        </div>
    )
}

export default connect(null, { addPost })(PostForm)

import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import { connect } from 'react-redux'

const PostItem = ({ auth, post: {
    _id, name, text, avatar, likes, comments, user, date
} }) => {
    return (
        <div class="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${_id}`}>
                    <img
                        class="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p class="my-1">{text}</p>
                <p class="post-date">
                    Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
                </p>
                <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-up"></i>
                    <span> {likes.length}</span>
                </button>
                <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-down"></i>
                </button>
                <Link to="post.html" class="btn btn-primary">Discussion <span class='comment-count'>{comments.length}</span>
                </Link>
                <button      
                    type="button"
                    class="btn btn-danger"
                >
                <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {  })(PostItem)

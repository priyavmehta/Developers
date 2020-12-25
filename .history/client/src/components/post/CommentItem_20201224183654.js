import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';

const CommentItem = ({ comment: {_id, text, name, avatar, user, date} }) => {
    return (
        <div class="comments">
            <div class="post bg-white p-1 my-1">
                <div>
                    <Link to={`/profile/${user}`}>
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
                    <button      
                        type="button"
                        class="btn btn-danger"
                    >
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommentItem

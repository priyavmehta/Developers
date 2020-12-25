import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import { connect } from 'react-redux'

const PostItem = ({ auth, post: {
    _id, name, text, avatar, likes, comments, user, date
} }) => {
    return (
        <div>
            posts
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {  })(PostItem)

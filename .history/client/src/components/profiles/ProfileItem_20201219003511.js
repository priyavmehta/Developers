import React from 'react'
import { Link } from 'react-router-dom'

const ProfileItem = ({ profile }) => {

    const {
        user: {_id, name, avatar},
        company,
        status,
        loation,
        skills
    } = profile

    return (
        <div className="profile bg-light">
            <img src={avatar} alt="" className="round-img" />
            <h2>{name}</h2>
            <p>{status} {company && <span> at {company}</span>}</p>
            <p className="my-1">{location && <span>{location}</span>}</p>
            <Link to={`/profile/${_id}`} className="btn btn-primary">
                View Profile
            </Link>
        </div>
    )
}

export default ProfileItem

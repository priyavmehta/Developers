import React from 'react'

const ProfileItem = ({ profile }) => {

    const {
        user: {_id, name, avatar},
        company,
        status,
        loation,
        skills
    } = profile

    return (
        <div>
            test
        </div>
    )
}

export default ProfileItem

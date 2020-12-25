import React from 'react'

const ProfileExperience = ({ experience: {
    company, title, description, from, to, current, location
} }) => {
    return (
        <div>
            <h3 className="text-dark">{company}</h3>
            <p>Oct 2011 - Current</p>
            <p><strong>Position: </strong>{title}</p>
            {description && (<p>
                <strong>Description: </strong>{description}
            </p>)}
        </div>
    )
}

export default ProfileExperience

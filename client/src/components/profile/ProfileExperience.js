import React from 'react'
import Moment from 'react-moment'

const ProfileExperience = ({ experience: {
    company, title, description, from, to, current, location
} }) => {
    return (
        <div>
            <h3 className="text-dark">{company}</h3>
            <p>
                <Moment format="YYYY/MM/DD">{from}</Moment> - {
                    current ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>
                }
            </p>
            <p><strong>Position: </strong>{title}</p>
            {description && (<p>
                <strong>Description: </strong>{description}
            </p>)}
        </div>
    )
}

export default ProfileExperience

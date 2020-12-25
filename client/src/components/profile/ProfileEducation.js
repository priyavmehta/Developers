import React from 'react'
import Moment from 'react-moment'

const ProfileEducation = ({ education: {
    school, degree, description, from, to, current, fieldofstudy
} }) => {
    return (
        <div>
            <h3>{school}</h3>
            <p>
                <Moment format="YYYY/MM/DD">{from}</Moment> - {
                    current ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>
                }
            </p>
            <p><strong>Degree: </strong>{degree}</p>
            <p><strong>Field Of Study: </strong>{fieldofstudy}</p>
                {description && (<p>
                <strong>Description: </strong>{description}
            </p>)}
        </div>
    )
}

export default ProfileEducation

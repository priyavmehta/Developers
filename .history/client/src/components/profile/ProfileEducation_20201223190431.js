import React from 'react'
import Moment from 'react-moment'

const ProfileEducation = ({ education: {
    school, degree, description, from, to, current, fieldofstudy
} }) => {
    return (
        <div class="profile-edu bg-white p-2">
            <h2 class="text-primary">Education</h2>
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
        </div>
    )
}

export default ProfileEducation

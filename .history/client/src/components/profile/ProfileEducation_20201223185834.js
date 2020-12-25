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
                <p>Sep 1993 - June 1999</p>
                <p><strong>Degree: </strong>degree</p>
                <p><strong>Field Of Study: </strong>Computer Science</p>
                <p>
                <strong>Description: </strong>Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                ipsam, sapiente suscipit dicta eius velit amet aspernatur
                asperiores modi quidem expedita fugit.
                </p>
            </div>
        </div>
    )
}

export default ProfileEducation

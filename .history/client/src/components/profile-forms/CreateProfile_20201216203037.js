import React, { useState } from 'react'

const CreateProfile = props => {

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubuserame: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
    });

    const {
        company,
        website,
        location,
        status,
        skills,
        githubuserame,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData
    
    return (
        <div>
            
        </div>
    )
}

export default CreateProfile

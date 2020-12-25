import React from 'react'

const ProfileTop = ({ profile: {
    status,
    company, 
    location,
    website,
    social,
    user:{ name, avatar}
} }) => {

    console.log(social.twitter);
    return (
        <div class="profile-top bg-primary p-2">
            <img
                class="round-img my-1"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
            />
            <h1 class="large">{name}</h1>
            <p class="lead">{status} at {company}</p>
            <p>{location}</p>
            <div class="icons my-1">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-globe fa-2x"></i>
                </a>
                {social.twitter !== null && (
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter fa-2x"></i>
                </a>
                )}
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-youtube fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default ProfileTop

import React from 'react'

const ProfileAbout = ({ profile: {
    bio,
    skills,
    user: {name}
} }) => {
    return (
        <div class="profile-about bg-light p-2">
            {bio && <h2 class="text-primary">{name}'s Bio</h2>}
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
                neque modi perspiciatis similique?
            </p>
            <div class="line"></div>
            <h2 class="text-primary">Skill Set</h2>
            <div class="skills">
                <div class="p-1"><i class="fa fa-check"></i> HTML</div>
                <div class="p-1"><i class="fa fa-check"></i> CSS</div>
                <div class="p-1"><i class="fa fa-check"></i> JavaScript</div>
                <div class="p-1"><i class="fa fa-check"></i> Python</div>
                <div class="p-1"><i class="fa fa-check"></i> C#</div>
            </div>
        </div>
    )
}

export default ProfileAbout

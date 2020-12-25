import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile'

const ProfileGithub = ({ githubusername, getGithubRepos, repos }) => {

    useEffect(() => {
        getGithubRepos(githubusername);
        console.log(repos);
    }, [getGithubRepos])

    return (
        <div>
            profile github
        </div>
    )
}

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)

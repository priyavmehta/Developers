import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const ProfileGithub = ({ githubusername, getGithubRepos, repos }) => {

    useEffect(() => {
        getGithubRepos(githubusername);
        console.log(repos);
    }, [getGithubRepos])

    return (
        <div class="profile-github">
            <h2 class="text-primary my-1">
                <i class="fab fa-github"></i> Github Repos
            </h2>
            {
                repos === null ? <Spinner /> : (
                    repos.map(repo => (
                        <div key={repo.id} class="repo bg-white p-1 my-1">
                            <div>
                                <h4><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h4>
                                <p>
                                        <p>This repository does not have any description</p>
                                    {repo.description === null ? '' : (repo.description)}
                                </p>
                                {
                                    repo.description === null ? (
                                        <p>This repository does not have any description</p>
                                    ) : (
                                        <p>{repo.description}</p>
                                    )
                                }
                            </div>
                            <div>
                                <ul>
                                    <li class="badge badge-primary">Stars: {repo.stargazers_count}</li>
                                    <li class="badge badge-dark">Watchers: {repo.watchers}</li>
                                    <li class="badge badge-light">Forks: {repo.forks}</li>
                                </ul>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    )
}

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)

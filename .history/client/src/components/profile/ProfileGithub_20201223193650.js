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
                                <h4><a href="#" target="_blank" rel="noopener noreferrer">Repo One</a></h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Repellat, laborum!
                                </p>
                            </div>
                            <div>
                                <ul>
                                    <li class="badge badge-primary">Stars: 44</li>
                                    <li class="badge badge-dark">Watchers: 21</li>
                                    <li class="badge badge-light">Forks: 25</li>
                                </ul>
                            </div>
                        </div>
                    ))
                )
            }
            
            {/* <div class="repo bg-white p-1 my-1">
                <div>
                    <h4><a href="#" target="_blank" rel="noopener noreferrer">Repo Two</a></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat, laborum!
                    </p>
                </div>
                <div>
                    <ul>
                        <li class="badge badge-primary">Stars: 44</li>
                        <li class="badge badge-dark">Watchers: 21</li>
                        <li class="badge badge-light">Forks: 25</li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub)

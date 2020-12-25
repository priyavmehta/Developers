import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const Profile = ({ match, profile: { profile, loading }, auth, getProfileById }) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (
        
        <Fragment>
            {
                profile === null || loading ? <Spinner /> : <Fragment>
                    <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
                    {
                        auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (
                            <Link to="edit-profile" className="btn btn-dark">Edit Profile</Link>
                        )
                    }
                    <div className="profile-grid my-1">
                        <ProfileTop profile={profile}/>
                        <ProfileAbout profile={profile}/>
                        <div className="profile-exp bg-white p-2">
                            <h2 className="text-primary">Experience</h2>
                            {
                                profile.experience.length > 0 ?
                               (profile.experience.map((exp, key) => (

                                ))) : <h4>No Experience Credentials</h4>
                            }
                            <div>
                                <h3 className="text-dark">Microsoft</h3>
                                <p>Oct 2011 - Current</p>
                                <p><strong>Position: </strong>Senior Developer</p>
                                <p>
                                <strong>Description: </strong>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                                ipsam, sapiente suscipit dicta eius velit amet aspernatur
                                asperiores modi quidem expedita fugit.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-dark">Sun Microsystems</h3>
                                <p>Nov 2004 - Nov 2011</p>
                                <p><strong>Position: </strong>Systems Admin</p>
                                <p>
                                <strong>Description: </strong>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                                ipsam, sapiente suscipit dicta eius velit amet aspernatur
                                asperiores modi quidem expedita fugit.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

const mapStateToProps = state =>({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile)

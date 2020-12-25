import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

const Profile = ({ match, profile: { profile, loading }, auth, getProfileById }) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById]);

    return (
        
        <Fragment>
            {
                profile === null || loading ? <Spinner /> : <Fragment>
                    <Link to="/profiles" className="btn btn-light">Go To Profiles</Link>
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

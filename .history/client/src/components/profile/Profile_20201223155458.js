import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Profile = ({ match, profile, auth, getProfileById }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById]);
    return (
        
        <div>
            profile
        </div>
    )
}

const mapStateToProps = state =>({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile)

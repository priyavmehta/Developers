import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const Dashboard = ({ getCurrentProfile, auth, profile }) => {

    useEffect(() =>{
        getCurrentProfile()
    }, [])  

    return (

        profile.loading && profile.profile === null ? <Spinner /> : 
        <Fragment>
            <h1 className = "large text-primary">Dashboard</h1>
            <p className = "lead">
                <i className = "fas fa-user" /> Welcome { auth.user && auth.user.name}
            </p>
            {
                profile.profile !== null ?
                <Fragment>
                    has
                </Fragment> : 
                <Fragment>
                    <p>You have not setup a profile. Add some info</p>
                    <Link to="/create-profile" className = 'btn btn-primary my-1'>
                        Create Profile
                    </Link>
                </Fragment>
            }
        </Fragment>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)


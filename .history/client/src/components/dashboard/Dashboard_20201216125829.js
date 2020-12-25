import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const Dashboard = ({ getCurrentProfile, auth, profile }) => {

    useEffect(() =>{
        getCurrentProfile()
    }, [])  

    return (

        profile.loading && profile.profile === null ? <Spinner /> : 
        <Fragment>
            <h1 className = "large text-primary"></h1>
            <p className = "lead">
                <i className = "fas fa-user" /> Welcome { auth.user && auth.user.name}
            </p>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)


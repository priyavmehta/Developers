import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const Dashboard = ({ getCurrentProfile, auth, profile }) => {

    useEffect(() =>{
        getCurrentProfile()
    }, [])  

    return (

        profile.loading && profile === null ? <Spinner /> : 
        <Fragment>
            Dashboard
        </Fragment>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)


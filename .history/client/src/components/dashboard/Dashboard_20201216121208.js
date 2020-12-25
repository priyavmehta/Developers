import React from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'

const Dashboard = () => {
    return (
        <div>
            Dashboard
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default Dashboard


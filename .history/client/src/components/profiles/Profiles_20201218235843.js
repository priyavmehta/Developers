import React from 'react'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)

import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfiles } from '../../actions/profile'
import Spinner from '../layout/Spinner'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {

    useEffect(() => {
        getProfiles()
    }, [])

    return (
        <Fragment>
            {
                loading ? <Spinner /> : 
                <Fragment>
                    {
                        profiles.length > 0 ? (
                            profiles.map(profile => (
                                <h1>Hello</h1>
                            ))
                        ) : <h2>No Profies Found...</h2>
                    }
                </Fragment>
            }
        </Fragment>
    )
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'

const Experience = () => {
    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
            </table>
        </Fragment>
    )
}

export default Experience

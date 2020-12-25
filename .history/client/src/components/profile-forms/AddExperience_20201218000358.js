import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addExperience } from '../../actions/profile';

const AddExperience = () => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData

    return (
        <Fragment>
            <h1 class="large text-primary">
            Add An Experience
            </h1>
            <p class="lead">
                <i class="fas fa-code-branch"></i> Add any developer/programming
                positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form class="form">
                <div class="form-group">
                    <input type="text" placeholder="* Job Title" name="title" required value={title} />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="* Company" name="company" required value={company} />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Location" name="location" value={location} />
                </div>
                <div class="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" />
                </div>
                <div class="form-group">
                    <p><input type="checkbox" name="current" /> Current Job</p>
                </div>
                {
                    !current && <div class="form-group">
                        <h4>To Date</h4>
                        <input type="date" name="to" />
                    </div>
                }
                
                <div class="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
                        value={description}
                    ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" value="Add Experience"/>
                <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

export default connect(null, { addExperience })(AddExperience)

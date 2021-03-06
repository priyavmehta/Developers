import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux';
import setAlert from '../../actions/alert'

const Register = ({ setAlert }) => {
    console.log("Hello");
    const [FormData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        confirm_password: ''
    });

    const { name, email, password, confirm_password } = FormData;

    const changeHandler = e => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (password !== confirm_password) {
            console.log("Passwords do not match");
            setAlert("Passwords do not match", 'danger');
        } else {
            console.log(FormData);
            // const newUser = {
            //     name,
            //     email,
            //     password
            // }

            // const config = {
            //     headers: {
            //         'Content-Type' : 'application/json'
            //     }
            // }

            // const body = JSON.stringify(newUser);

            // const res = await axios.post('/api/users', body, config);
            // console.log(res.data);

            // try {
                
            // } catch (error) {
            //     console.error(error.response.data);
            // }
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit = {onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange = {e => changeHandler(e)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange = {e => changeHandler(e)}
                        value = {email}
                        required
                    />
                    <small className="form-text">
                        This site uses Gravatar so if you want a profile image, use a Gravatar email
                    </small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        onChange = {e => changeHandler(e)}
                        value = {password}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirm_password"
                        minLength="6"
                        onChange = {e => changeHandler(e)}
                        value = {confirm_password}
                        required
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    )
}

export default connect(null, { setAlert })(Register);

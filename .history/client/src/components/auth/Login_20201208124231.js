import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    console.log("Hello");
    const [FormData, setFormData] = useState({
        email: '',
        password: '',
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
        } else {
            console.log(FormData);
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit = {onSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange = {e => changeHandler(e)}
                        value = {email}
                        required
                    />
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
                <input type="submit" className="btn btn-primary" value="Login"/>
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/login">Register</Link>
            </p>
        </Fragment>
    )
}

export default Login

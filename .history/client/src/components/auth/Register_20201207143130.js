import React, { Fragment, useState } from 'react'

const Register = () => {

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

    const onSubmit = e => {
        e.preventDefault();

        if (password !== confirm_password) {
            console.log("Passwords do not match");
        } else {
            console.log(FormData);
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit = {e => onSubmit()}>
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
                <input type="submit" className="btn btn-primary" value="Register" onSubmit = {e => onsubmit()}/>
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </Fragment>
    )
}

export default Register

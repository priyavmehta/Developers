import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

const Navbar = ({ auth, logout }) => {

    const { isAuthenticated, loading } = auth;
    console.log("In Navbar", isAuthenticated, loading);

    const authLinks = (
        <ul>
            <li><a href = "#!" onClick={logout}>Logout</a></li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to = "/">Developers</Link></li>
            <li><Link to = "/register">Register</Link></li>
            <li><Link to = "/login">Login</Link></li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> <i>Developers</i> </Link>
            </h1>
            <ul>
                <li><Link to = "/">Developers</Link></li>
                <li><Link to = "/register">Register</Link></li>
                <li><Link to = "/login">Login</Link></li>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

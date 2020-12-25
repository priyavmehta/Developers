import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth';

const Navbar = ({ auth, logout }) => {

    const { isAuthenticated, loading } = auth;
    console.log("In Navbar", isAuthenticated, loading);

    const authLinks = (
        <ul>
            <li>
                <Link to = "/profiles">Programmers</Link>
            </li>
            <li>
                <Link to = "/posts">Posts</Link>
            </li>
             <li>
                <Link to = "/dashboard">
                <i className="fas fa-user"></i>{' '}
                <span className="hide-sm">Dashboard</span>
                </Link>
            </li>
            <li>
                <a href = "#!" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i>{' '}
                <span className="hide-sm">Logout</span>
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li><Link to = "/profiles">Programmers</Link></li>
            <li><Link to = "/register">Register</Link></li>
            <li><Link to = "/login">Login</Link></li>
        </ul>
    );

    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/"><i className="fas fa-code"></i> <i>Developers</i> </Link>
            </h1>
            {
                !loading &&  (
                    <Fragment>
                    {
                        isAuthenticated ?
                        authLinks : guestLinks
                    }
                    </Fragment>
                )
            }
        </nav>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

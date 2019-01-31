import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Project Planer</Link>
            </div>
            <SignedInLinks />
            <SignedOutLinks />
        </nav>
    )
}

const mapStateToPropos = (state) => {
    console.log(state);
    return {
        
    }
}

export default connect(mapStateToPropos)(Navbar)
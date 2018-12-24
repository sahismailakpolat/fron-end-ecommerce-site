import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <a className={`navbar__link ${link.active ? 'green-text' : ''}`} key={index} onClick={() => console.log('trying')}>
                                {link.title}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToprops(state) {
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

Navbar = connect(mapStateToprops)(Navbar);
export default Navbar;
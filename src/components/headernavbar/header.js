import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='header__img' src='http://via.placeholder.com/50*50' />
                <div className='header'>
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a className='header__link' key={index} onClick={() => console.log('trying')}>
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { headerLinks } = state.headerNavbar;
    return {
        headerLinks
    }
}

Header = connect(mapStateToProps)(Header);
export default Header;
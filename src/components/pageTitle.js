import React, { Component } from 'react';

class Pagetitle extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} page-title`}>{title}</div>

        )
    }
}

export default Pagetitle;
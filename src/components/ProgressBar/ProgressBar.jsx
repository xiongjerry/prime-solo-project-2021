import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ value, max }) => {

    const containerStyles = {
        height: 20,
        width: '30%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${max}%`,
        backgroundColor: "#78909c",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <progress value={value} max={max} />
                <span style={labelStyles}> {value} / {max} </span>
            </div>
        </div>
    )
};

ProgressBar.PropTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
};

ProgressBar.defaultProps = {
    max: 100
};

export default ProgressBar;


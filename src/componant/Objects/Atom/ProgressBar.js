import React from 'react';
import PropTypes from 'prop-types';
import './AtomStyle/ProgressBar.css';

const ProgressBar = ({ total, completed, label = 'Last Week' }) => {
    const percentage = Math.min(100, Math.max(0, (completed / total) * 100));

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-label">{label}</div>
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            {/* <div className="progress-bar-text">
                <span>{completed}</span>
                <span>{total}</span>
            </div> */}
        </div>
    );
};

ProgressBar.propTypes = {
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired,
    label: PropTypes.string,
};

export default ProgressBar;

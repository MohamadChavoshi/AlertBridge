import React from 'react';
import PropTypes from 'prop-types';
import '../Objects/ObjectStyle/GridCard.css';
import ProgressBar from './Atom/ProgressBar';

const GridCard = ({ title, description, buttonText, onButtonClick, total, completed, titleColor, number, contactPoint }) => {
    if (contactPoint) {
        return (
            <div className="grid-card contact-point-card">
                <h3 className="contact-point-subtitle">Contact Point</h3>
                <h1 className="contact-point-title">{contactPoint}</h1>
            </div>
        );
    }

    return (
        <div className="grid-card">
            <h2 className="grid-card-title" style={{ color: titleColor || 'inherit' }}>{title}</h2>
            {number !== undefined ? (
                <h1 className="grid-card-number">{number}</h1>
            ) : description ? (
                <p className="grid-card-description">{description}</p>
            ) : null}
            {buttonText && onButtonClick ? (
                <button className="grid-card-button" onClick={onButtonClick}>
                    {buttonText}
                </button>
            ) : (
                total !== undefined && completed !== undefined && (
                    <ProgressBar total={total} completed={completed} />
                )
            )}
        </div>
    );
};

GridCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
    total: PropTypes.number,
    completed: PropTypes.number,
    titleColor: PropTypes.string,
    number: PropTypes.number,
    contactPoint: PropTypes.string,
};

export default GridCard;

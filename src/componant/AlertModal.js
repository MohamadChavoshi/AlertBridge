import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../componantStyle/AlertModal.css';

const AlertModal = ({ alert, onClose, onSave, contactPoints }) => {
    const [message, setMessage] = useState(alert.message);
    const [selectedContacts, setSelectedContacts] = useState(alert.selectedContacts);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSave = () => {
        onSave({ ...alert, message, selectedContacts });
    };

    const handleContactChange = (contactId) => {
        setSelectedContacts(prev =>
            prev.includes(contactId)
                ? prev.filter(id => id !== contactId)
                : [...prev, contactId]
        );
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="alert-modal">
            <div className="alert-modal-content">
                <h2>Edit Alert Message</h2>
                <div className="modal-layout">
                    <div className="modal-main">
                        <div style={{ height: "30px" }}></div>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Alert message"
                        />
                        <div className="contact-points-dropdown" ref={dropdownRef}>
                            <button onClick={toggleDropdown} className="dropdown-toggle">
                                <span>Select Contact Points</span>
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`icon ${isDropdownOpen ? 'open' : ''}`}
                                />
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    {contactPoints.map(contact => (
                                        <label key={contact.id} className="dropdown-item">
                                            <input
                                                type="checkbox"
                                                checked={selectedContacts.includes(contact.id)}
                                                onChange={() => handleContactChange(contact.id)}
                                            />
                                            {contact.name}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="selected-contacts">
                            <h3>Selected Contact Points:</h3>
                            <div style={{ height: "20px" }}></div>
                            {selectedContacts.map(contactId => {
                                const contact = contactPoints.find(c => c.id === contactId);
                                return (
                                    <span
                                        key={contactId}
                                        className="contact-tag"
                                        style={{ backgroundColor: contact.color }}
                                    >
                                        {contact.name}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="modal-buttons">
                            <button onClick={handleSave}>Save</button>
                            <button onClick={onClose}>Cancel</button>
                        </div>
                    </div>
                    <div className="modal-side">
                        <h3>Field Descriptions</h3>
                        <p><strong>Alert Message:</strong> Enter the message you want to send for this alert.</p>
                        <p><strong>Contact Points:</strong> Select the individuals or groups who should receive this alert.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;

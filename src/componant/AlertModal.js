import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../componantStyle/AlertModal.css';

const AlertModal = ({ alert, onClose, onSave, contactPoints }) => {
    const [message, setMessage] = useState(alert.message);
    const [selectedContacts, setSelectedContacts] = useState(alert.selectedContacts);
    const [language, setLanguage] = useState(alert.language || 'en');
    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const contactDropdownRef = useRef(null);
    const langDropdownRef = useRef(null);

    const handleSave = () => {
        onSave({ ...alert, message, selectedContacts, language });
    };

    const handleContactChange = (contactId) => {
        setSelectedContacts(prev =>
            prev.includes(contactId)
                ? prev.filter(id => id !== contactId)
                : [...prev, contactId]
        );
    };

    const toggleContactDropdown = () => {
        setIsContactDropdownOpen(!isContactDropdownOpen);
    };

    const toggleLangDropdown = () => {
        setIsLangDropdownOpen(!isLangDropdownOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) {
                setIsContactDropdownOpen(false);
            }
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setIsLangDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fa', name: 'Farsi' }
    ];

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
                        <div className="dropdown-container">
                            <div className="contact-points-dropdown" ref={contactDropdownRef}>
                                <button onClick={toggleContactDropdown} className="dropdown-toggle">
                                    <span>Select Contact Points</span>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`icon ${isContactDropdownOpen ? 'open' : ''}`}
                                    />
                                </button>
                                {isContactDropdownOpen && (
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
                            <div className="language-dropdown" ref={langDropdownRef}>
                                <button onClick={toggleLangDropdown} className="dropdown-toggle">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        style={{ marginRight: '8px', color: '#5b95ff' }}
                                    />
                                    <span>Language: {languages.find(lang => lang.code === language)?.name || 'Choose'}</span>
                                    <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`icon ${isLangDropdownOpen ? 'open' : ''}`}
                                    />
                                </button>
                                {isLangDropdownOpen && (
                                    <div className="dropdown-menu language-dropdown-menu">
                                        {languages.map(lang => (
                                            <div
                                                key={lang.code}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    setLanguage(lang.code);
                                                    setIsLangDropdownOpen(false);
                                                }}
                                            >
                                                {lang.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
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
                        <div className="selected-language">
                            <h3>Selected Language:</h3>
                            <div style={{ height: "20px" }}></div>
                            <span className="language-tag">
                                {languages.find(lang => lang.code === language)?.name}
                            </span>
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
                        <p><strong>Language:</strong> Choose the language for this alert (en for English, fa for Farsi).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlertModal;

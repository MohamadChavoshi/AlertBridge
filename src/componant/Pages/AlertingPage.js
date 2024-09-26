import React, { useState } from 'react';
import './PageStyle/AlertingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import AlertModal from '../AlertModal';

const AlertingPage = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedAlert, setSelectedAlert] = useState(null);
    const [alerts, setAlerts] = useState([
        { message: 'High CPU Usage', id: 'ALR001', selectedContacts: [1, 2] },
        { message: 'Low Disk Space', id: 'ALR002', selectedContacts: [3] },
        { message: 'Network Latency', id: 'ALR003', selectedContacts: [2, 4] },
        { message: 'Database Connection Error', id: 'ALR004', selectedContacts: [1, 3, 4] },
    ]);

    const contactPoints = [
        { id: 1, name: 'Email', color: '#EA4335' },
        { id: 2, name: 'Telegram', color: '#2196F3' },
        { id: 3, name: 'Slack', color: '#4A154B' },
        { id: 4, name: 'Teams', color: '#4B53BC' },
    ];

    const handleEditClick = (alert) => {
        setSelectedAlert(alert);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedAlert(null);
    };

    const handleSaveAlert = (updatedAlert) => {
        setAlerts(prevAlerts =>
            prevAlerts.map(alert =>
                alert.id === updatedAlert.id ? updatedAlert : alert
            )
        );
        closeModal();
    };

    return (
        <div className="table-container">
            <div className="header-Home">
                <span className="workspace-label">Alerting Settings</span>
                <div className="header-actions">
                    <button className="update-send-button">
                        Update & Send
                        <FontAwesomeIcon icon={faPaperPlane} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
            <div style={{ height: "50px" }}></div>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Alert Message</th>
                        <th>Alert ID</th>
                        <th>Target Contact Points</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((item, index) => (
                        <tr key={index}>
                            <td>{item.message}</td>
                            <td>{item.id}</td>
                            <td>
                                {item.selectedContacts.map(contactId => {
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
                            </td>
                            <td>
                                <button className="edit-button" onClick={() => handleEditClick(item)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modalOpen && (
                <AlertModal
                    alert={selectedAlert}
                    onClose={closeModal}
                    onSave={handleSaveAlert}
                    contactPoints={contactPoints}
                />
            )}
        </div>
    );
};

export default AlertingPage;

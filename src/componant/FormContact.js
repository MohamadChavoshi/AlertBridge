import React, { useState } from 'react';
import '../componantStyle/FormContact.css';

const ConfigurationForm = ({ onPlatformChange }) => {
    const [platform, setPlatform] = useState('');
    const [botToken, setBotToken] = useState('');
    const [chatId, setChatId] = useState('');
    const [channelId, setChannelId] = useState('');
    const [webhookUrl, setWebhookUrl] = useState('');
    const [roomId, setRoomId] = useState('');
    const [smtpHost, setSmtpHost] = useState('');
    const [smtpPort, setSmtpPort] = useState('');
    const [smtpUser, setSmtpUser] = useState('');
    const [smtpPassword, setSmtpPassword] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [fromName, setFromName] = useState('');

    const handlePlatformChange = (e) => {
        const selectedPlatform = e.target.value;
        setPlatform(selectedPlatform);
        onPlatformChange(selectedPlatform); // Notify parent component
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ platform, botToken, chatId, channelId, webhookUrl, roomId, smtpHost, smtpPort, smtpUser, smtpPassword, fromAddress, fromName });
    };

    return (
        <div className="outer-container">
            <div className="contact-form-container">
                <h1>Configuration</h1>
                <p className="subtitle">Configure / edit contact point setup</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="platform">Platform</label>
                        <select
                            id="platform"
                            value={platform}
                            onChange={handlePlatformChange}
                            required
                        >
                            <option value="">Select a platform</option>
                            <option value="Telegram">Telegram</option>
                            <option value="Element">Element</option>
                            <option value="Slack">Slack</option>
                            <option value="Teams">Teams</option>
                            <option value="Email">Email</option>
                        </select>
                    </div>

                    {platform === 'Telegram' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="botToken">Bot API Token</label>
                                <input
                                    type="text"
                                    id="botToken"
                                    value={botToken}
                                    onChange={(e) => setBotToken(e.target.value)}
                                    required
                                />
                                <small>Please insert your Bot token in this field</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="chatId">Chat ID</label>
                                <input
                                    type="text"
                                    id="chatId"
                                    value={chatId}
                                    onChange={(e) => setChatId(e.target.value)}
                                    required
                                />
                                <small>Integer Telegram Chat Identifier</small>
                            </div>
                        </>
                    )}

                    {platform === 'Slack' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="channelId">Channel ID</label>
                                <input
                                    type="text"
                                    id="channelId"
                                    value={channelId}
                                    onChange={(e) => setChannelId(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="webhookUrl">Webhook URL</label>
                                <input
                                    type="text"
                                    id="webhookUrl"
                                    value={webhookUrl}
                                    onChange={(e) => setWebhookUrl(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {platform === 'Element' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="webhookUrl">Webhook URL</label>
                                <input
                                    type="text"
                                    id="webhookUrl"
                                    value={webhookUrl}
                                    onChange={(e) => setWebhookUrl(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="roomId">Room ID</label>
                                <input
                                    type="text"
                                    id="roomId"
                                    value={roomId}
                                    onChange={(e) => setRoomId(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {platform === 'Email' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="smtpHost">SMTP Host</label>
                                <input
                                    type="text"
                                    id="smtpHost"
                                    value={smtpHost}
                                    onChange={(e) => setSmtpHost(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="smtpPort">SMTP Port</label>
                                <input
                                    type="text"
                                    id="smtpPort"
                                    value={smtpPort}
                                    onChange={(e) => setSmtpPort(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="smtpUser">SMTP User</label>
                                <input
                                    type="text"
                                    id="smtpUser"
                                    value={smtpUser}
                                    onChange={(e) => setSmtpUser(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="smtpPassword">SMTP Password</label>
                                <input
                                    type="password"
                                    id="smtpPassword"
                                    value={smtpPassword}
                                    onChange={(e) => setSmtpPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fromAddress">From Address</label>
                                <input
                                    type="email"
                                    id="fromAddress"
                                    value={fromAddress}
                                    onChange={(e) => setFromAddress(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fromName">From Name</label>
                                <input
                                    type="text"
                                    id="fromName"
                                    value={fromName}
                                    onChange={(e) => setFromName(e.target.value)}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {platform === 'Teams' && (
                        <div className="form-group">
                            <label htmlFor="webhookUrl">Webhook URL</label>
                            <input
                                type="text"
                                id="webhookUrl"
                                value={webhookUrl}
                                onChange={(e) => setWebhookUrl(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className="save-button">Save</button>
                </form>
            </div>
        </div>
    );
};

export default ConfigurationForm;

// Popup.jsx
import React from 'react';
import './Popup.css';

const Popup = ({ item, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{item.name}</h2>
        <hr className="popup-divider"/>
        <p><strong>Description:</strong> {item.description}</p>
        <hr className="popup-divider"/>
        <p><strong>URL:</strong> {item.url}</p>
        <hr className="popup-divider"/>
        <p><strong>Method:</strong> {item.method}</p>
        <hr className="popup-divider"/>
        <p><strong>Resource:</strong> {item.url_resource}</p>
        <hr className="popup-divider"/>
        <p><strong>Periodicity:</strong> {item.periodicity}</p>
        <p><button onClick={onClose}>Close</button></p>
      </div>
    </div>
  );
}

export default Popup;
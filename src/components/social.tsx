import React from 'react';
import './SocialSidebar.css'; // Custom CSS for styling

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-link instagram">
        <i className="fab fa-instagram"></i>
        <span className="social-name">Instagram</span>
      </div>

      <div className="social-link facebook">
        <i className="fab fa-facebook-f"></i>
        <span className="social-name">Facebook</span>
      </div>

      <div className="social-link whatsapp">
        <i className="fab fa-whatsapp"></i>
        <span className="social-name">WhatsApp</span>
      </div>

      <div className="social-link youtube">
        <i className="fab fa-youtube"></i>
        <span className="social-name">YouTube</span>
      </div>
    </div>
  );
};

export default SocialSidebar;

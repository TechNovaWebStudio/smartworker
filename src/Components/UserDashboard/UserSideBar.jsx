import React, { useState } from 'react';
import './UserSideBar.css';

export function UserSideBar({ toolbar, setTab }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleNavClick = (tab) => {
        setTab(tab);
        setIsOpen(false); // Close sidebar on mobile after clicking
    };

    return (
        <div className="user-sidebar-container">
            {/* Mobile Toggle Button */}
            <button className="mobile-toggle" onClick={toggleSidebar}>
                <i className={isOpen ? "ph ph-x" : "ph ph-list"}></i>
            </button>

            {/* Overlay for mobile when sidebar is open */}
            {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-logo">
                    <i className="ph-fill ph-lightning"></i> SmartWorker
                </div>

                <nav className="nav-group">
                    <div className="nav-label">Main Menu</div>
                    <a href="#" className={`nav-item ${toolbar === 'Dashboard' ? 'active' : ''}`} onClick={() => handleNavClick('Dashboard')}>
                        <i className="ph ph-file-text"></i> Dashboard
                    </a>
                    <a href="#" className={`nav-item ${toolbar === 'ResumesList' ? 'active' : ''}`} onClick={() => handleNavClick('ResumesList')}>
                        <i className="ph ph-envelope-simple"></i> Resume Templates
                    </a>
                    <a href="#" className={`nav-item ${toolbar === 'PPTList' ? 'active' : ''}`} onClick={() => handleNavClick('PPTList')}>
                        <i className="ph ph-graduation-cap"></i> PPT Templates
                    </a>
                    <a href="#" className={`nav-item ${toolbar === 'PortfolioList' ? 'active' : ''}`} onClick={() => handleNavClick('PortfolioList')}>
                        <i className="ph ph-graduation-cap"></i> Portfolio Templates
                    </a>
                    <a href="#" className={`nav-item ${toolbar === 'DocumentList' ? 'active' : ''}`} onClick={() => handleNavClick('DocumentList')}>
                        <i className="ph ph-envelope-simple"></i> Document Templates
                    </a>
                    <a href="#" className={`nav-item ${toolbar === 'DraftProject' ? 'active' : ''}`} onClick={() => handleNavClick('DraftProject')}>
                        <i className="ph ph-envelope-simple"></i> Draft Templates
                    </a>
                    <a href="#" className={`nav-item ${toolbar === 'AIFeatuars' ? 'active' : ''}`} onClick={() => handleNavClick('AIFeatuars')}>
                        <i className="ph ph-envelope-simple"></i> AI Features
                    </a>
                </nav>

                <nav className="nav-group">
                    <div className="nav-label">Settings</div>
                    <a href="#" className="nav-item">
                        <i className="ph ph-user"></i> Profile
                    </a>
                    <a href="#" className="nav-item">
                        <i className="ph ph-gear"></i> Account Settings
                    </a>
                </nav>
            </aside>
        </div>
    );
}
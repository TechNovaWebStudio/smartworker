import { useState } from 'react';
import './UserNavbar.css';

export function UserNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // For mobile search toggle

    return (
        <div className="user-navbar-container">
            <nav className="navbar">
                {/* Search Bar - Hidden on very small screens unless toggled */}
                <div className={`nav-search ${isSearchOpen ? 'active' : ''}`}>
                    <i className="ph ph-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {/* Right Side Actions */}
                <div className="nav-actions">
                    <div className="icon-actions">
                        <button className="action-btn mobile-search-trigger" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                            <i className="ph ph-magnifying-glass"></i>
                        </button>
                        
                        <button className="action-btn hide-mobile" title="Help">
                            <i className="ph ph-question"></i>
                        </button>

                        <button className="action-btn notification" title="Notifications">
                            <i className="ph ph-bell"></i>
                            <span className="pulse-dot"></span>
                        </button>
                    </div>

                    <div className="profile-container">
                        <button
                            className="profile-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80"
                                alt="Profile"
                                className="avatar"
                            />
                            <div className="profile-text-info">
                                <p className="profile-name">Jordan Smith</p>
                                <div className="status-indicator">
                                    <span className="status-dot"></span>
                                    <span className="status-text">Active</span>
                                </div>
                            </div>
                        </button>

                        {isOpen && (
                            <div className="dropdown-card">
                                <div className="user-info">
                                    <span className="user-name">Jordan Smith</span>
                                    <span className="user-email">jordan@kindley.com</span>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a href="#profile" className="dropdown-link"><i className="ph ph-user-circle"></i> View Profile</a>
                                <a href="#settings" className="dropdown-link"><i className="ph ph-gear-six"></i> Settings</a>
                                <div className="dropdown-divider"></div>
                                <a href="#logout" className="dropdown-link logout"><i className="ph ph-sign-out"></i> Sign Out</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
import { useState } from "react";
import "./FullNavabar.css";
// import "boxicons/css/boxicons.min.css";

export function FullNavbar({ buttons,center }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="full-navbar">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-left">
                    <i
                        className={`bx ${sidebarOpen ? "bx-x" : "bx-menu"} menu-btn`}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    ></i>
                    <div className="logo">GENESIS.AI</div>
                </div>

                {center == true ?
                    <div className="header-center">
                        <i className="fa-solid fa-rotate-left" />
                        <i className="fa-solid fa-rotate-right" />
                        <span className="zoom">
                            32% <i className="fa-solid fa-chevron-down" />
                        </span>
                    </div>
                    : ''}

                <div className="nav-right">
                    {buttons == 'Download&Share' ?
                        <div className="nav-buttons">
                            <i className="fa-regular fa-lightbulb"></i>
                            <button className="text-btn">Download</button>
                            <button className="btn-blue">
                                <i className="fa-solid fa-paper-plane"></i> Share
                            </button>
                        </div> : ''}
                    <div className="user-profile">
                        <div className="user-info">
                            <span className="name">Alex Rivers</span>
                            <small className="plan">Pro Plan</small>
                        </div>
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                            className="profile-img"
                            alt="avatar"
                        />
                    </div>
                </div>
            </nav>

            {/* <div className="container"> */}
            {/* Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
                <ul className="sidebar-links">
                    <li><a href="#"><i className="bx bx-grid-alt"></i> Dashboard</a></li>
                    <li><a href="#"><i className="bx bx-bar-chart-alt-2"></i> Analytics</a></li>
                    <li><a href="#"><i className="bx bx-message-square-detail"></i> Messages</a></li>
                    <li><a href="#"><i className="bx bx-cog"></i> Settings</a></li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Your page content */}
            </main>
            {/* </div> */}
        </div>
    );
}

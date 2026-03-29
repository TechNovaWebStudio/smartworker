import './HomeNavbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function HomeNavbar() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="home-navbar">
            <div className="logo" onClick={() => navigate('/')}>
                <i className="fa-solid fa-cube fa-lg"></i>
                <span>ResumAI</span>
            </div>

            <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="nav-btns">
                <a
                    href="#"
                    className="login-link"
                    onClick={() => navigate('/login')}
                >
                    Login
                </a>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate('/login')}
                >
                    Start Free
                </button>

                <div className="hamburger" onClick={toggleMobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

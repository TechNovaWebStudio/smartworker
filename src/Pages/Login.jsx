import { useState } from 'react';
import './Login.css';

export function Login() {
    // Basic state to handle the toggle animation
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="login-container">
            <div className="blob" style={{ width: '500px', height: '500px', background: 'var(--primary)', top: '-150px', left: '-150px' }}></div>
            <div className="blob" style={{ width: '400px', height: '400px', background: 'var(--accent)', bottom: '-100px', right: '-100px', animationDelay: '-5s' }}></div>

            <div className="auth-container" data-aos="fade-up">
                {/* Added dynamic class based on state */}
                <div className={`auth-card ${isFlipped ? 'flipped' : ''}`} id="card">

                    {/* Front of Card */}
                    <div className="card-front">
                        {/* <div className="logo"><i className="fa-solid fa-bolt-lightning"></i> ResumAI</div> */}
                        <h2>Welcome back</h2>
                        <p className="subtitle">Elevate your career with AI.</p>

                        


                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="name@company.com" />
                            <i className="fa-solid fa-envelope"></i>
                        </div>

                        <div className="input-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label>Password</label>
                                <a href="#" className="switch-link" style={{ fontSize: '12px', marginBottom: '8px' }}>Forgot?</a>
                            </div>
                            <input type="password" placeholder="••••••••" />
                            <i className="fa-solid fa-lock"></i>
                        </div>
                        <div className="divider">Or continue with email</div>
                        <div className="social-group">
                            <button className="btn-social"><img src="https://www.google.com/favicon.ico" width="16" alt="google" /> Google</button>
                            <button className="btn-social"><i className="fa-brands fa-github"></i> GitHub</button>
                        </div>

                        <button className="btn-auth">Sign In</button>

                        <div className="switch-text">
                            New here? <span className="switch-link" onClick={toggleCard}>Create account</span>
                        </div>
                    </div>

                    {/* Back of Card */}
                    <div className="card-back">
                        {/* <div className="logo"><i className="fa-solid fa-bolt-lightning"></i> ResumAI</div> */}
                        <h2>Create account</h2>
                        <p className="subtitle">Join the elite 1% of job seekers.</p>

                        <div className="input-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                            <i className="fa-solid fa-user"></i>
                        </div>

                        <div className="input-group">
                            <label>Work Email</label>
                            <input type="email" placeholder="name@company.com" />
                            <i className="fa-solid fa-envelope"></i>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Min. 8 characters" />
                            <i className="fa-solid fa-lock"></i>
                        </div>

                        <button className="btn-auth" style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
                            Get Started
                        </button>

                        <div className="switch-text">
                            Already a member? <span className="switch-link" onClick={toggleCard}>Log in</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
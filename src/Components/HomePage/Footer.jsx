import './Footer.css';

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <span className="footer-logo">ResumAI</span>
          <p className="footer-text">
            Empowering professionals to visualize their career journey through
            cutting-edge design and AI technology.
          </p>

          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

        <div>
          <h4 className="footer-head">Product</h4>
          <ul className="footer-links">
            <li><a href="#">Resume Builder</a></li>
            <li><a href="#">AI Cover Letter</a></li>
            <li><a href="#">Templates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-head">Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-head">Newsletter</h4>
          <div
            style={{
              display: 'flex',
              gap: '5px',
              marginTop: '10px',
            }}
          >
            <input
              type="text"
              placeholder="Email"
              style={{
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                width: '100%',
              }}
            />
            <button
              className="btn btn-primary"
              style={{ padding: '10px 15px' }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; 2026 ResumAI Technologies Inc. All rights reserved.
      </div>
    </footer>
  );
}

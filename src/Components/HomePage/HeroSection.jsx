import './HeroSection.css';
import video from '../../../public/video.mp4';

export function HeroSection() {
  return (
    <>
      <section className="hero">
        <div
          className="hero-text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1>
            Build your 3D <span>Resume</span> with AI.
          </h1>

          <p
            style={{
              fontSize: '18px',
              color: 'var(--gray)',
              marginBottom: '40px',
              lineHeight: 1.6,
            }}
          >
            The first-ever interactive resume builder that turns your experience
            into a visually stunning professional story. Join 1M+ professionals
            landing their dream jobs.
          </p>

          <div className="cta-group">
            <button className="btn btn-primary">
              Create Resume
            </button>
            <button
              className="btn"
              style={{
                background: 'transparent',
                border: '1px solid #ddd',
                marginLeft: '15px',
              }}
            >
              Watch Video
            </button>
          </div>

          <div
            style={{
              marginTop: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <div style={{ display: 'flex' }}>
              <img
                src="https://i.pravatar.cc/40?u=1"
                style={{ borderRadius: '50%', border: '2px solid #fff' }}
                alt=""
              />
              <img
                src="https://i.pravatar.cc/40?u=2"
                style={{
                  borderRadius: '50%',
                  border: '2px solid #fff',
                  marginLeft: '-15px',
                }}
                alt=""
              />
              <img
                src="https://i.pravatar.cc/40?u=3"
                style={{
                  borderRadius: '50%',
                  border: '2px solid #fff',
                  marginLeft: '-15px',
                }}
                alt=""
              />
            </div>

            <span
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--gray)',
              }}
            >
              Trusted by 50,000+ teams
            </span>
          </div>
        </div>

        <div
          className="hero-right"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="video-wrapper">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://via.placeholder.com/800x450/2D5CFE/FFFFFF?text=Kindley+Demo"
            >
              <source
                src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="floating-badge">
            <div
              style={{
                width: '40px',
                height: '40px',
                background: '#4ADE80',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              ✓
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: '14px' }}>
                AI Optimized
              </div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>
                Ready to export
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-header" data-aos="fade-up">
          <h2>
            Next-Gen <span>AI Features</span>
          </h2>
          <p>
            Experience the future of recruitment with our proprietary 3D
            rendering engine.
          </p>
        </div>

        <div className="feature-grid">
          <div
            className="feature-card"
            data-aos="slide-3d-left"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <div className="feature-icon">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3>AI Storytelling</h3>
            <p>
              Our neural engine transforms boring bullet points into a compelling
              career narrative that captures attention instantly.
            </p>
          </div>

          <div
            className="feature-card"
            data-aos="slide-3d-left"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <div className="feature-icon">
              <i className="fa-solid fa-cube"></i>
            </div>
            <h3>3D Viewport</h3>
            <p>
              Let recruiters interact with your portfolio in a fully realized 3D
              space, making your work memorable and tactile.
            </p>
          </div>

          <div
            className="feature-card"
            data-aos="slide-3d-left"
            data-aos-delay="500"
            data-aos-duration="1200"
          >
            <div className="feature-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>ATS Guaranteed</h3>
            <p>
              Despite the high-end visuals, our resumes are 100% readable by
              tracking systems, ensuring you never miss an opening.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

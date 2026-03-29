import React, { useEffect } from "react";
import "./Resume1.css";
// import profileImg from "https://img.freepik.com/free-vector/minimalist-cv-template_23-2148899951.jpg?t=st=1770797041~exp=1770800641~hmac=7227f77e40d934be10d8949dc325d2947cf24f2aa1dc87a11b411d8fa889c995"; 

export const Resume1 = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(".dots");

    containers.forEach((container) => {
      const level = parseInt(container.getAttribute("data-level"));
      container.innerHTML = "";

      for (let i = 1; i <= 5; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i <= level) dot.classList.add("active");
        container.appendChild(dot);
      }
    });
  }, []);

  return (
    <div className="cv-wrapper">
      <div className="cv-container">
        <header>
          <div></div>
          <div className="header-info">
            <h1>
              Michael <br /> Larsson
            </h1>
            <p>Graphic Designer</p>
          </div>
        </header>

        <div className="main-content">
          <aside className="sidebar">
            <div className="profile-arch">
              <img src={profileImg} alt="Profile" />

              <div className="contact-block">
                <div className="contact-item">
                  <b>E-mail</b>
                  yourname@gmail.com
                </div>
                <div className="contact-item">
                  <b>Phone</b>
                  +012 345 678 900
                </div>
                <div className="contact-item">
                  <b>Website</b>
                  www.yourwebsite.com
                </div>
                <div className="contact-item">
                  <b>Address</b>
                  Your address here
                </div>
              </div>
            </div>

            <h2>Achievements</h2>
            <div className="timeline no-border">
              <div className="timeline-item">
                <b>2008</b>
                <span className="section-text">
                  Lorem Ipsum is simply dummy text.
                </span>
              </div>
              <div className="timeline-item">
                <b>2015</b>
                <span className="section-text">
                  Lorem Ipsum is simply dummy text.
                </span>
              </div>
            </div>

            <h2>Skills</h2>
            <div className="skill-row">
              Composition <div className="dots" data-level="4"></div>
            </div>
            <div className="skill-row">
              Think <div className="dots" data-level="5"></div>
            </div>
            <div className="skill-row">
              Illustration <div className="dots" data-level="3"></div>
            </div>
            <div className="skill-row">
              Typography <div className="dots" data-level="4"></div>
            </div>
          </aside>

          <main className="content-body">
            <section>
              <h2>About Me</h2>
              <p className="section-text">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </section>

            <section>
              <h2>Education</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-header">
                    <span className="timeline-date">2007-2010</span>
                    UNIVERSITY NAME
                  </div>
                  <p className="section-text">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Software</h2>
              <p className="section-text">
                Lorem Ipsum is simply dummy text.
              </p>

              <div className="software-grid">
                <div className="circle-box">
                  <div className="circle-ui">82%</div>
                  Photoshop
                </div>
                <div className="circle-box">
                  <div className="circle-ui">65%</div>
                  Illustrator
                </div>
                <div className="circle-box">
                  <div className="circle-ui">42%</div>
                  Figma
                </div>
                <div className="circle-box">
                  <div className="circle-ui">23%</div>
                  XD
                </div>
              </div>
            </section>

            <section className="work-section">
              <h2>Work Experience</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-header">
                    <span className="timeline-date">2011-2016</span>
                    YOUR JOB TITLE
                  </div>
                  <p className="section-text">
                    Lorem Ipsum is simply dummy text.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>

        <footer></footer>
      </div>
    </div>
  );
};



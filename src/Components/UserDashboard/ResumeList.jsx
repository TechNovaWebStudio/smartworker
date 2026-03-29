import React from 'react';
import './ResumeList.css';
import { resumeTemplates } from '../../data/Template';
import { useNavigate } from "react-router-dom";


export function ResumeList() {
    const navigate = useNavigate();
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num;
    };

    return (
        <div className="resume-container">
            <div className="interface-wrapper">
                <div className="top-row">
                    <div>
                        <h1>Pick the Website Template You Love</h1>
                        <p>Discover beautiful, modern portfolio website templates that combine sleek design and functionality, perfect for showcasing your work and sparking inspiration</p>

                    </div>
                    <div className="filter-row">
                        <div className="filter-chip active" >
                            <span className="material-symbols-outlined icon">grid_view</span>
                            All Images
                            <span className="material-symbols-outlined arrow">
                                expand_more
                            </span>
                        </div>

                        <div className="filter-chip">
                            <span className="material-symbols-outlined icon">gavel</span>
                            License
                            <span className="material-symbols-outlined arrow">
                                expand_more
                            </span>
                        </div>

                        <div className="filter-chip">
                            <span className="material-symbols-outlined icon">
                                auto_awesome
                            </span>
                            AI-generated
                            <span className="material-symbols-outlined arrow">
                                expand_more
                            </span>
                        </div>

                        <div className="filter-chip">
                            <span className="material-symbols-outlined icon">
                                aspect_ratio
                            </span>
                            Orientation
                            <span className="material-symbols-outlined arrow">
                                expand_more
                            </span>
                        </div>

                        <div className="filter-chip">
                            <span className="material-symbols-outlined icon">palette</span>
                            Color
                            <span className="material-symbols-outlined arrow">
                                expand_more
                            </span>
                        </div>

                        <div className="filter-chip">
                            <span className="material-symbols-outlined icon">person</span>
                            People
                            <span className="material-symbols-outlined arrow">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}

                {/* RESUME GRID */}
                <div className="resume-grid">

                    {resumeTemplates.map((resume) =>
                        <div className="resume-card" data-type="free">
                            <div className="preview-box">
                                {/* <div className="status-pill free-pill">FREE</div> */}
                                <img
                                    src={resume.previewImage}
                                    alt="Template"
                                />
                                <div className="overlay">
                                    <button className="overlay-btn edit-btn" 
                                    onClick={()=>navigate(`/templateView?id=${resume.id}`)}
                                    >View Details</button>
                                    <button className="overlay-btn preview-btn">Quick Preview</button>

                                    <div className="icon-bar">
                                        <i className="fa-regular fa-heart"></i>
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-ellipsis-h"></i>
                                    </div>
                                </div>

                            </div>

                            <div className="card-content">
                                <div className="card-footer">
                                    <span className="category-label">{resume.category}</span>
                                    <span className={`badge ${resume.type === "free" ? "badge-free" : "badge-paid"}`}>
                                        {resume.type}
                                    </span>

                                </div>
                                <h3 className="card-title">{resume.title} </h3>
                                <div className="card-stats">
                                    <div className="stats-left">
                                        <div
                                            style={{
                                                marginTop: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '5px',
                                                maxWidth: 'auto'
                                            }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                {resume.stats.users.map((user, index) => (
                                                    <img
                                                        key={user.id}
                                                        src={user.avatar}
                                                        alt=""
                                                        style={{
                                                            width: '25px',
                                                            height: '25px',
                                                            borderRadius: '50%',
                                                            border: '2px solid #fff',
                                                            marginLeft: index !== 0 ? '-15px' : '0px',
                                                        }}
                                                    />
                                                ))}
                                            </div>


                                            <span
                                                style={{
                                                    fontSize: '14px',
                                                    fontWeight: 400,
                                                    color: 'var(--gray)',
                                                }}
                                            >
                                                {formatNumber(resume.stats.usersCount)}
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-heart"></i>  {formatNumber(resume.stats.likes)}
                                            </span>
                                        </div>

                                    </div>
                                    <div className="file-info">
                                        <i className="fa-solid fa-file-pdf pdf-icon"></i> {resume.fileType}
                                    </div>



                                </div>
                                <br />

                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

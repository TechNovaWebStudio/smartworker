import './DraftProject.css'
export function DraftProject() {
    return (
        <div className="draft-project">
            <div className="section-label">
                <h3>My Resumes</h3>
                <button
                    style={{
                        background: '#EEF2FF',
                        color: '#2D5CFE',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontWeight: 500,
                        fontSize: '12px',
                        cursor: 'pointer'
                    }}>
                    Seen All
                </button>
            </div>

            <div className="tab-row">
                <div className="tab-item active">Draft (4)</div>
                <div className="tab-item">Completed (2)</div>
            </div>

            <div className="grid-layout">
                <div className="card">
                    <div className="resume-preview" style={{ background: 'white' }}>
                        <div className="yellow-accent-blob"></div>
                        <div style={{ position: 'relative', fontWeight: 500, fontSize: '14px' }}>
                            Rudian<br />Santoso
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className="res-title">CV Rudian Santoso</span>
                        <span className="res-meta">Updated: 2 days ago</span>
                    </div>
                </div>

                <div className="card">
                    <div className="resume-preview" style={{ background: 'white' }}>
                        <div style={{ width: '24px', height: '24px', background: '#FACC15', marginBottom: '12px' }}></div>
                        <div style={{ height: '12px', background: '#0F172A', width: '60%' }}></div>
                    </div>
                    <div className="card-footer">
                        <span className="res-title">Untitled Resume 2</span>
                        <span className="res-meta">Updated: 2 days ago</span>
                    </div>
                </div>
            </div>

            <div className="section-label">
                <h3>My Portfolio Website</h3>
                <button style={{
                    background: '#EEF2FF',
                    color: '#2D5CFE',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontWeight: 500,
                    fontSize: '12px',
                    cursor: 'pointer'
                }}>
                    Seen All
                </button>
            </div>

            <div className="tab-row">
                <div className="tab-item active">Drafts (4)</div>
                <div className="tab-item">Completed (2)</div>
                <div className="tab-item">Archived</div>
            </div>

            <div className="bento-grid">
                <div className="bento-card">
                    <div className="preview-box" style={{ background: 'white', border: '1px solid #E2E8F0' }}>
                        <div className="yellow-blob"></div>
                        <i className="ph ph-file-pdf" style={{ fontSize: '40px', color: '#2D5CFE', zIndex: 1 }}></i>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ fontWeight: 500 }}>Senior UX Designer</p>
                            <p style={{ fontSize: '12px', color: '#64748B' }}>Edited 2 hours ago</p>
                        </div>
                        <span className="status-badge status-active">Live</span>
                    </div>
                </div>

                <div className="bento-card">
                    <div className="preview-box">
                        <i className="ph ph-file-text" style={{ fontSize: '40px', color: '#CBD5E1' }}></i>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ fontWeight: 500 }}>Product Manager</p>
                            <p style={{ fontSize: '12px', color: '#64748B' }}>Edited 3 days ago</p>
                        </div>
                        <span className="status-badge status-draft">Draft</span>
                    </div>
                </div>

                <div className="bento-card">
                    <div className="preview-box">
                        <div style={{ width: '40px', height: '6px', background: 'var(--brand-yellow)', position: 'absolute', top: '20px', left: '20px' }}></div>
                        <i className="ph ph-briefcase" style={{ fontSize: '40px', color: '#CBD5E1' }}></i>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ fontWeight: 500 }}>Marketing Lead</p>
                            <p style={{ fontSize: '12px', color: '#64748B' }}>Edited 1 week ago</p>
                        </div>
                        <span className="status-badge status-draft">Draft</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
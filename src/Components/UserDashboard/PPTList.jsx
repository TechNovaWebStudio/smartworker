import './PPTList.css'

export function PPTList() {
    return (
        <div className="ppt-list">
            <div className="template-grid" id="templateGrid">

                <div className="card" data-cat="Strategy" data-name="Mission and Vision">
                    <div className="card-preview">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                            alt="Template"
                            className="card-img"
                        />
                        <div className="overlay">
                            <button className="overlay-btn edit-btn">Edit Template</button>
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
                            <span className="category-label">Business</span>
                            <span className={`badge badge-free`}>
                                {/* {item.type} */}
                                Free
                            </span>
                        </div>
                        <h3 className="card-title">Mission and Vision PowerPoint </h3>
                        <div className="card-stats">
                            <div className="stats-left">
                                <div
                                        style={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            maxWidth:'auto'
                                        }}
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <img
                                                src="https://i.pravatar.cc/40?u=1"
                                                style={{ width:'25px',
                                                    height:'25px', borderRadius: '50%', border: '2px solid #fff' }}
                                                alt=""
                                            />
                                            <img
                                                src="https://i.pravatar.cc/40?u=2"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                    borderRadius: '50%',
                                                    border: '2px solid #fff',
                                                    marginLeft: '-15px',
                                                }}
                                                alt=""
                                            />
                                            <img
                                                src="https://i.pravatar.cc/40?u=3"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
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
                                            2.2k
                                        </span>
                                        <span>
                                        <i className="fa-solid fa-heart"></i> 2.2k
                                    </span>
                                    </div>
                            </div>
                            <div className="file-info">
                                <i className="fa-solid fa-file-powerpoint ppt-icon"></i> PowerPoint
                            </div>

                        </div>
                        <br />
                        {/* <div className="card-footer">
                            
                            <i className="fa-solid fa-circle-arrow-down download-icon"></i>
                        </div> */}
                    </div>
                </div>

                <div className="card" data-cat="Diagrams" data-name="Spherical 4 Stages">
                    <div className="card-preview">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                            alt="Template"
                            className="card-img"
                        />
                        <div className="overlay">
                            <button className="overlay-btn edit-btn">Edit Template</button>
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
                            <span className="category-label">Business</span>
                            <span className={`badge badge-free`}>
                                {/* {item.type} */}
                                Free
                            </span>
                        </div>
                        <h3 className="card-title">Spherical 4 Stages Diagram Template</h3>
                        <div className="card-stats">
                            <div className="stats-left">
                                <div
                                        style={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            maxWidth:'auto'
                                        }}
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <img
                                                src="https://i.pravatar.cc/40?u=1"
                                                style={{ width:'25px',
                                                    height:'25px', borderRadius: '50%', border: '2px solid #fff' }}
                                                alt=""
                                            />
                                            <img
                                                src="https://i.pravatar.cc/40?u=2"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                    borderRadius: '50%',
                                                    border: '2px solid #fff',
                                                    marginLeft: '-15px',
                                                }}
                                                alt=""
                                            />
                                            <img
                                                src="https://i.pravatar.cc/40?u=3"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
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
                                            2.2k
                                        </span>
                                        <span>
                                        <i className="fa-solid fa-heart"></i> 2.2k
                                    </span>
                                    </div>
                            </div>
                            <div className="file-info">
                                <i className="fa-solid fa-file-powerpoint ppt-icon"></i> PowerPoint
                            </div>

                        </div>
                        <br />

                        {/* <div className="card-footer">
                            
                            <i className="fa-solid fa-circle-arrow-down download-icon"></i>
                        </div> */}
                    </div>
                </div>

                <div className="card" data-cat="Business" data-name="Company Profile">
                    <div className="card-preview">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
                            alt="Template"
                            className="card-img"
                        />
                        <div className="overlay">
                            <button className="overlay-btn edit-btn">Edit Template</button>
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
                            <span className="category-label">Business</span>
                            <span className={`badge badge-free`}>
                                {/* {item.type} */}
                                Free
                            </span>
                        </div>
                        <h3 className="card-title">Professional Company Profile Deck</h3>
                        <div className="card-stats">
                            <div className="stats-left">
                                <div
                                        style={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            maxWidth:'auto'
                                        }}
                                    >
                                        <div style={{ display: 'flex' }}>
                                            <img
                                                src="https://i.pravatar.cc/40?u=1"
                                                style={{ width:'25px',
                                                    height:'25px', borderRadius: '50%', border: '2px solid #fff' }}
                                                alt=""
                                            />
                                            <img
                                                src="https://i.pravatar.cc/40?u=2"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                    borderRadius: '50%',
                                                    border: '2px solid #fff',
                                                    marginLeft: '-15px',
                                                }}
                                                alt=""
                                            />
                                            <img
                                                src="https://i.pravatar.cc/40?u=3"
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
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
                                            2.2k
                                        </span>
                                        <span>
                                        <i className="fa-solid fa-heart"></i> 2.2k
                                    </span>
                                    </div>
                            </div>

                            <div className="file-info">
                                <i className="fa-solid fa-file-powerpoint ppt-icon"></i> PowerPoint
                            </div>
                        </div>
                        <br />

                        {/* <div className="card-footer">
                            <div className="file-info">
                                <i className="fa-solid fa-file-powerpoint ppt-icon"></i> PowerPoint
                            </div>
                            <i className="fa-solid fa-circle-arrow-down download-icon"></i>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

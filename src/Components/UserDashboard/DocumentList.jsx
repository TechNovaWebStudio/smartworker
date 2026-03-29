import './DocumentList.css'

const templates = [
    {
        id: 1,
        title: "Modern Reading List",
        users: "2.4k",
        likes: "1.1k",
        type: "Free",
        img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Business Strategy",
        users: "12k",
        likes: "9.5k",
        type: "Paid",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Student Subject Journal",
        users: "5.1k",
        likes: "3.2k",
        type: "Free",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Quarterly KPI Report",
        users: "8.9k",
        likes: "7.0k",
        type: "Paid",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        title: "Event Proposal 2024",
        users: "1.2k",
        likes: "600",
        type: "Free",
        img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 6,
        title: "Digital Marketing Plan",
        users: "15k",
        likes: "13.2k",
        type: "Paid",
        img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=600"
    }
]

export const DocumentList = () => {
    return (
        <div className="document-list">


            {/* <div className="wrapper"> */}
            <div className="grid">
                {templates.map(item => (
                    <div className="card" key={item.id}>
                        <div className="card-img-container">
                            <img src={item.img} alt={item.title} />
                            {/* <div class="images-col">
                                <img src={item.img} alt={item.title} />
                                <img src={item.img} alt="${item.title}" />
                                <img src={item.img} alt="${item.title}" />
                                <img src={item.img} alt="${item.title}" />

                            </div> */}

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

                        <div className="card-footer">
                            <span className="card-title">{item.title}</span>

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
                                        <div style={{ display: 'flex' }}>
                                            <img
                                                src="https://i.pravatar.cc/40?u=1"
                                                style={{
                                                    width: '25px',
                                                    height: '25px', borderRadius: '50%', border: '2px solid #fff'
                                                }}
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
                                        <i className="fa-solid fa-file-lines doc-icon"></i> Document
                                    </div>

                                {/* <span className={`badge badge-${item.type.toLowerCase()}`}>
                                    {item.type}
                                </span> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // </div>
    )
}

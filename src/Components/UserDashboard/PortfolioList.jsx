import { useState } from "react";
import "./PortfolioList.css";

export function PortfolioList() {
    const filters = ["Creative", "Web design", "Minimal", "Agency", "Design", "Modern"];
    const [activeFilter, setActiveFilter] = useState("Creative");

    const cards = [
        {
            title: "UX Case Study Template...",
            author: "Kailash Sa...",
            stats: "❤ 3.7k  👤 140k",
            users: "15k",
            likes: "13.2k",
            type: "Paid",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkOImmpYvsTZZzfDlQpk3z9xr5RGiRnvnjw&s"
        },
        {
            title: "Portfolio Design",
            author: "Ibrahim Memon",
            users: "15k",
            likes: "13.2k",
            type: "Paid",
            image: "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/447dee40e57ab139592d58c4a61cf9b28297bb9c0b945568da9f7122e1e6fe861623238414909.jpg"
        },
        {
            title: "Portfolio template - Edit thi...",
            author: "Anima",
            users: "15k",
            likes: "13.2k",
            type: "Paid",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKZ-nDnVCePBbX23wuc5wt-v_4rAWfoPi4Q&s"
        },
        // {
        //   title: "Portfolio - Product Designe...",
        //   author: "Jayesh Patil",
        //   stats: "❤ 1.8k  👤 78.6k",
        //   image: "https://via.placeholder.com/400x225/f5a623/fff?text=Product+Designer"
        // }
    ];

    return (
        <div className="portfolio-page">


            <main className="portfolio-grid">
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img src={card.image} alt={card.title} className="thumbnail" />
                        <div className="card-info">
                            <div>
                                <h3 className="card-title">{card.title}</h3>
                                <span className={`badge badge-${card.type.toLowerCase()}`}>
                                    {card.type}
                                </span>
                            </div>
                            <div className="card-meta">
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
                                        <i className="fa-solid fa-globe web-icon"></i> Web
                                    </div>

                                </div>
                            </div>
                        </div>
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
                ))}
            </main>
        </div>
    );
}

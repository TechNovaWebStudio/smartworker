import { useEffect, useState } from 'react'
import { FullNavbar } from '../Components/TemplateView/FullNavabar'
import { resumeTemplates } from '../data/Template'
import './TemplateView.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export function TemplateView() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const templateId = Number(params.get("id"));

    const [templateData, setTemplateData] = useState(null);
    const [categoryMatched, setCategoryMatched] = useState([]);
    console.log(categoryMatched)
    useEffect(() => {
        if (templateId) {

            const data = resumeTemplates.find((t) => t.id === templateId);
            setTemplateData(data);

            if (data) {

                const Cdata = resumeTemplates.filter((t) => t.category === data.category);
                setCategoryMatched(Cdata);
            }
        }
    }, [templateId, resumeTemplates]);

    if (!templateData) return <div>Loading template...</div>;
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
        <div className="template-view">
            <FullNavbar />
            <div class="content-panel">



                {/* <h1>Minimalist Case Study<br />Experience.</h1> */}
                <h1>{templateData.title}</h1>

                <div class="stats-pill">
                    <span><b>{formatNumber(templateData.stats.likes)}</b> Likes</span>
                    <span><b>{formatNumber(templateData.stats.usersCount)}</b> Uses</span>

                </div>
                <div class="author-tag">


                    <div class="avatar-group">
                        {templateData.stats.comments.map((comment) =>
                            <img src={comment.user.avatar} alt="User" />)}
                    </div>
                    <div>
                        Comment by <br /> <b style={{ fontWeight: 100, fontSize: '13px', color: 'gray' }}>
                            Arshad & Kailash</b>
                    </div>

                </div>
                <button class="btn-main" id="figmaBtn"
                    onClick={() => navigate(`/CvEdite?id=${templateData.id}`)}
                >
                    <div class="spinner"></div>
                    <span id="btnText">Open in Editor</span>
                </button>

                <h2 class="section-title">More like this</h2>
                <div class="template-grid">
                    {categoryMatched.map(() =>
                        <div class="temp-card">
                            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400" />
                            <div class="temp-info">Mobile App Kit</div>
                        </div>
                    )}
                    {/* <div class="temp-card">
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400" />
                        <div class="temp-info">Mobile App Kit</div>
                    </div>
                    <div class="temp-card">
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=400" />
                        <div class="temp-info">Mobile App Kit</div>
                    </div>
                    <div class="temp-card">
                        <img src="https://images.unsplash.com/photo-1547027072-332f09bd6bb3?w=400" />
                        <div class="temp-info">Dashboard UI V2</div>
                    </div> */}
                </div>

                <h2 class="section-title">Total Comments ({templateData.stats.commentsCount})</h2>
                <div class="comment-input-area">
                    <input type="text" placeholder="Add a comment..." id="commentInput" />
                    <button onclick="addComment()">Post</button>
                </div>

                <div class="comment-list" id="commentList">
                    {templateData.stats.comments.map((comment) =>
                        <div class="comment-item">
                            <div class="c-avatar">
                                <img src={comment.user.avatar} alt="" />
                            </div>
                            <div class="c-body">
                                <b>{comment.user.name}</b>
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    )}
                    {/* <div class="comment-item">
                        <div class="c-avatar"  ></div>
                        <div class="c-body">
                            <b>Sarah Jenkins</b>
                            <p>This template saved me hours of work on my portfolio. Thank you!</p>
                        </div>
                    </div>
                    <div class="comment-item">
                        <div class="c-avatar"></div>
                        <div class="c-body">
                            <b>Alex Rivera</b>
                            <p>The layout is super clean. Looking forward to more updates.</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <div class="gallery-panel">
                <div class="main-stage">
                    <img id="view"
                        src={templateData.previewImage}
                        alt="Main" />
                </div>


                {/* <div class="thumb-rail">
                    <div class="thumb-item active"
                        onclick="update(this, 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200')">
                        <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200" />
                    </div>
                    <div class="thumb-item"
                        onclick="update(this, 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&w=1200')">
                        <img src="https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?w=200" />
                    </div>
                    <div class="thumb-item"
                        onclick="update(this, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200')">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200" />
                    </div>
                </div> */}

            </div>
        </div>

    )
}
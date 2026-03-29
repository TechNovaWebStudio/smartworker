import './Dashboard.css'

export function Dashboard() {
    return (
        // <div className="dashboard">
            <main className="dashboard">
                <section className="hero-panel">
                    {/* Fixed zIndex and converted style to object */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h1>Welcome back, Sarah! 👋</h1>
                        <p>Your resume is looking great, but you can increase your reach by 40% with our AI optimization tool.</p>
                        <button className="btn-white">Optimize Now</button>
                    </div>
                    <div
                        style={{ 
                            position: 'absolute', 
                            right: '-50px', 
                            top: '-50px', 
                            width: '250px', 
                            height: '250px', 
                            background: 'rgba(255,255,255,0.1)', 
                            borderRadius: '50%' 
                        }}>
                    </div>
                </section>

                
            </main>
        // </div>
    )
}
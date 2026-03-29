import './UserDashboard.css'
import { UserNavbar } from '../Components/UserDashboard/UserNavbar'
import { UserSideBar } from '../Components/UserDashboard/UserSideBar'
import { Dashboard } from '../Components/UserDashboard/Dashboard'
import { useState } from 'react';
import { ResumeList } from '../Components/UserDashboard/ResumeList';
import { PortfolioList } from '../Components/UserDashboard/PortfolioList';
import { PPTList } from '../Components/UserDashboard/PPTList';
import { DocumentList } from '../Components/UserDashboard/DocumentList';
import { DraftProject } from '../Components/UserDashboard/DraftProject';
import { AIFeatuars } from '../Components/UserDashboard/AIFeatuars';

export function UserDashboard() {
    const [toolbar, setTab] = useState('Dashboard');
    // State to handle sidebar visibility on mobile
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="user-dashboard">
            {/* Pass state to Navbar to trigger the menu toggle */}
            <UserNavbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
            
            {/* Sidebar needs a conditional class for mobile visibility */}
            <UserSideBar 
                toolbar={toolbar} 
                setTab={(tab) => { setTab(tab); setSidebarOpen(false); }} 
                isOpen={isSidebarOpen} 
            />
            
            <div className={`rigth-wrapper ${isSidebarOpen ? 'shifted' : ''}`}>
                {toolbar === 'Dashboard' && <Dashboard />}
                {toolbar === 'ResumesList' && <ResumeList />}
                {toolbar === 'PortfolioList' && <PortfolioList />}
                {toolbar === 'PPTList' && <PPTList />}
                {toolbar === 'DocumentList' && <DocumentList />}
                {toolbar === 'DraftProject' && <DraftProject />}
                {toolbar === 'AIFeatuars' && <AIFeatuars />}
            </div>
        </div>
    )
}
import './CVEdit.css';
import { FullNavbar } from '../Components/TemplateView/FullNavabar';
import { useEffect, useState } from 'react';
import { Resume1 } from '../ResumeTemplates/Resume1';


export function CVEdit() {
    const [inputsRow, setInputsRow] = useState('');
    const [resumeHtml, setResumeHtml] = useState('');
    const data = "Muhammed Shibil";
    // Dynamic data object
    const [personalInfo, setPersonalInfo] = useState({
        photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Muhammed Shibil',
        email: 'shibil@example.com',
        phone: '+1 (970) 333-3833',
        website: 'https://www.coolfreecv.com'
    });

    const [skills, setSkills] = useState([
        { name: 'Adobe Photoshop', level: '95%' },
        { name: 'Adobe InDesign', level: '85%' },
        { name: 'Adobe Illustrator', level: '80%' },
        { name: 'HTML/CSS', level: '90%' },
    ]);

    const [experience, setExperience] = useState([
        {
            title: 'GRAPHIC WEB DESIGNER',
            duration: '05/2013 to 05/2019',
            company: 'LUNA, LOS ANGELES',
            details: [
                'Design & develop online brand creative pieces including landing pages, banners and emails.',
                'Create comps for new and updated web pages for social and ecommerce partners.',
                'Create and code display banner ads for partner websites.',
                'Stay abreast of industry-wide changes in design philosophy and any new tools/technologies.'
            ]
        }
    ]);

    const [education, setEducation] = useState([
        {
            school: 'CALIFORNIA STATE UNIVERSITY',
            city: 'LOS ANGELES',
            degree: "Bachelor's Degree in Graphic Design"
        }
    ]);

    const [summary, setSummary] = useState(
        "I am a passionate Web and Graphic Designer with 7+ years of experience. My specialty includes Adobe Photoshop, Illustrator, Branding, and creating responsive websites using CSS, HTML, jQuery, Bootstrap, and WordPress."
    );



    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const blurbUrl = URL.createObjectURL(file);
            console.log(blurbUrl)

            setPersonalInfo({
                ...personalInfo,
                photo: blurbUrl,

            });
        }
    };


    return (
        <div className="cv-edit">
            <FullNavbar buttons={'Download&Share'} center={true} />

            <div className="container">
                {/* LEFT SIDEBAR */}
                <aside className="sidebar-left">
                    <div className="accordion-item">
                        Personal Information
                        {inputsRow === 'Personal Information' ?
                            <i className="fa-solid fa-minus" onClick={() => setInputsRow('')}></i> :
                            <i className="fa-solid fa-plus" onClick={() => setInputsRow('Personal Information')}></i>
                        }
                    </div>
                    {inputsRow === 'Personal Information' && (
                        <div className="form-content">
                            <div className='photo-container'>
                                <div class="add-photo">
                                    <img src={personalInfo.photo} alt="Christine Smith" />
                                    <div className="overlay">
                                        <i class="fa-solid fa-user-plus camera-icon" onClick={() => document.getElementById("photoInput").click()}></i>
                                        <input
                                            type="file"
                                            id="photoInput"
                                            style={{ display: "none" }}
                                            accept="image/*"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                            </div>
                            <input className="input-box" placeholder="Full Name"
                                value={personalInfo.name}
                                onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })} />
                            <input className="input-box" placeholder="Email ID"
                                value={personalInfo.email}
                                onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                            />
                            <input className="input-box" placeholder="Phone Number"
                                value={personalInfo.phone}
                                onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                            />
                            <input className="input-box" placeholder="Address"
                                value={personalInfo.website}
                                onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
                            />

                            <div className="add-more">+ Add One More</div>
                        </div>
                    )}

                    <div className="accordion-item">
                        Professional Summary
                        {inputsRow === 'Professional Summary' ?
                            <i className="fa-solid fa-minus" onClick={() => setInputsRow('')}></i> :
                            <i className="fa-solid fa-plus" onClick={() => setInputsRow('Professional Summary')}></i>
                        }
                    </div>
                    {inputsRow === 'Professional Summary' && (
                        <div className="form-content">
                            <textarea placeholder='Add Summary'
                                value={summary}
                                onChange={(e) => setSummary(e.target.value)}
                            ></textarea >
                            <div className="add-more">+ Add One More</div>
                        </div>
                    )}

                    <div className="accordion-item">
                        Employment History
                        {inputsRow === 'Employment History' ?
                            <i className="fa-solid fa-minus" onClick={() => setInputsRow('')}></i> :
                            <i className="fa-solid fa-plus" onClick={() => setInputsRow('Employment History')}></i>
                        }
                    </div>
                    {inputsRow === 'Employment History' && (
                        <div className="form-content">
                            <input className="input-box" placeholder="Job title" />
                            <input className="input-box" placeholder="Employer" />
                            <div className="row">
                                <input className="input-box" placeholder="MM / YYYY" />
                                <input className="input-box" placeholder="MM / YYYY" />
                            </div>
                            <input className="input-box" placeholder="City" />
                            <div className="add-more">+ Add One More</div>
                        </div>
                    )}

                    <div className="accordion-item">
                        Education
                        {inputsRow === 'Education' ?
                            <i className="fa-solid fa-minus" onClick={() => setInputsRow('')}></i> :
                            <i className="fa-solid fa-plus" onClick={() => setInputsRow('Education')}></i>
                        }
                    </div>
                    {inputsRow === 'Education' && (
                        <div className="form-content">
                            <input className="input-box" placeholder="School / College" />
                            <input className="input-box" placeholder="Course" />
                            <div className="row">
                                <input className="input-box" placeholder="MM / YYYY" />
                                <input className="input-box" placeholder="MM / YYYY" />
                            </div>
                            <input className="input-box" placeholder="City" />
                            <textarea placeholder='Add Summary'></textarea>
                            <div className="add-more">+ Add One More</div>
                        </div>
                    )}

                    <div className="accordion-item">
                        Skills <i className="fa-solid fa-plus"></i>
                    </div>
                </aside>

                {/* CANVAS */}
                <div className="resume-iframe">
                    <main className="canvas">
                        <Resume1
                            name={personalInfo.name}
                            email={personalInfo.email}
                            summary={summary}
                            photo={personalInfo.photo}
                        />
                    </main>

                    <div className="floating-actions">
                        <button className="float-btn"><i className="fa-solid fa-plus"></i></button>
                        <button className="float-btn"><i className="fa-solid fa-copy"></i></button>
                        <button className="float-btn"><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="sidebar-right">
                    <span className="tool-label">Align</span>
                    <div className="align-group">
                        <i className="fa-solid fa-align-left"></i>
                        <i className="fa-solid fa-align-center"></i>
                        <i className="fa-solid fa-align-right"></i>
                        <i className="fa-solid fa-align-justify active"></i>
                        <i className="fa-solid fa-indent"></i>
                    </div>

                    <span className="tool-label">Edit Text</span>
                    <div className="hint-box">Double click to edit</div>

                    <span className="tool-label">Text</span>
                    <div className="input-box dropdown">
                        Helix <i className="fa-solid fa-chevron-down"></i>
                    </div>

                    <div className="row">
                        <div className="input-box">SemiBold</div>
                        <div className="input-box">14px</div>
                    </div>

                    <div className="color-preview">
                        <div className="color-swatch"></div>
                        <span>#244CEC</span>
                        <i className="fa-solid fa-sun"></i>
                    </div>
                </aside>
            </div>
        </div>
    );
}

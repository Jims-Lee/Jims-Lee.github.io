import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import profile from '../markdown/profile.md';
import experience from '../markdown/experience.md';
import education from '../markdown/education.md';

const CVDisplay = () => {
    const [profileContent, setProfileContent] = useState('');
    const [experienceContent, setExperienceContent] = useState('');
    const [educationContent, setEducationContent] = useState('');

    useEffect(() => {
        fetch(profile)
            .then(response => response.text())
            .then(text => setProfileContent(text));

        fetch(experience)
            .then(response => response.text())
            .then(text => setExperienceContent(text));

        fetch(education)
            .then(response => response.text())
            .then(text => setEducationContent(text));
    }, []);

    return (
        <div className="cv-display">
            <h1>Curriculum Vitae</h1>
            <section className="profile">
                <h2>Profile</h2>
                <ReactMarkdown>{profileContent}</ReactMarkdown>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <ReactMarkdown>{experienceContent}</ReactMarkdown>
            </section>
            <section className="education">
                <h2>Education</h2>
                <ReactMarkdown>{educationContent}</ReactMarkdown>
            </section>
        </div>
    );
};

export default CVDisplay;
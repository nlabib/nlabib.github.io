import React from 'react';

function MainContent() {
    return (
        <div className="main-content">

            <section id="summary">
                <h2>Summary</h2>
                <p>Aspiring Software Engineer currently pursuing a bachelor’s degree, seeking opportunities to leverage and further develop technical skills in a dynamic environment. Committed to delivering high-quality software solutions and contributing to team success.</p>
            </section>

            <section id="education">
                <h2>Education</h2>
                <p>Kennesaw State University, Marietta, GA</p>
                <p>August 2021 – Expected Graduation: May 2024</p>
                <ul>
                    <li>Bachelor of Science in Software Engineering</li>
                    <li>Dean's List Fall 2021, Spring 2021, Fall 2022</li>
                    <li>3.65 GPA</li>
                </ul>
            </section>

            <section id="experience">
                <h2>Experience</h2>
                <h3>DPO Technologies, Software Engineering Intern</h3>
                <p>June 2023 – Present</p>
                <ul>
                    <li>Spearheaded the development of pixel-perfect UIs using Next.js and React, resulting in enhanced user experience.</li>
                    <li>Optimized native build processes and streamlined bug diagnosis, bolstering application robustness.</li>
                    <li>Championed the implementation of advanced testing procedures, ensuring top-tier software quality.</li>
                    <li>Played a pivotal role in full-stack development, integrating front-end (React) and back-end (Node.js, MySQL) components seamlessly.</li>
                    <li>Collaborated effectively with cross-functional teams, ensuring timely delivery of high-caliber software products.</li>
                </ul>
            </section>

            {/* Continue adding other sections similarly, like Projects, using the format above */}

        </div>
    )
}

export default MainContent;

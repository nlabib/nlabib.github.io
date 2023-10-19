import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <button onClick={() => window.scrollTo(0,0)}>Summary</button>
            <button onClick={() => window.scrollTo(0,document.getElementById('education').offsetTop)}>Education</button>
            <button onClick={() => window.scrollTo(0,document.getElementById('experience').offsetTop)}>Experience</button>
            <button onClick={() => window.scrollTo(0,document.getElementById('projects').offsetTop)}>Projects</button>
        </div>
    )
}

export default Navbar;

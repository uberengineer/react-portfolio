import React from 'react';
import './sidebar.scss';

export const Sidebar = () => {
    return (
        <nav id="sidebar">
            <ul>
                <a href="#splash">
                    <li>Splash</li>
                </a>
                <a href="#about">
                    <li>About</li>
                </a>
                <a href="#project">
                    <li>Projects</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    );
};

import React from 'react';
import { Sidebar } from './components/sidebar/Sidebar';
import { Splash } from './components/splash/Splash';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import './App.scss';

function App() {
    return (
        <>
            <Sidebar />
            <Splash />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

function Home() {
    return(
        <>
        <Header />
        <Footer />
        </>
    )
}

export default Home
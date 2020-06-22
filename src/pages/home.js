import React, { Fragment } from 'react'

import '../sass/main.scss';

import GridTest from '../components/grid-test';

import Header from '../components/header';
import AboutSection from '../components/about_section';
import FeaturesSection from '../components/features_section';
import ToursSection from '../components/tours_section';
import StoriesSection from '../components/stories_section';
import BookingSection from '../components/booking_section';
import Footer from '../components/footer';
import Navigation from '../components/navigation';
import Popup from '../components/popup';

const Home = () => {
    return (
        <Fragment>
            <Navigation />
            <Header />
            <AboutSection />
            <FeaturesSection />
            <ToursSection />
            <StoriesSection />
            <BookingSection />
            <Footer />
            <Popup />
            {/* <GridTest /> */}
        </Fragment>
    )
}

export default Home;

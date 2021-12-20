import React from 'react';
import web from '../src/images/hero-img.png';
import Common from './Common';


const About = () => {
    return (
        <>
            <Common
                name='Welcome to About page of'
                imgsrc={web}
                visit='/contact'
                btnname='Contact Now'
            />
        </>
    );
}
export default About;
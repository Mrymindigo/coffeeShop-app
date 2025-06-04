
import './AboutSection.css';
import ReadMoreBtn from '../readMoreBtn/ReadMoreBtn'

import React from 'react'

export default function AboutSection() {
    return (
        <div className='aboutSectionContainer'>
            <div className="AboutDescription">
                <h1>Coffee distribution '</h1>
                <p>has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English.
                    Many desktop publishing packages and web page editorhas a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here',
                    making it look like readable English.
                    Many desktop publishing packages and web page editor</p>
                <ReadMoreBtn />
            </div>
            <div className="aboutUSImgContainer">
                <img className='aboutUsUImg' src="about-img.png" alt="about us image" />
            </div>
            


        </div>
    )
}

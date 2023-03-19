import React from 'react'
import mobileClasses from './../styles/about/mobileAbout.module.css'
import wideClasses from './../styles/about/wideAbout.module.css'
import won from './../assets/wonnHA.jpg'

export default function AboutMe () {
    return (
        <div  className={`${mobileClasses.aboutContainer} ${wideClasses.aboutContainer}`}>
            <div className={`${mobileClasses.aboutMe} ${wideClasses.aboutMe}`}>
                <p className={`${mobileClasses.aboutTitle} ${wideClasses.aboutTitle}`}>About Me</p>
                <div className={`${mobileClasses.underline} ${wideClasses.underline}`}/>
                <p className={`${mobileClasses.about} ${wideClasses.about}`}>I am a software engineer who loves anything relating to creating 
                    <span className={mobileClasses.aboutEmp}> amazing mobile and web applications.</span> 
                </p>
                <p className={`${mobileClasses.about} ${wideClasses.about}`}>Aside programming, I love to
                    <span className={mobileClasses.aboutEmp}> game, go on adventures and listening to music.</span> 
                </p>
                <p className={`${mobileClasses.about} ${wideClasses.about}`}>I am a software engineer who loves anything relating to creating 
                    <span className={mobileClasses.aboutEmp}> amazing mobile and web applications.</span> 
                </p>
                <p className={`${mobileClasses.about} ${wideClasses.about}`}>Aside programming, I love to
                    <span className={mobileClasses.aboutEmp}> game, go on adventures and listening to music.</span> 
                </p>
            </div>
            <div className={`${mobileClasses.aboutImages} ${wideClasses.aboutImages}`}>
                <div className={`${mobileClasses.imageDiv} ${wideClasses.imageDiv}`}>
                    <img src={won} className={mobileClasses.image} alt="game"/>
                </div>
                <div className={`${mobileClasses.imageDivs} ${wideClasses.imageDivs}`}>
                    <div className={`${mobileClasses.imageDiv} ${wideClasses.imageDiv}`}>
                        <img src={won} className={mobileClasses.image} alt="anime"/>
                    </div>
                    <div className={`${mobileClasses.imageDiv} ${wideClasses.imageDiv}`}>
                        <img src={won} className={mobileClasses.image} alt="adventure"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
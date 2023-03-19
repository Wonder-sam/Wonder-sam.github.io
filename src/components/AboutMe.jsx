import React from 'react'
import mobileClasses from './../styles/about/mobileAbout.module.css'
import won from './../assets/wonnHA.jpg'

export default function AboutMe () {
    return (
        <div  className={mobileClasses.aboutContainer}>
            <div className={mobileClasses.aboutMe}>
                <p className={mobileClasses.aboutTitle}>About Me</p>
                <div className={mobileClasses.underline}/>
                <p className={mobileClasses.about}>I am a software engineer who loves anything relating to creating 
                    <span className={mobileClasses.aboutEmp}> amazing mobile and web applications.</span> 
                </p>
                <p className={mobileClasses.about}>Aside programming, I love to
                    <span className={mobileClasses.aboutEmp}> game, go on adventures and listening to music.</span> 
                </p>
                <p className={mobileClasses.about}>I am a software engineer who loves anything relating to creating 
                    <span className={mobileClasses.aboutEmp}> amazing mobile and web applications.</span> 
                </p>
                <p className={mobileClasses.about}>Aside programming, I love to
                    <span className={mobileClasses.aboutEmp}> game, go on adventures and listening to music.</span> 
                </p>
            </div>
            <div className={mobileClasses.aboutImages}>
                <div className={mobileClasses.imageDiv}>
                    <img src={won} className={mobileClasses.image} alt="game"/>
                </div>
                <div className={mobileClasses.imageDivs}>
                    <div className={mobileClasses.imageDiv}>
                        <img src={won} className={mobileClasses.image} alt="anime"/>
                    </div>
                    <div className={mobileClasses.imageDiv}>
                        <img src={won} className={mobileClasses.image} alt="adventure"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
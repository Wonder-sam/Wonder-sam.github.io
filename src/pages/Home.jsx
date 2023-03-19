import React from 'react'
import mobileClasses from './../styles/home/mobileHome.module.css'
import wideClasses from './../styles/home/wideHome.module.css'
import me from '../assets/sam1.png'
import AboutMe from '../components/AboutMe'
import Stack from '../components/Stack'
import Projects from '../components/Projects'
import ContactMe from '../components/Contact'

export default function Home (){
    return(
        <>
            <div className={`${mobileClasses.main} ${wideClasses.main}`}>
                <div className={`${mobileClasses.leftSide} ${wideClasses.leftSide}`}></div>
                <div className={`${mobileClasses.introduction} ${wideClasses.introduction}`}>
                    <p className={[mobileClasses.salute]}>Hello world, I am</p>
                    <p className={[mobileClasses.name]}>Samuel Sowah Nai</p>
                    <p className={[mobileClasses.work]}>I build <b>software solutions</b> for both mobile &  web.</p>
                    <p className={[mobileClasses.stack]}>Front-end/ Mobile App Developer</p>
                    <div className={mobileClasses.wrapper} >
                        <button className={[mobileClasses.contactBtn]}>
                            <span className={mobileClasses.contactBtnText}>Contact Me</span>
                        </button>
                    </div>
                </div>
                <div className={`${mobileClasses.imageContainer} ${wideClasses.imageContainer}`}>
                    <img src={me} className={mobileClasses.image} alt="Samuel Sowah Nai"/>
                </div>
            </div>
            
            <div className={mobileClasses.aboutSection} >
                <AboutMe />
            </div>
            <Stack />
            <Projects />
            <ContactMe />
        </>
    )
}
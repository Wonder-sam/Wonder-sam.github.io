import React from 'react'
import { projects } from '../data.js/projData'
import mobileClasses from './../styles/project/mobileProject.module.css'
import wideClasses from './../styles/project/wideProject.module.css'
import github from './../assets/github.svg'
import link from './../assets/link.svg'

export default function Projects () {
    return (
        <div className={mobileClasses.projectContainer}>
            <div className={mobileClasses.sectionHeader}>
                <p className={mobileClasses.sectionTitle}>Projects</p>
                <div className={mobileClasses.underline} />
            </div>

            <div className={`${mobileClasses.projects} ${wideClasses.projects}`}>
                {
                    projects.map((project,index)=>(
                        index%2===0?
                        <div key={index} className={`${mobileClasses.project} ${wideClasses.project}`}>
                            <div className={`${mobileClasses.projectImageContainer} ${wideClasses.projectImageContainer}`}>
                                <img src={project.image} alt={project.title} className={`${mobileClasses.projectImage} ${wideClasses.projectImage}`} />
                            </div>
                            <div className={`${mobileClasses.projectDetails} ${wideClasses.projectDetails}`}>
                                <p className={mobileClasses.projectTitle}>{project.title}</p>
                                <p className={mobileClasses.projectAbout}>{project.about}</p>
                                <p className={mobileClasses.projectStack}>{project.stack}</p>
                                <div className={mobileClasses.links}>
                                    <img src ={github} alt="gihub" style={{marginRight: 10}} />
                                    <img src={link} alt='project link' />
                                </div>
                                <div className={mobileClasses.wrapper}>
                                    <div className={mobileClasses.viewWork}>
                                        <p className={mobileClasses.viewText}>view work</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div key={index} className={`${mobileClasses.project} ${wideClasses.project}`}>
                            <div className={`${wideClasses.projectDetails} ${mobileClasses.hiddenDetail}`}>
                                <p className={mobileClasses.projectTitle}>{project.title}</p>
                                <p className={mobileClasses.projectAbout}>{project.about}</p>
                                <p className={mobileClasses.projectStack}>{project.stack}</p>
                                <div className={mobileClasses.links}>
                                    <img src ={github} alt="gihub" style={{marginRight: 10}} />
                                    <img src={link} alt='project link' />
                                </div>
                                <div className={mobileClasses.wrapper}>
                                    <div className={mobileClasses.viewWorkWhite}>
                                        <p className={mobileClasses.viewTextWhite}>view work</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${mobileClasses.projectImageContainer} ${wideClasses.projectImageContainer}`}>
                                <img src={project.image} alt={project.title} className={`${mobileClasses.projectImage} ${wideClasses.projectImage}`} />
                            </div>
                            <div className={`${mobileClasses.projectDetails} ${wideClasses.hiddenDetail}`}>
                                <p className={mobileClasses.projectTitle}>{project.title}</p>
                                <p className={mobileClasses.projectAbout}>{project.about}</p>
                                <p className={mobileClasses.projectStack}>{project.stack}</p>
                                <div className={mobileClasses.links}>
                                    <img src ={github} alt="gihub" style={{marginRight: 10}} />
                                    <img src={link} alt='project link' />
                                </div>
                                <div className={mobileClasses.wrapper}>
                                    <div className={mobileClasses.viewWorkWhite}>
                                        <p className={mobileClasses.viewTextWhite}>view work</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
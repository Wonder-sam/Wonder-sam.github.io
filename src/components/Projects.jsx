import React from 'react'
import mobileClasses from './../styles/project/mobileProject.module.css'

export default function Projects () {
    return (
        <div className={mobileClasses.projectContainer}>
            <div className={mobileClasses.sectionHeader}>
                <p className={mobileClasses.sectionTitle}>Projects</p>
                <div className={mobileClasses.underline} />
            </div>

        </div>
    )
}
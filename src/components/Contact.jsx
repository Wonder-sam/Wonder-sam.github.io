import React from 'react'
import mobileClasses from './../styles/contact/mobileContact.module.css'

export default function ContactMe () {
    return (
        <div className={mobileClasses.contactContainer}>
            <div className={mobileClasses.sectionHeader}>
                <p className={mobileClasses.sectionTitle}>Contact Me</p>
                <div className={mobileClasses.underline} />
            </div>
        </div>
    )
}
import React from 'react';
import { stacks } from '../data.js/stacksData';
import mobileClasses from './../styles/stack/mobileStack.module.css'
import wideClasses from './../styles/stack/wideStack.module.css'

export default function Stack() {
    return (
        <div className={mobileClasses.stackContainer}>
            <div className={mobileClasses.wrapper}>
                <div className={mobileClasses.stackBack}>
                    <p className={mobileClasses.stackTitle}>My Stack</p>
                </div>
            </div>
            <div className={`${mobileClasses.stacks} ${mobileClasses.scrollHidden} ${wideClasses.stacks}`}>
                {stacks.map((stack, index)=>(
                    <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={stack.img} className={mobileClasses.stackImage} alt={stack.name}/>
                        <p style={{color: 'white', marginTop: 10}}>{stack.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
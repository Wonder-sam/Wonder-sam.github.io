import React from 'react';
import { stacks } from '../data.js/stacksData';
import mobileClasses from './../styles/stack/mobileStack.module.css'

export default function Stack() {
    return (
        <div className={mobileClasses.stackContainer}>
            <div className={mobileClasses.wrapper}>
                <div className={mobileClasses.stackBack}>
                    <p className={mobileClasses.stackTitle}>My Stack</p>
                </div>
            </div>
            <div className={`${mobileClasses.stacks} ${mobileClasses.scrollHidden}`}>
                {stacks.map((stack, index)=>(
                    <div>
                        <img src={stack.img} className={mobileClasses.stackImage} alt={stack.name}/>
                        <p>{stack.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () =>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/about.png")} alt= "img"></img>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/MLIcon.png")} alt="cursorIcon"></img>
                <div className={styles.aboutItemText}>
                    <h3>ML Developer</h3>
                    <p>I am building Deep Learning model with pytorch and tensorflow mainly focused on computer vision</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/backendIcon.png")} alt="serverIcon"></img>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I am developing fast and optimized back-end systems and APIs as well as utilize SQL</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/computerIcon.png")} alt="computerIcon"></img>
                <div className={styles.aboutItemText}>
                    <h3>Full-Stack Developer</h3>
                    <p>I am developing web application with React</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
};
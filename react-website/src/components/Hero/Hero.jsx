import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";


export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className = {styles.title}>Hi, I'm Chris</h1>
            <p className={styles.description}>I am software engineer interested in machine learning, full-stack and backend development. </p>
            <a href="mailto:wheogus98@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.png")} alt="hero" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
    return(<footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>
                Feel free to reach out to me if you have any questions or just want to chat!
            </p>
        </div>
        <ul  className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}alt="emailIcon" />
                <a href="mailto:wheogus98@gmail.com">wheogus98@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")}alt="githubIcon" />
                <a href="https://github.com/chris00234">GitHub</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")}alt="linkedinIcon" />
                <a href="https://www.linkedin.com/in/daehyun-cho-35051b193/">LinkedIn</a>
            </li>
        </ul>
    </footer>

    );
};
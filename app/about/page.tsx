import React from 'react'
import styles from './About.module.css'
const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header} data-testId="aboutTitle">About Us</h1>
            <div className={styles.content}>
                <p>
                    Unosquare is a digital engineering company founded in 2009. The company was created in response to the need for businesses to enhance their digital product engineering teams.
                </p>
                <blockquote className={styles.quote}>
                    “Technology is a powerful tool, but, it is the people who build it and use it that truly drive innovation and progress. We strive to create a culture where people come first, where employees feel valued, empowered, and supported, and where the success of our customers is our top priority.”                </blockquote>
                <h2 className={styles.subheader}>Our Mission</h2>
                <p>
                    For our Unicorns, we guide and facilitate the personal and professional growth for every team member across all geographies while promoting our values.
                </p>
            </div>
        </div>
    )
}

export default About
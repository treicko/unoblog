
import React from 'react'
import Link from 'next/link'
import AuthLinks from '../auth-links/AuthLinks'
import Toggle from '../toggle/Toggle'

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>unoBlog</Link>

            <div className={styles.menu}>
                <Toggle />

                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/about" className={styles.link} data-testId="aboutLink">About</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>

                <AuthLinks />

            </div>
        </div>
    )
}

export default Navbar
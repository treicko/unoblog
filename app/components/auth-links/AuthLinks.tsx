"use client";
import { useState } from 'react';
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react";

import styles from './AuthLinks.module.css'

const AuthLinks = () => {
    const [open, setOpen] = useState(false)
    const { data: session } = useSession();


    const toggleMenu = () => {
        setOpen(!open)
    }

    const handleLogout = () => {
        void signOut();
        setOpen(false)
    }

    return (
        <>
            {session ? (
                <>
                    <Link href="/write" className={styles.link} data-testId="writeLink">Write</Link>
                    <span className={styles.link} onClick={handleLogout}>
                        Logout
                    </span>
                </>
            ) : (
                <Link href="/login" className={styles.link}>Login</Link>
            )}

            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>

            {open && (
                <div className={styles.mobileMenu}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>

                    {session ? (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={styles.mobileLink} onClick={handleLogout}>
                                Logout
                            </span>
                        </>
                    ) : (
                        <Link href="/login">Login</Link>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks
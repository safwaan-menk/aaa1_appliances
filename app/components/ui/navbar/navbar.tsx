"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // bar with logo and 2 sets of links. left side has logo and first 2 links, right side has last 2 links
        <nav className={styles.nav}>
            <div className={styles.leftSide}>
                <a href="/" className={styles.logoLink}> 
                    <Image 
                        src={logo} 
                        alt={"logo"} 
                        width={100}
                        height={100}
                        className={styles.logo}
                    /> 
                </a>
                <div className={styles.desktopLinks}>
                    <a href="/repair-services" className={styles.link}>Repair Services</a>
                    <a href="/buy-parts" className={styles.link}>Buy Parts</a>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.desktopLinks}>
                    <a href="/get-quote" className={styles.link}>Get a quote</a>
                    <a href="tel:773-430-7316" className={styles.link}>Call 773-430-7316</a>
                    <a href="/schedule-service" className={styles.link}>Schedule Service</a>
                </div>
                <button 
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.menuIcon}></span>
                </button>
            </div>
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    <a href="/repair-services" className={styles.mobileLink}>Repair Services</a>
                    <a href="/buy-parts" className={styles.mobileLink}>Buy Parts</a>
                    <a href="/get-quote" className={styles.mobileLink}>Get a quote</a>
                    <a href="tel:773-430-7316" className={styles.mobileLink}>Call 773-430-7316</a>
                    <a href="/schedule-service" className={styles.mobileLink}>Schedule Service</a>
                </div>
            )}
        </nav>
    )
}
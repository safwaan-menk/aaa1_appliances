import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./hero.module.css";

interface HeroProps {
    image: StaticImageData;
    h1: string;
    h2: string;
    buttons?: string[];
}


export default function Hero({image, h1, h2, buttons }: HeroProps) {
    return (
        <div className={styles.hero}>
            {/* image */}
            <Image
                className={styles.image}
                src={image}
                alt={"hero"}
                />
            {/* text */}
            <div className={styles.text}>
                <h1 className={styles.title}> {h1} </h1>
                <h2 className={styles.subtitle}> {h2} </h2>
            </div>
            {/* button */}
            <div className={styles.buttons}>
                <button className={styles.button}> {buttons?.[0]} </button>
                <button className={styles.button}> {buttons?.[1]} </button>
            </div>
        </div>
        
    )
}
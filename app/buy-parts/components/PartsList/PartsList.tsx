import styles from './PartsList.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';


interface PartsListProps {
    name: string;
    description?: string;
    image: string;
    price: number;
}

export const PartsList = ({ name, description, image, price }: PartsListProps) => {
    
    return (
        <div className={styles.partsList}>
            <h3>{name}</h3>
            <p>{description}</p>
            <Image src={`/images/${name.toLowerCase().replace(/\s+/g, '_')}.jpg`} alt={name} width={100} height={100} />
            <p>Price: ${price}</p>
        </div>
    );
}; 
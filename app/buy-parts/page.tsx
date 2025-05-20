"use client";
import styles from "./page.module.css";
import Hero from "@/components/ui/hero/hero";
import hero from "../../public/hero.jpeg";
import { useState, useEffect } from 'react';
import { PartsList } from "./components/PartsList/PartsList";

const h1 = "Need HVAC Parts?";
const h2 = "We carry a wide selection of quality parts for all your HVAC needs.";
const buttons = [
  "Call 773-430-7316",
  "Get a Quote"
];

type Parts = {
  name: string;
  description?: string;
  image?: string;
  price: number;
}

export default function BuyParts() {
  const [parts, setParts] = useState<Parts[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/parts")
      .then(res => res.json())
      .then(data => setParts(data));
  }, []);

  return (
    <div>
      <Hero image={hero} h1={h1} h2={h2} buttons={buttons} />
      <div className={styles.partsContainer}>
        <h2 className={styles.sectionTitle}>Available Parts Categories</h2>
        <div className={styles.partsGrid}>
          {parts.map((part, i) => (
            <PartsList key={i} name={part.name} image={part.image || ''} price={part.price}/>
          ))}
        </div>
      </div>
    </div>
  );
} 

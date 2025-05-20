import styles from "./page.module.css";
import Hero from "@/components/ui/hero/hero";
import hero from "../../public/hero.jpeg";
import { PartCategory } from "./components/PartCategory/PartCategory";

const h1 = "Need HVAC Parts?";
const h2 = "We carry a wide selection of quality parts for all your HVAC needs.";
const buttons = [
  "Call 773-430-7316",
  "Get a Quote"
];

const partCategories = [
  {
    title: "Compressors",
    description: "High-quality compressors for all major brands"
  },
  {
    title: "Motors",
    description: "AC and furnace motors for reliable operation"
  },
  {
    title: "Thermostats",
    description: "Smart and traditional thermostats"
  },
  {
    title: "Filters",
    description: "Air filters for improved air quality"
  }
];

export default function BuyParts() {
  return (
    <div>
      <Hero image={hero} h1={h1} h2={h2} buttons={buttons} />
      <div className={styles.partsContainer}>
        <h2 className={styles.sectionTitle}>Available Parts Categories</h2>
        <div className={styles.partsGrid}>
          <div className={styles.partCategory}>
            <h3>Compressors</h3>
            <p>High-quality compressors for all major brands</p>
          </div>
          <div className={styles.partCategory}>
            <h3>Motors</h3>
            <p>AC and furnace motors for reliable operation</p>
          </div>
          <div className={styles.partCategory}>
            <h3>Thermostats</h3>
            <p>Smart and traditional thermostats</p>
          </div>
          <div className={styles.partCategory}>
            <h3>Filters</h3>
            <p>Air filters for improved air quality</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
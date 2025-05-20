import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/ui/hero/hero";
import hero from "../public/hero.jpeg";
import { ServiceOverview } from "./components/ui/service_overview/service_overview";
import { INSPECT_MAX_BYTES } from "buffer";

var h1 = "No AC? No heat? No problem!";
var h2 = "We are here to help you with all your HVAC needs.";
var services = {
  Heating: "We offer heating services for all types of systems, including furnaces, boilers, and heat pumps.",
  Cooling: "We provide cooling services for air conditioners, ductless systems, and more.",
  Ventilation: "We specialize in ventilation services to improve indoor air quality and comfort.",
  Plumbing: "We offer plumbing services for HVAC systems, including repairs and installations."
} 

type ServiceName = keyof typeof services;


var buttons = [
  "Call 773-430-7316",
  "Schedule Service"]

export default function Home() {

  return (
    <div>
      <Hero image={hero} h1={h1} h2={h2} buttons={buttons }/>
      <div className={styles.serviceOverviewModuleGrid}>
        <h2 className={styles.sectionTitle}>Services</h2>
        {Object.entries(services).map(([service, description]) => (
          <div className={styles.serviceOverviewModule} key={service}>
            <ServiceOverview service={service} description={description} />
          </div>
        ))}
      </div>


    </div>
  )
}

import React from "react";
import styles from "./service_overview.module.css";

interface ServiceOverviewProps {
    service: string;
    description: string;
}
export const ServiceOverview = ({service, description}: ServiceOverviewProps) => {
    return (
        <div>
            <div>
                <h2 className={styles.serviceOverviewTitle}>{service}</h2>
                <p className={styles.serviceOverviewDescription}>{description}</p>
            </div>
        </div>
    );
}
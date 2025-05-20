import styles from './PartCategory.module.css';

interface PartCategoryProps {
    title: string;
    description: string;
}

export const PartCategory = ({ title, description }: PartCategoryProps) => {
    return (
        <div className={styles.partCategory}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}; 
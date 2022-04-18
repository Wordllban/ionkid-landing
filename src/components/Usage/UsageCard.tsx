import styles from "./UsageCard.module.scss";

interface UsageCardProps {
    image: string;
    text: string;
}

export function UsageCard(props: UsageCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.image_container}>
                <img className={styles.image} src={props.image} alt="usage example" />
            </div>
            <div className={styles.description_container}>
                <p className={styles.description}>{props.text}</p>
            </div>
        </div>
    )
}

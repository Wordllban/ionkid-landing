import styles from "./PriceCard.module.scss";

interface PriceCardProps {
    title: string;
    description: string;
    popular?: boolean;
}

export const PriceCard = (props: PriceCardProps) => {
    const isMostPopular = props?.popular;

    return (
        <div className={styles.card}>
            <div className={styles.content__container}>
                <div className={styles.popular}>
                    {isMostPopular ? (
                        <span className={styles.most_popular}>
                            MOST POPULAR
                        </span> 
                    ) : (
                        <span className={styles.most_popular} style={{display: "none"}}>
                            MOST POPULAR
                        </span> 
                    )}
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}>
                        {props.title}
                    </h3>

                    <p className={styles.description}>
                        {props.description}
                    </p>
                </div>   
                <div className={styles.choose_plan}>
                    <button className={styles.button}>Choose Plan</button>
                </div>             
            </div>
        </div>
    )
}

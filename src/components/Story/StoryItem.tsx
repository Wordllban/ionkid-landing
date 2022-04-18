import styles from "./StoryItem.module.scss"

interface storyItemProps {
    imagePath: string;
    text: string;
    style?: {}
    blurStyle?: {};
}


export const StoryItem = (props: storyItemProps) => {
    return (
        <div className={styles.item}>
            <div className={`${styles.container} ${styles.container_reverse}`} style={props.style}> 
                <div className={styles.image}>
                    <img className={styles.image__container} src={props.imagePath} alt="story illustration" />
                    <div className={styles.blur} style={props.blurStyle}></div>
                </div>
                <p className={styles.text}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}


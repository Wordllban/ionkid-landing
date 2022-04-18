import styles from "./Subtitle.module.scss";

interface subTitleProps {
    style?: {}
    text: string | {};
}

export const Subtitle = (props: subTitleProps) => {
    return (
        <div style={props.style} className={styles.subtitleContainer}>
            <p className={styles.subtitle}>
                {props.text}
            </p>
        </div>
    )
}


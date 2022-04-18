import styles from "./HeaderItem.module.scss";

interface HeaderItemProps {
    label: string;
    scroll: string;
}

export const HeaderItem = (props: HeaderItemProps) => {
    return (
        <>
            <a href={props.scroll} className={styles.link}>
                {props.label}
            </a>
        </>
    )
}


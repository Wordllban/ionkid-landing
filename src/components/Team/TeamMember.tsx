import styles from "./TeamMember.module.scss";

interface teamMememberProps {
    name?: string;
    position?: string;
    photo?: string;
}

export const TeamMember = (props: teamMememberProps) => {
    return (
        <div className={styles.member}>
            <img className={styles.photo} src={props.photo} alt="team member" width="80" height="80"/>
            <div className={styles.info}>
                <p className={styles.name}>
                    {props.name}
                </p>
                <span className={styles.position}>
                    {props.position}
                </span>
            </div>
        </div>
    )
}

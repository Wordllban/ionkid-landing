import heroImage from "../../assets/images/hero_illustration.svg";

import { Subtitle } from "../Subtitle/Subtitle";
import styles from "./Hero.module.scss";

export const Hero = () => {
    const text = "Забудьте про паперову документацію";

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Subtitle style={window.innerWidth <= 425 ? {textAlign: "center"} : {textAlign: "left"}} text={text} />
                    <h1 className={styles.header}>
                        Ми <span className={styles.highlight}><div className={styles.background__blur_text}></div>кидаємо <span className={styles.marked}>виклик </span>
                        традиційним</span> методам <br /> навчання
                        дітей з особливими потребами
                    </h1>
                    <p className={styles.description}>
                        <strong>IONKID</strong> - це платформа для планування, відстеження
                        та автоматичного документування терапій для дітей з особливими потребами.
                        Тут можна зберігати всі дані про навчання, створювати індивідуальні
                        освітні програми для дітей, швидко поширювати їх серед фахівців, опікунів дитини;
                        дистанційно контролювати навчання; аналізувати успішність дитини; залучати до освіти більше опікунів.
                    </p>
                    <button className={styles.button_cta}>
                        написати нам
                    </button>
                </div>
                <div className={styles.image}>
                    <div className={styles.background__blur_doctor}></div>
                    <img className={styles.image__container} src={heroImage} alt="happy doctor" />
                </div>
            </div>
        </section>
    )
}


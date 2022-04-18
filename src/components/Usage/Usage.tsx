// images
import Icon1 from "../../assets/images/icon_1.svg";
import Icon2 from "../../assets/images/icon_2.svg";
import Icon3 from "../../assets/images/icon_3.svg";
import Icon4 from "../../assets/images/icon_4.svg";
import Icon5 from "../../assets/images/icon_5.svg";

// components
import { Subtitle } from "../Subtitle/Subtitle";
import { UsageCard } from "./UsageCard";

// styles
import styles from "./Usage.module.scss";


export function Usage() {
    return (
        <section className={styles.usage} id="benefits">
            <div className={styles.container}>
                <Subtitle text="Менше паперової роботи, більше часу на навчання"/>
                <h2 className={styles.title}>Де використовується?</h2>
                <ul style={{padding: "0"}} className={styles.list}>
                    <li>
                        <div className={styles.background__blur}></div>
                        <span className={styles.marked}>Потенційно:</span> школи, дитячі садки та інші види навчання
                    </li>
                    <li>В центрах розвитку та соціалізації дітей</li>
                    <li>Приватні спеціалісти</li>
                </ul>
                <div className={styles.examples}>
                    <UsageCard image={Icon1} text="Безпаперові заняття"/>
                    <UsageCard image={Icon2} text="Єдина система документації для всіх центрів"/>
                    <UsageCard image={Icon3} text="Віддалений контроль за навчанням"/>
                    <UsageCard image={Icon4} text="Можливість надавати більше послуг більшій кількості людей"/>
                    <UsageCard image={Icon5} text="Візуалізація прогресу дитини"/>
                </div>
            </div>
        </section>
    )
}

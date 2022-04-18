import member1 from "../../assets/images/team_member_1.png";
import member2 from "../../assets/images/team_member_2.png";
import member3 from "../../assets/images/team_member_3.png";
import member4 from "../../assets/images/team_member_4.png";
import member5 from "../../assets/images/team_member_5.png";
import member6 from "../../assets/images/team_member_6.png";
import member7 from "../../assets/images/team_member_7.png";
import member8 from "../../assets/images/team_member_8.png";

import styles from "./Team.module.scss";

import { TeamMember } from "./TeamMember";

export const Team = () => {
    return (
        <section className={styles.team} id="aboutUs">
            <div className={styles.container}>
                <div className={styles.members__container}>
                    <div className={styles.first_team}>
                        <TeamMember name="Вікторія Єгорова" position="менеджер" photo={member1}/>
                        <TeamMember name="Денис Доскочинський" position="технічний лідер" photo={member2}/>
                        <TeamMember name="Михайло Феліштан" position="бізнес-аналітик" photo={member3}/>
                        <TeamMember name="Костянтин Мінінков" position="front-end dev" photo={member4}/>
                    </div>
                    <div className={styles.second_team}>
                        <TeamMember name="Максим Будзін" position="back-end dev" photo={member5}/>
                        <TeamMember name="Святослав Тростинський" position="full-stack dev" photo={member6}/>
                        <TeamMember name="Анастасія Чумак" position="back-end dev" photo={member7}/>
                        <TeamMember name="Ярина Оприск" position="ui/ux designer" photo={member8}/>
                    </div>
                </div>
                <div className={styles.about}>   
                    <h2 className={styles.title}>Про нас</h2>
                    <div className={styles.background__blur}></div> 
                    <p className={styles.description}>
                        Ми починали у жовтні 2019 року як команда студентів, що розробляла
                        науковий проект в рамках навчальної програми "Інтернет речей" у Львівській політехніці.
                        У нас наявний технічний бекграунд (загальне програмування, веб- та мобільна розробка)
                        та встигли опанувати фундаментальні навички менеджменту стартапів на інкубаційних програмах від <span className={styles.bold}>Creative Spark </span>
                        та <span className={styles.bold}>Social Impact Award</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}

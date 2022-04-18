// images
import storyIllustrationOne from "../../assets/images/story_illustration_1.svg";
import storyIllustrationTwo from "../../assets/images/story_illustration_2.svg";
import storyIllustrationThree from "../../assets/images/story_illustration_3.svg";
import storyIllustrationFour from "../../assets/images/story_illustration_4.svg";
import storyIllustrationFive from "../../assets/images/story_illustration_5.svg"; 
import storyIllustrationSix from "../../assets/images/story_illustration_6.svg";
import storyLine from "../../assets/images/story_line_test1.svg";

// styles
import styles from "./Story.module.scss";

// components
import { StoryItem } from "./StoryItem";
import { Subtitle } from "../Subtitle/Subtitle";

export const Story = () => {
    const storyTextOne: string = "Ми пропонуємо веб-сайт, на якому зберігається картка дитини з усією необхідною інформацією. Тепер всі необхідні матеріали будуть в одному місці: навчальна програма, результати консультацій та занять, інструкції для батьків та багато іншого."
    const storyTextTwo: string = "До картки можна додати всіх людей, залучених до навчання: фахівців, педагогів, супервізорів, батьків, опікунів."
    const storyTextThree: string = "Фахівці заповнюють на сайті навчальну програму та розподіляють між собою блоки завдань, які вони виконуватимуть на заняттях. Всі дані про навчання надійно зберігаються, дублюються та шифруються. Нічого не загубиться і не вийде за межі нашої системи."
    const storyTextFour: string = "Реєстратура веде графік записів до кожного фахівця, щоб відслідковувати регулярність та тривалість занять."
    const storyTextFive: string = "Telegram-бот допомагає проводити терапії. В ньому подано скорочений опис завдань з програми, для кожного з них можна відзначати проміжні результати. На основі них бот автоматично створює документацію заняття, яку потім можна переглянути на сайті."
    const storyTextSix: string = "Бот приймає та зберігає відеозаписи із виконанням занять, щоб фахівці пізніше могли проаналізувати і їх теж.На сайті можна згенерувати інформативні графіки успішності навчання дитини."
    
    const subTitleText: string = "We keep an eye on your kid"

    const isReversed = () => {
        if(window.innerWidth <= 425) {
            return {flexDirection: "column"}
        } else {
            return {flexDirection: "row-reverse"}
        }
    }

    
    return (
        <section className={styles.story} id="how">
            <Subtitle  text={subTitleText}/>
            
            <h2 className={styles.title}>
                <div className={styles.title__blur}></div>
                Як працює дана система?
            </h2>
            <div className={styles.story__line}>
                <img  src={storyLine} alt="story line" />
            </div>
            <StoryItem imagePath={storyIllustrationOne} text={storyTextOne} blurStyle={{background: "rgba(72, 148, 255, 0.2)", right: "10%", bottom: "-10%"}}/>
            <StoryItem style={isReversed()} imagePath={storyIllustrationTwo} text={storyTextTwo} blurStyle={{background: "rgba(255, 176, 81, 0.3)", right: "5%", top: "-50%"}}/>
            <StoryItem imagePath={storyIllustrationThree} text={storyTextThree} blurStyle={{background: "rgba(254, 142, 142, 0.4)", left: "-65%", bottom: "-30%"}}/>
            <StoryItem style={isReversed()} imagePath={storyIllustrationFour} text={storyTextFour} blurStyle={{background: "rgba(72, 148, 255, 0.2)", left: "-35%", top: "0"}}/>
            <StoryItem imagePath={storyIllustrationFive} text={storyTextFive} blurStyle={{background: "rgba(255, 176, 81, 0.3)", left: "-5%", bottom: "-90%"}}/>
            <StoryItem style={isReversed()} imagePath={storyIllustrationSix} text={storyTextSix} blurStyle={{background: "rgba(254, 142, 142, 0.4)", right: "10%", bottom: "-15%"}}/>
        </section>
    )
}


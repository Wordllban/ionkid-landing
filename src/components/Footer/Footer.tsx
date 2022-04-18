import Logo from "../Logo/Logo";

import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Logo />
                <div className={styles.contacts}>
                    <ul className={styles.list}>
                        <li>+ (380) 96 345 85 45</li>
                        <li><a href="https://www.facebook.com/ionkid.dev/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/ionkid.dev/">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/ionkid/">LinkedIn</a></li>
                        <li><a href="mailto:ionkid.prod@gmail.com">Зв’язатися з нами</a></li>
                    </ul>
                </div>
            </div>  
        </footer>
    )
}

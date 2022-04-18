// hooks
import { useState } from "react"

// components
import Logo from "../Logo/Logo"
import { HeaderItem } from "./HeaderItem"

// styles
import styles from "./Header.module.scss"

// images 
import openMenuButton from "../../assets/images/mobile_menu.svg";
import closeMenuButton from "../../assets/images/mobile_menu_close.svg";

export const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const openMenu = { transform: `translateX(0%)`}
    const closeMenu = { transform: `translateX(100%)`}

    const menu = () => {
        if(window.innerWidth <= 425) {
            if(showMenu) {
                return openMenu;
            } else {
                return closeMenu;
            }
        } else {
            return openMenu;
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />

                <button className={styles.mobile_nav_toggle} onClick={() => setShowMenu(!showMenu)}>
                        <img src={ showMenu ? closeMenuButton : openMenuButton } alt="menu" />
                        <span className={styles.sr_only}>Menu</span>
                </button>

                <nav className={styles.primary_navigation} style={menu()} onClick={() => setShowMenu(!showMenu)}>
                    <HeaderItem scroll="#how" label="як?"/>
                    <HeaderItem scroll="#benefits" label="переваги"/>
                    <HeaderItem scroll="#priceList" label="прайс-лист"/>
                    <HeaderItem scroll="#aboutUs" label="про нас"/>
                </nav>
            </div>
        </header>
    )
}


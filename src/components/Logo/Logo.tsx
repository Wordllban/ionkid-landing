import logoImage from "../../assets/images/logo_ionkid.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <div className={styles.logo} >
            <img src={logoImage} alt="logo" />
        </div>
    )
}

export default Logo

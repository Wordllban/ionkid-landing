import styles from "./PriceList.module.scss";

import { PriceCard } from './PriceCard'

export function PriceList() {
    return (
        <section className={styles.price_list} id="priceList">
            <div className={styles.container}>
                <div className={styles.about}>
                    <h2 className={styles.title}>Прайс-лист</h2>
                    <div className={styles.background__blur}></div>
                </div>
                <div className={styles.offers}>
                    <PriceCard title="IONKID One" description="для приватних спеціалістів" />
                    <PriceCard title="IONKID ABA" description="для центрів тільки з АВА-фахівцями" />
                    <PriceCard title="IONKID Standart" description="для центрів з різними фахівцями" />
                    <PriceCard title="IONKID Advanced" description="для центрів з різними фахівцями та реєстратурою" popular={true} />
                    <PriceCard title="IONKID Special" description="унікальне рішення на замовлення" />
                </div>
            </div>
        </section>
    )
}

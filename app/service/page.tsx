import ServiceBanner from "@/components/service/ServiceBanner";
import PublicServices from "@/components/service/PublicServices";
import PopularServices from "@/components/service/PopularServices";
import ServiceList from "@/components/service/ServiceList";
import styles from "./service.module.css";

export default function ServicesPage() {
    return (
        <div className={styles.pageWrapper}>
            <ServiceBanner />
            <PublicServices />
            <PopularServices />
            <ServiceList />
        </div>
    );
}
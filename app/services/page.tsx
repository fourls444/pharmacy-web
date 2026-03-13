import ServiceBanner from "@/components/services/ServiceBanner";
import PublicServices from "@/components/services/PublicServices";
import PopularServices from "@/components/services/PopularServices";
import ServiceList from "@/components/services/ServiceList";
import styles from "./services.module.css";

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
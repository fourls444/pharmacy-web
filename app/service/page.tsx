import ServiceBanner from "@/components/service/ServiceBanner";
import PublicServices from "@/components/service/PublicServices";
import PopularServices from "@/components/member/service/PopularServices";
import ServiceList from "@/components/member/service/ServiceList";
import { getServices, getPopularServices } from "@/lib/api";
import styles from "./service.module.css";

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
    const [services, popularServices] = await Promise.all([
        getServices(),
        getPopularServices(),
    ]);

    return (
        <div className={styles.pageWrapper}>
            <ServiceBanner />
            <PublicServices />
            <PopularServices services={popularServices} />
            <ServiceList services={services} />
        </div>
    );
}
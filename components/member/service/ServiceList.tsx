import styles from "./ServiceList.module.css";

import Link from "next/link";
import { ServiceItem } from "@/lib/api";

interface ServiceListProps {
  services: ServiceItem[];
}

export default function ServiceList({ services }: ServiceListProps) {
  if (!services || services.length === 0) return null;

  const regularServices = services.filter(item => !item.isPopular);

  if (regularServices.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.sectionCon}>
      <h2 className={`${styles.title} ThaiFont`}>บริการเภสัชกร</h2>
      <div className={styles.serviceListGrid}>
        {regularServices.map((item) => {
          const content = (
            <>
              <div className={`${styles.serviceLabel} ThaiFont`}>
                {item.shortName}
              </div>
              <div className={`${styles.serviceDesc} ThaiFont`}>
                {item.description}
              </div>
            </>
          );

          if (item.linkUrl) {
            return (
              <Link 
                key={item.id} 
                href={item.linkUrl}
                className={styles.serviceListItem}
                target={item.linkUrl.startsWith('http') ? "_blank" : "_self"}
                rel={item.linkUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={item.id} className={styles.serviceListItem}>
              {content}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

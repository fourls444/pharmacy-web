import styles from "./PopularServices.module.css";

import { ServiceItem } from "@/lib/api";

interface PopularServicesProps {
  services: ServiceItem[];
}

export default function PopularServices({ services }: PopularServicesProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className="ThaiFont">บริการยอดนิยม</h2>
      <div className={styles.popularGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.popularCard}>
            <div className={styles.iconCircle}>
              {service.iconUrl ? (
                <img src={service.iconUrl} alt={service.name} style={{width:40}} />
              ) : (
                <div style={{ width: '100%', height: '100%', backgroundColor: '#eee', borderRadius: '50%' }} />
              )}
            </div>
            <h3 className="ThaiFont" style={{ fontSize: 36 }}>
               {(() => {
                   const name = service.name || "";
                   
                   // Custom logic to split the name into two lines nicely
                   if (name === "คำขอประกาศนียบัตรวิชาชีพเภสัชกรรม") {
                     return <>ประกาศ<br/>นียบัตร</>;
                   }
                   if (name === "คำขอต่ออายุใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม") {
                     return <>ต่อใบ<br/>อนุญาต</>;
                   }
                   if (name === "คำขอสมัครสมาชิกสภาเภสัชกรรม") {
                     return <>คำขอ<br/>สมาชิก</>;
                   }
                   if (name === "คำขอขึ้นทะเบียนและรับใบอนุญาตเป็นผู้ประกอบวิชาชีพ") {
                     return <>คำขอ<br/>ขึ้นทะเบียน</>;
                   }

                   // Default fallback
                   return name;
               })()}
            </h3>
            <p className="ThaiFont">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

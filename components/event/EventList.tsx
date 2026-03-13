import { MapPin, Calendar, Users, Building2 } from "lucide-react";
import styles from "./EventList.module.css";

export interface StaticEvent {
  id: number;
  day: string;
  month: string;
  title: string;
  location: string;
  date: string;
  tags: string[];
  count: string;
  image: string;
  status?: string;
}

interface EventListProps {
  events: StaticEvent[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <section className={styles.meetingList}>
      <div className={styles.tabContainer}>
        <div className={`${styles.tab} ${styles.activeTab}`}>งานประชุมทั้งหมด</div>
        <div className={styles.tab}>สำหรับเภสัชกร</div>
        <div className={styles.tab}>สำหรับบุคคลทั่วไป</div>
      </div>

      <div className={styles.listContainer}>
        {events.map((item) => (
          <div
            key={item.id}
            className={`${styles.meetingItem} ${item.status === "past" ? styles.pastItem : ""}`}
          >
            <div className={styles.dateBox}>
              <div className={styles.day}>{item.day}</div>
              <div className={styles.month}>{item.month}</div>
            </div>

            <div className={styles.meetingInfo}>
              <h3 className="ThaiFont">{item.title}</h3>

              <div className={styles.infoItem}>
                <MapPin size={18} className={styles.grayIcon} />
                <p className="ThaiFont">สถานที่ : {item.location}</p>
              </div>

              <div className={styles.infoItem}>
                <Calendar size={18} className={styles.grayIcon} />
                <p className="ThaiFont">วันที่จัดประชุม : {item.date}</p>
              </div>

              <div className={styles.participantsRow}>
                <div className={styles.infoItem}>
                  <Users size={18} className={styles.grayIcon} />
                  <span className="ThaiFont">ผู้เข้าร่วม :</span>
                  <div className={styles.tags}>
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`${"ThaiFont"} ${tag === "เภสัชกร" ? styles.pharmacistTag : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="ThaiFont">จำนวน : {item.count}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Building2 size={18} className={styles.grayIcon} />
                <p className="ThaiFont">หน่วยงาน : ราชวิทยาลัย</p>
              </div>
            </div>

            <img src={item.image} className={styles.meetingImage} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

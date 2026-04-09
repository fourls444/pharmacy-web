import { Building2 } from "lucide-react";
import styles from "./MeetingList.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers, HiOutlineBookmark } from "react-icons/hi";

export interface StaticMeeting {
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
  cpe?: string;
  category?: string;
  attendees?: string;
}

interface MeetingListProps {
  meetings: StaticMeeting[];
}

export default function MeetingList({ meetings }: MeetingListProps) {
  return (
    <section className={styles.meetingList}>
      <div className={styles.tabContainer}>
        <div className={`${styles.tab} ${styles.activeTab}`}>งานประชุมทั้งหมด</div>
        <div className={styles.tab}>สำหรับเภสัชกร</div>
        <div className={styles.tab}>สำหรับบุคคลทั่วไป</div>
      </div>

      <div className={styles.listContainer}>
        {meetings.map((item) => (
          <div
            key={item.id}
            className={`${styles.meetingItem} ${item.status === "past" ? styles.pastItem : ""}`}
          >
            <div className={styles.dateBox}>
              <div className={styles.day}>{item.day}</div>
              <div className={styles.month}>{item.month}</div>
            </div>

            <div className={styles.meetingInfo}>
              <div className={styles.titleWrapper}>
                <h3 className="ThaiFont">{item.title}</h3>
                {item.cpe && item.tags.includes("เภสัชกร") && (
                  <div className={styles.cpeBadge}>
                    <FaGraduationCap className={styles.cpeIcon} />
                    <span>CPE {item.cpe} หน่วยกิต</span>
                  </div>
                )}
              </div>

              <div className={styles.infoItem}>
                <HiOutlineLocationMarker size={18} className={styles.grayIcon} />
                <p className="ThaiFont">สถานที่ : {item.location}</p>
              </div>

              <div className={styles.infoItem}>
                <HiOutlineCalendar size={18} className={styles.grayIcon} />
                <p className="ThaiFont">วันที่จัดประชุม : {item.date}</p>
              </div>

              <div className={styles.participantsRow}>
                <div className={styles.infoItem}>
                  <HiOutlineUsers size={18} className={styles.grayIcon} />
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
                  <span className="ThaiFont" style={{ color: '#475569', marginLeft: '0.5rem' }}>
                    จำนวน : {item.count}
                  </span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <HiOutlineBookmark size={18} className={styles.grayIcon} />
                <p className="ThaiFont">หมวดหมู่ : {item.category || "ทั่วไป"}</p>
              </div>
            </div>

            <img src={item.image} className={styles.meetingImage} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

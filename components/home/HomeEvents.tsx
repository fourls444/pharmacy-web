import Image from "next/image";
import { MapPin, Calendar, Users, Building2 } from "lucide-react";
import styles from "./HomeEvents.module.css";
import { FaGraduationCap } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const MOCK_EVENTS = [
  {
    id: 1,
    day: "2",
    month: "พ.ค.",
    title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรรอบรมระยะสั้นการบริบาลทางเภสัชกรรม (สาขาปฐมภูมิ) รุ่นที่ 5",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    dateRange: "02 พ.ค. 2569 - 13 ก.ย. 2569",
    audiences: ["บุคคลทั่วไป", "เภสัชกร"],
    capacity: "100 คน",
    agency: "ราชวิทยาลัย",
    image: "/images/home/image1.png",
    cpe: "10.0",
  },
  {
    id: 2,
    day: "1",
    month: "มี.ค.",
    title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    dateRange: "02 พ.ค. 2569 - 13 ก.ย. 2569",
    audiences: ["เภสัชกร"],
    capacity: "100 คน",
    agency: "ราชวิทยาลัย",
    image: "/images/home/image2.png",
    cpe: "5.5",
  },
  {
    id: 3,
    day: "13",
    month: "ก.พ.",
    title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาบริหารจัดการผลิตภัณฑ์สมุนไพร) รุ่นที่ 3",
    location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
    dateRange: "02 พ.ค. 2569 - 13 ก.ย. 2569",
    audiences: ["บุคคลทั่วไป"],
    capacity: "เต็ม",
    agency: "ราชวิทยาลัย",
    image: "/images/home/image3.png",
    cpe: "3.0",
  },
];

export default function HomeEvents() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader title="การประชุม" viewAllHref="/event" />

        <div className={styles.eventList}>
          {MOCK_EVENTS.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              {/* Date Box */}
              <div className={styles.dateBox}>
                <span className={styles.dateDay}>{event.day}</span>
                <span className={styles.dateMonth}>{event.month}</span>
              </div>

              {/* Event Content */}
              <div className={styles.eventContent}>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  {event.cpe && event.audiences.includes("เภสัชกร") && (
                    <div className={styles.cpeBadge}>
                      <FaGraduationCap className={styles.cpeIcon} />
                      <span>CPE {event.cpe} หน่วยกิต</span>
                    </div>
                  )}
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.detailRow}>
                    <div className={styles.detailIcon}><MapPin size={16} /></div>
                    <span>สถานที่ : {event.location}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <div className={styles.detailIcon}><Calendar size={16} /></div>
                    <span>วันที่จัดประชุม : {event.dateRange}</span>
                  </div>
                  <div className={styles.detailRowFlex}>
                    <div className={styles.audiencesWrapper}>
                      <div className={styles.detailIcon}><Users size={16} /></div>
                      <span className={styles.participantLabel}>ผู้เข้าร่วม :</span>
                      <div className={styles.badges}>
                        {event.audiences.includes("บุคคลทั่วไป") && (
                          <Badge>บุคคลทั่วไป</Badge>
                        )}
                        {event.audiences.includes("เภสัชกร") && (
                          <Badge active>เภสัชกร</Badge>
                        )}
                      </div>
                    </div>
                    <span>จำนวน : {event.capacity}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <div className={styles.detailIcon}><Building2 size={16} /></div>
                    <span>หน่วยงาน : {event.agency}</span>
                  </div>
                </div>
              </div>

              {/* Event Image */}
              <div className={styles.eventImageWrapper}>
                <Image
                  unoptimized={true}
                  src={event.image}
                  alt={event.title}
                  width={280}
                  height={180}
                  className={styles.eventImage}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

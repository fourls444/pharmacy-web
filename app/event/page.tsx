import { MapPin, Calendar, Users, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./event.module.css";

const meetings = [
    {
        id: 1,
        day: "2",
        month: "พ.ค.",
        title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้นการบริบาลทางเภสัชกรรม (สาขาปฐมภูมิ) รุ่นที่ 5",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        tags: ["บุคคลทั่วไป", "เภสัชกร"],
        count: "100 คน",
        image: "images/event/event1.jpg",
    },
    {
        id: 2,
        day: "1",
        month: "มี.ค.",
        title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        tags: ["เภสัชกร"],
        count: "100 คน",
        image: "/images/event/event2.jpg",
    },
    {
        id: 3,
        day: "13",
        month: "ก.พ.",
        title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาบริหารจัดการผลิตภัณฑ์สมุนไพร) รุ่นที่ 3",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        tags: ["บุคคลทั่วไป"],
        count: "เต็ม",
        image: "/images/event/event3.jpg",
    },
    {
        id: 4,
        day: "1",
        month: "มี.ค.",
        title: "Pharmacy Research and Innovation Summit 2025: (PRIS2025) Synergizing for the better future",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        tags: ["บุคคลทั่วไป", "เภสัชกร"],
        count: "100 คน",
        image: "/images/event/event4.jpg",
        status: "past"
    },
    {
        id: 5,
        day: "13",
        month: "ก.พ.",
        title: "การฝึกอบรม ประกาศนียบัตรวิชาชีพเภสัชกรรม (สาขาบริหารจัดการผลิตภัณฑ์สมุนไพร) รุ่นที่ 3",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        tags: ["บุคคลทั่วไป", "เภสัชกร"],
        count: "100 คน",
        image: "/images/event/event5.jpg",
        status: "past"
    },
];

export default function MeetingsPage() {
    return (
        <div className={styles.pageWrapper}>

            {/* Banner (เหลือแค่รูป) */}
            <header className={styles.banner}></header>

            <div className={styles.container}>

                {/* งานประชุมแนะนำ */}
                <section className={styles.recommendSection}>

                    <div className={styles.sectionHeader}>
                        <h2 className="ThaiFont">งานประชุมแนะนำ</h2>

                        <div className={styles.sliderButtons}>
                            <button className={styles.sliderBtn}><ChevronLeft size={20} /></button>
                            <button className={styles.sliderBtn}><ChevronRight size={20} /></button>
                        </div>
                    </div>

                    <div className={styles.recommendCard}>
                        <img
                            src="/images/event/event1.jpg"
                            className={styles.recommendImage}
                            alt="Meeting preview"
                        />

                        <div className={styles.recommendContent}>

                            <h3 className="ThaiFont">
                                สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้นการบริบาลทาง
                                เภสัชกรรม (สาขาปฐมภูมิ) รุ่นที่ 5
                            </h3>

                            <div className={styles.infoItem}>
                                <MapPin size={20} className={styles.grayIcon} />
                                <p className="ThaiFont">
                                    สถานที่ : ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี
                                    จังหวัดนนทบุรี
                                </p>
                            </div>

                            <div className={styles.infoItem}>
                                <Calendar size={20} className={styles.grayIcon} />
                                <p className="ThaiFont">วันที่จัดประชุม : 02 พ.ค. 2569 - 13 ก.ย. 2569</p>
                            </div>

                            <div className={styles.recommendFooter}>
                                <div className={styles.participantsInfo}>
                                    <div className={styles.infoItem}>
                                        <Users size={20} className={styles.grayIcon} />
                                        <span className="ThaiFont">ผู้เข้าร่วม :</span>
                                        <div className={styles.tags}>
                                            <span className="ThaiFont">บุคคลทั่วไป</span>
                                            <span className={`${"ThaiFont"} ${styles.pharmacistTag}`}>เภสัชกร</span>
                                        </div>
                                        <span className="ThaiFont">จำนวน : 100 คน</span>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <Building2 size={20} className={styles.grayIcon} />
                                    <p className="ThaiFont">หน่วยงาน : ราชวิทยาลัย</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.sliderIndicators}>
                        <span className={`${styles.dot} ${styles.active}`}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                        <span className={styles.dot}></span>
                    </div>

                </section>

                {/* งานประชุมทั้งหมด */}
                <section className={styles.meetingList}>

                    <div className={styles.tabContainer}>
                        <div className={`${styles.tab} ${styles.activeTab}`}>งานประชุมทั้งหมด</div>
                        <div className={styles.tab}>สำหรับเภสัชกร</div>
                        <div className={styles.tab}>สำหรับบุคคลทั่วไป</div>
                    </div>

                    <div className={styles.listContainer}>
                        {meetings.map((item) => (
                            <div key={item.id} className={`${styles.meetingItem} ${item.status === "past" ? styles.pastItem : ""}`}>

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
                                                    <span key={idx} className={`${"ThaiFont"} ${tag === "เภสัชกร" ? styles.pharmacistTag : ""}`}>
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

                                <img
                                    src={item.image}
                                    className={styles.meetingImage}
                                    alt={item.title}
                                />

                            </div>
                        ))}
                    </div>

                </section>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <button className={styles.arrowBtn}><ChevronLeft size={20} /></button>
                    <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
                    <button className={styles.pageBtn}>2</button>
                    <button className={styles.pageBtn}>3</button>
                    <span className={styles.dots}>...</span>
                    <button className={styles.pageBtn}>10</button>
                    <button className={styles.arrowBtn}><ChevronRight size={20} /></button>
                </div>

            </div>
        </div>
    );
}
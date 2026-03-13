import EventBanner from "@/components/event/EventBanner";
import RecommendedEvent from "@/components/event/RecommendedEvent";
import EventList, { StaticEvent } from "@/components/event/EventList";
import EventPagination from "@/components/event/EventPagination";
import styles from "./event.module.css";

const meetings: StaticEvent[] = [
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
            <EventBanner />
            <div className={styles.container}>
                <RecommendedEvent />
                <EventList events={meetings} />
                <EventPagination />
            </div>
        </div>
    );
}
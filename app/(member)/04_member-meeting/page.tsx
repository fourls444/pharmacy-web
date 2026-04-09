import MeetingBanner from "@/components/public/05_meeting/MeetingBanner";
import RecommendedMeeting from "@/components/public/05_meeting/RecommendedMeeting";
import MeetingList from "@/components/public/05_meeting/MeetingList";
import MeetingPagination from "@/components/public/05_meeting/MeetingPagination";
import styles from "./meeting.module.css";

// Sample data (Can be fetched from API later)
const meetings = [
    {
        id: 1,
        day: "2",
        month: "พ.ค.",
        title: "สภาเภสัชกรรมเปิดอบรมหลักสูตรอบรมระยะสั้นสำหรับการบริบาลทางเภสัชกรรม (สาขาปฐมภูมิ) รุ่นที่ 5",
        location: "ห้อง Sapphire 204-206 ศูนย์การประชุม อิมแพ็ค ฟอรั่ม เมืองทองธานี จังหวัดนนทบุรี",
        date: "02 พ.ค. 2569 - 13 ก.ย. 2569",
        tags: ["สมาชิก", "เภสัชกร"],
        count: "100 คน",
        image: "/images/public/meeting/meeting1.jpg",
        cpe: "10.0",
        category: "การบริบาลเภสัชกรรม"
    },
    // ... other meetings can be added
];

export default function MemberMeetingPage() {
    return (
        <div className={styles.pageWrapper}>
            <MeetingBanner />
            <div className={styles.container}>
                <RecommendedMeeting />
                <MeetingList meetings={meetings as any} />
                <MeetingPagination />
            </div>
        </div>
    );
}

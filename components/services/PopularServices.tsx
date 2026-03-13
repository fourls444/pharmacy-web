import styles from "./PopularServices.module.css";

const popularServices = [
  {
    id: 1,
    icon: "/images/service/icon1.png",
    title: (
      <>
        ประกาศ
        <br />
        นียบัตร
      </>
    ),
    desc: "คำขอประกาศนียบัตรวิชาชีพเภสัชกรรม",
  },
  {
    id: 2,
    icon: "/images/service/icon2.png",
    title: (
      <>
        ต่อใบ
        <br />
        อนุญาต
      </>
    ),
    desc: "คำขอต่ออายุใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม",
  },
  {
    id: 3,
    icon: "/images/service/icon3.png",
    title: (
      <>
        คำขอ
        <br />
        สมาชิก
      </>
    ),
    desc: "คำขอสมัครสมาชิกสภาเภสัชกรรม",
  },
  {
    id: 4,
    icon: "/images/service/icon4.png",
    title: (
      <>
        คำขอ
        <br />
        ขึ้นทะเบียน
      </>
    ),
    desc: "คำขอขึ้นทะเบียนและรับใบอนุญาตเป็นผู้ประกอบวิชาชีพ",
  },
];

export default function PopularServices() {
  return (
    <section className={styles.section}>
      <h2 className="ThaiFont">บริการเภสัชกรยอดนิยม</h2>
      <div className={styles.popularGrid}>
        {popularServices.map((service) => (
          <div key={service.id} className={styles.popularCard}>
            <div className={styles.iconCircle}>
              <img src={service.icon} alt={`icon-${service.id}`} />
            </div>
            <h3 className="ThaiFont">{service.title}</h3>
            <p className="ThaiFont">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

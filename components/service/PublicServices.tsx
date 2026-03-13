import styles from "./PublicServices.module.css";

const publicServices = [
  { id: 1, img: "/images/service/service1.jpg", alt: "service1" },
  { id: 2, img: "/images/service/service2.jpg", alt: "service2" },
  { id: 3, img: "/images/service/service3.jpg", alt: "service3" },
  { id: 4, img: "/images/service/service4.jpg", alt: "service4" },
  { id: 5, img: "/images/service/service5.jpg", alt: "service5" },
  { id: 6, img: "/images/service/service6.jpg", alt: "service6" },
];

export default function PublicServices() {
  return (
    <section className={styles.section}>
      <h2 className="ThaiFont">บริการประชาชน</h2>
      <div className={styles.cardGrid}>
        {publicServices.map((service) => (
          <div key={service.id} className={styles.card}>
            <img src={service.img} alt={service.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

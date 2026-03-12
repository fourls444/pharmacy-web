import styles from "./services.module.css";

export default function ServicesPage() {
    return (
        <div className={styles.pageWrapper}>

            {/* Banner */}
            <section className={styles.banner}></section>

            {/* บริการประชาชน */}
            <section className={styles.section}>
                <h2 className="ThaiFont">บริการประชาชน</h2>

                <div className={styles.cardGrid}>

                    <div className={styles.card}>
                        <img src="/images/service/service1.jpg" alt="service1" />
                    </div>

                    <div className={styles.card}>
                        <img src="/images/service/service2.jpg" alt="service2" />
                    </div>

                    <div className={styles.card}>
                        <img src="/images/service/service3.jpg" alt="service3" />
                    </div>

                    <div className={styles.card}>
                        <img src="/images/service/service4.jpg" alt="service4" />
                    </div>

                    <div className={styles.card}>
                        <img src="/images/service/service5.jpg" alt="service5" />
                    </div>

                    <div className={styles.card}>
                        <img src="/images/service/service6.jpg" alt="service6" />
                    </div>

                </div>
            </section>

            {/* บริการเภสัชกรยอดนิยม */}
            <section className={styles.section}>
                <h2 className="ThaiFont">บริการเภสัชกรยอดนิยม</h2>

                <div className={styles.popularGrid}>

                    <div className={styles.popularCard}>
                        <div className={styles.iconCircle}>
                            <img src="/images/service/icon1.png" alt="icon1" />
                        </div>

                        <h3>ประกาศ<br />นียบัตร</h3>
                        <p>คำขอประกาศนียบัตรวิชาชีพเภสัชกรรม</p>
                    </div>

                    <div className={styles.popularCard}>
                        <div className={styles.iconCircle}>
                            <img src="/images/service/icon2.png" alt="icon2" />
                        </div>

                        <h3>ต่อใบ<br />อนุญาต</h3>
                        <p>คำขอต่ออายุใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</p>
                    </div>

                    <div className={styles.popularCard}>
                        <div className={styles.iconCircle}>
                            <img src="/images/service/icon3.png" alt="icon3" />
                        </div>

                        <h3>คำขอ<br />สมาชิก</h3>
                        <p>คำขอสมัครสมาชิกสภาเภสัชกรรม</p>
                    </div>

                    <div className={styles.popularCard}>
                        <div className={styles.iconCircle}>
                            <img src="/images/service/icon4.png" alt="icon4" />
                        </div>

                        <h3>คำขอ<br />ขึ้นทะเบียน</h3>
                        <p>คำขอขึ้นทะเบียนและรับใบอนุญาตเป็นผู้ประกอบวิชาชีพ</p>
                    </div>

                </div>
            </section>

            {/* บริการเภสัชกร */}
            <section className={styles.section}>
                <h2 className="ThaiFont">บริการเภสัชกร</h2>

                <div className={styles.serviceListGrid}>
                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.12</div>
                        <div className={styles.serviceDesc}>คำขอสมัครเป็นสมาชิกสภาเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.17</div>
                        <div className={styles.serviceDesc}>คำขอขึ้นทะเบียนและรับใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.17/1</div>
                        <div className={styles.serviceDesc}>คำขอต่ออายุใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.19</div>
                        <div className={styles.serviceDesc}>คำขอหนังสือรับรองการขึ้นทะเบียนเป็นผู้ประกอบวิชาชีพเภสัชกรรม (ฉบับภาษาอังกฤษ)</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.21</div>
                        <div className={styles.serviceDesc}>คำขอใบแทนใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.22</div>
                        <div className={styles.serviceDesc}>คำขอเปลี่ยนชื่อ สกุล เพิ่มยศ อากิโรย</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.23</div>
                        <div className={styles.serviceDesc}>คำขอใบแปลใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.27</div>
                        <div className={styles.serviceDesc}>คำขอสมัครเป็นสมาชิกสภาเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.28</div>
                        <div className={styles.serviceDesc}>คำขอขึ้นทะเบียนและรับใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.33</div>
                        <div className={styles.serviceDesc}>คำขอต่ออายุใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.34/1</div>
                        <div className={styles.serviceDesc}>คำขอหนังสือรับรองการขึ้นทะเบียนเป็นผู้ประกอบวิชาชีพเภสัชกรรม (ฉบับภาษาอังกฤษ)</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.46</div>
                        <div className={styles.serviceDesc}>คำขอใบแทนใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.78</div>
                        <div className={styles.serviceDesc}>คำขอเปลี่ยนชื่อ สกุล เพิ่มยศ อากิโรย</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>สภ.79</div>
                        <div className={styles.serviceDesc}>คำขอใบแปลใบอนุญาตเป็นผู้ประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>แจ้งลา</div>
                        <div className={styles.serviceDesc}>แจ้งหลักฐานการลา</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>วุฒิบัตร</div>
                        <div className={styles.serviceDesc}>คำขอหนังสืออนุมัติหรือวุฒิบัตรแสดงความรู้ความชำนาญในการประกอบวิชาชีพเภสัชกรรม</div>
                    </div>

                    <div className={styles.serviceListItem}>
                        <div className={styles.serviceLabel}>หน่วยกิต</div>
                        <div className={styles.serviceDesc}>
                            คำขอเก็บหน่วยกิตการศึกษาต่อเนื่องเพิ่มเติม (โอนย้าย หน่วยกิต ในรอบการศึกษา 5 ปี)
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
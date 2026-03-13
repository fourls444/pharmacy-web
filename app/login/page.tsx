import Image from "next/image";
import Link from "next/link";
import { User, Lock, EyeOff, Globe } from "lucide-react";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={`${styles.loginWrapper} ThaiFont`}>


      {/* Login Card Container */}
      <main className={styles.main}>
        <div className={styles.loginCard}>
          {/* Left Side: Illustration/Image */}
          <div className={styles.cardLeft}>
            <Image
              src="/images/login/Column.png"
              alt="Pharmacist"
              fill
              className={styles.pharmacistImg}
              priority
            />
          </div>

          {/* Right Side: Form */}
          <div className={styles.cardRight}>
            <div className={styles.formHeader}>
              <Image
                src="/images/icon.jpg"
                alt="Logo"
                width={80}
                height={80}
                className={styles.formLogo}
              />
              <h2>ระบบบริการผู้ประกอบวิชาชีพเภสัชกรรม</h2>
            </div>

            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} size={20} />
                  <input type="text" placeholder="ระบุเลขที่ใบอนุญาต ฯ" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.inputIcon} size={20} />
                  <input type="password" placeholder="รหัสผ่าน" />
                  <EyeOff className={styles.eyeIcon} size={20} />
                </div>
              </div>

              <button type="button" className={styles.submitBtn}>
                เข้าสู่ระบบ
              </button>

              <div className={styles.formLinks}>
                <Link href="/forgot-password">ลืมรหัสผ่าน</Link>
                <Link href="/register">ลงทะเบียนใช้งานครั้งแรก</Link>
              </div>

              <div className={styles.dividerOr}>
                <span>หรือ</span>
              </div>

              <div className={styles.altLogin}>
                <button type="button" className={`${styles.altBtn} ${styles.blueBtn}`}>
                  <Image src="/images/login/thaid.png" alt="ThaiID" width={32} height={32} />
                  เข้าสู่ระบบด้วย ThaiID
                </button>

                <button type="button" className={`${styles.altBtn} ${styles.lightBlueBtn}`}>
                  <Image src="/images/login/paotang.png" alt="PaoTang" width={32} height={32} />
                  เข้าสู่ระบบด้วย เป๋าตัง
                </button>

                <button type="button" className={`${styles.altBtn} ${styles.greenBtn}`}>
                  <Image src="/images/login/tangrat.png" alt="TangRat" width={32} height={32} />
                  เข้าสู่ระบบด้วย ทางรัฐ
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerText}>ผ่านการรับรองมาตรฐานโดย</span>
          <div className={styles.footerLogos}>
            <Image src="/images/login/etda.png" alt="ETDA" width={120} height={35} className={styles.etdaLogo} />
            <Image src="/images/login/dopa.png" alt="Department of Provincial Administration" width={260} height={40} className={styles.dopaLogo} />
          </div>
        </div>
      </footer>
    </div>
  );
}

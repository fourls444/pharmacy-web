"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Lock, EyeOff, Globe, ChevronLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import styles from "./login.module.css";

export default function LoginPage() {
  const auth = useAuth();
  const [step, setStep] = useState<"login" | "otp">("login");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loginError, setLoginError] = useState("");
  const [otpError, setOtpError] = useState("");

  const MOCK_ID = "ph123";
  const MOCK_PASSWORD = "12345";
  const MOCK_OTP = "111222";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (id === MOCK_ID && password === MOCK_PASSWORD) {
      setStep("otp");
    } else {
      setLoginError("เลขที่ใบอนุญาตหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่");
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    setOtpError("");

    if (enteredOtp === MOCK_OTP) {
      auth.login();
    } else {
      setOtpError("รหัส OTP ไม่ถูกต้อง กรุณาตรวจสอบและระบุอีกครั้ง");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

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

          {/* Right Side: Content */}
          <div className={styles.cardRight}>
            {step === "login" ? (
              <>
                <div className={styles.formHeader}>
                  <Image
                    src="/images/icon.jpg"
                    alt="Logo"
                    width={80}
                    height={80}
                    className={styles.formLogo}
                  />
                  <h2>ระบบบริการผู้ประกอบวิชาชีพเภสัชกรรม</h2>
                  <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "5px" }}>
                    (Mock: {MOCK_ID} / {MOCK_PASSWORD})
                  </p>
                </div>

                <form className={styles.form} onSubmit={handleLogin}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputWrapper}>
                      <User className={styles.inputIcon} size={20} />
                      <input
                        type="text"
                        placeholder="ระบุเลขที่ใบอนุญาต ฯ"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <div className={styles.inputWrapper}>
                      <Lock className={styles.inputIcon} size={20} />
                      <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <EyeOff className={styles.eyeIcon} size={20} />
                    </div>
                  </div>

                  {loginError && <p className={styles.errorMessage}>{loginError}</p>}

                  <button type="submit" className={styles.submitBtn}>
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
              </>
            ) : (
              <div className={styles.otpContent}>
                <h2 className={styles.otpTitle}>ยืนยันรหัส OTP</h2>
                <p className={styles.otpSubtitle}>
                  กรอกรหัสยืนยัน OTP ที่ส่งไปยังเบอร์โทรศัพท์มือถือ<br />
                  XXX-XXX-0440 รหัสอ้างอิง : A0990
                  <br />
                  <span style={{ fontSize: "0.8rem", color: "#666" }}>
                    (Mock OTP: {MOCK_OTP})
                  </span>
                </p>

                <div className={styles.otpInputGroup}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      maxLength={1}
                      className={styles.otpInput}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                    />
                  ))}
                </div>

                {otpError && <p className={styles.otpErrorMessage}>{otpError}</p>}

                <button type="button" className={styles.submitBtn} onClick={handleVerifyOtp}>
                  ยืนยัน OTP
                </button>

                <p className={styles.resendText}>
                  ยังไม่ได้รับรหัส? <span className={styles.resendLink}>ส่งรหัสอีกครั้ง</span>
                </p>

                <div
                  className={styles.backToLogin}
                  onClick={() => {
                    setStep("login");
                    setOtpError("");
                    setOtp(["", "", "", "", "", ""]);
                  }}
                >
                  <ChevronLeft size={20} />
                  <span>กลับหน้าเข้าสู่ระบบ</span>
                </div>
              </div>
            )}
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

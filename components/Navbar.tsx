"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getWebSettings } from "@/lib/api";

const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "เกี่ยวกับองค์กร", href: "/about" },
    { name: "หน่วยงาน", href: "/department", hasDropdown: true },
    { name: "งานบริการ", href: "/service" },
    { name: "งานประชุม", href: "/event" },
    { name: "ข่าวสาร", href: "/news" },
    { name: "กฎหมาย", href: "/laws" },
    { name: "บริการอื่นๆ", href: "/other-service" },
    { name: "ติดต่อ", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [lang, setLang] = useState("TH");
    const [webSettings, setWebSettings] = useState<any>(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const settings = await getWebSettings();
                setWebSettings(settings);
            } catch (error) {
                console.error('Error fetching web settings:', error);
            }
        };
        fetchSettings();
    }, []);

    return (
        <nav className={`${styles.navbar} ThaiFont`}>
            {/* Top Banner (Green) */}
            <div className={styles.topBanner}>
                <div className={styles.brandArea}>
                    <Image
                        src={webSettings?.logoPath || "/images/icon.jpg"}
                        alt="Pharmacy Council Logo"
                        width={40}
                        height={40}
                        className={styles.logo}
                    />
                    <div>
                        <h1 className={`${styles.brandTitle} ThaiFont`}>
                            {webSettings?.siteNameTh || "สภาเภสัชกรรม"}
                        </h1>
                        <p className={`${styles.brandSubtitle} ThaiFont`}>
                            {webSettings?.siteNameEn || "THE PHARMACY COUNCIL OF THAILAND"}
                        </p>
                    </div>
                    {pathname === "/login" && (
                        <>
                            <div className={styles.navDivider}></div>
                            <h2 className={`${styles.systemName} ThaiFont`}>
                                ระบบบริการผู้ประกอบวิชาชีพเภสัชกรรม
                            </h2>
                        </>
                    )}
                </div>

                <div className={styles.actionsArea}>
                    {/* Language Switcher */}
                    <div className={styles.langSwitch} onClick={() => setLang(lang === "TH" ? "EN" : "TH")}>
                        <svg
                            className={styles.langSwitchIcon}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span className={styles.langSwitchText}>{lang}</span>
                        <svg
                            className={styles.langSwitchArrow}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Login Button - Hide on login page */}
                    {pathname !== "/login" && (
                        <button 
                            className={`${styles.loginBtn} ThaiFont`}
                            onClick={() => router.push("/login")}
                        >
                            เข้าสู่ระบบเภสัชกร
                        </button>
                    )}
                </div>
            </div>

            {/* Lower Nav (White) */}
            <div className={styles.lowerNav}>
                <div className={styles.navContainer}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${isActive ? styles.navItemActive : styles.navItem} ThaiFont`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <svg
                                        className={styles.navIcon}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                                {/* Underline for Active */}
                                {isActive && (
                                    <div className={styles.activeIndicator} />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

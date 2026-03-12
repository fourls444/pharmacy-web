import AboutSidebar from "@/components/about/AboutSidebar";
import styles from "./about.module.css";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.pageWrapper}>
            {/* Banner */}
            <header className={styles.banner}>
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        
                    </div>
                </div>
            </header>

            {/* Sidebar + Content */}
            <div className={styles.layoutContainer}>
                <AboutSidebar />
                <main className={styles.contentArea}>
                    {children}
                </main>
            </div>
        </div>
    );
}

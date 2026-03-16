import { getHomeContent, getWebSettings } from "@/lib/api";
import BannerCarousel from "@/components/home/BannerCarousel";
import LicenseSearch from "@/components/home/LicenseSearch";
import HomeStats from "@/components/home/HomeStats";
import PharmacyCarousel from "@/components/home/PharmacyCarousel";
import HomeEvents from "@/components/home/HomeEvents";
import MemberBanner from "@/components/home/MemberBanner";
import PublicOnlySection from "@/components/home/PublicOnlySection";
import PublicServiceSection from "@/components/home/PublicServiceSection";
import PharmacistServiceSection from "@/components/home/PharmacistServiceSection";
import PharmacistRolesSection from "@/components/home/PharmacistRolesSection";
import OtherServiceSection from "@/components/home/OtherServiceSection";
import styles from "./home.module.css";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [homeContent, settings] = await Promise.all([
    getHomeContent(),
    getWebSettings(),
  ]);

  const activeBanners = (homeContent.banners || [])
    .filter(b => b.active)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      {/* === Banner Carousel 16:9 === */}
      <BannerCarousel banners={activeBanners} slogan={settings.slogan} />

      {/* === Member Welcome Banner (visible only when logged in) === */}
      <MemberBanner />

      {/* === ค้นหารายชื่อ (public only) === */}
      <PublicOnlySection>
        <section className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <LicenseSearch />
          </div>
        </section>
      </PublicOnlySection>

      {/* === บริการประชาชน (public only) === */}
      <PublicServiceSection />

      {/* === บริการเภสัชกร === */}
      <PharmacistServiceSection />

      {/* === บทบาทหน้าที่หลักของเภสัช === */}
      <PharmacistRolesSection />

      {/* === 6 สาขาวิชาชีพเภสัชกร === */}
      <PharmacyCarousel />
      
      {/* === สถิติ === */}
      <HomeStats />

      {/* === การประชุม === */}
      <HomeEvents />

      {/* === บริการอื่นๆ (Pharmacist only) === */}
      <OtherServiceSection />

    </div>
  );
}

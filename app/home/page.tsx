import BannerCarousel from "@/components/home/BannerCarousel";
import LicenseSearch from "@/components/home/LicenseSearch";
import HomeStats from "@/components/home/HomeStats";
import PharmacyCarousel from "@/components/home/PharmacyCarousel";
import HomeEvents from "@/components/home/HomeEvents";
import MemberBanner from "@/components/member/home/MemberBanner";
import PublicOnlySection from "@/components/home/PublicOnlySection";
import MemberOnlySection from "@/components/member/home/MemberOnlySection";
import PublicServiceSection from "@/components/home/PublicServiceSection";
import PharmacistServiceSection from "@/components/home/PharmacistServiceSection";
import PharmacistRolesSection from "@/components/home/PharmacistRolesSection";
import OtherServiceSection from "@/components/member/home/OtherServiceSection";
import HomeNewsSection from "@/components/home/HomeNewsSection";
import MemberHighlightSection from "@/components/member/home/MemberHighlightSection";
import PopularServices from "@/components/member/service/PopularServices";
import { getHomeContent, getWebSettings, getNews, getPopularServices } from "@/lib/api";
import styles from "./home.module.css";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [homeContent, settings, allNews, popularServices] = await Promise.all([
    getHomeContent(),
    getWebSettings(),
    getNews(),
    getPopularServices(),
  ]);

  const highlights = allNews.filter(n => n.isHighlight && n.status === 'published');
  const regularNews = allNews.filter(n => !n.isHighlight && n.status === 'published');

  const activeBanners = (homeContent.banners || [])
    .filter(b => b.active)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      {/* === Banner Carousel 16:9 === (Everyone) */}
      <BannerCarousel banners={activeBanners} slogan={settings.slogan} />

      {/* ========================================== */}
      {/* ===           MEMBER VIEW              === */}
      {/* ========================================== */}
      <MemberOnlySection>
        {/* 1. สถานะของฉัน */}
        <MemberBanner />

        {/* 2. บริการยอดนิยม (Short title) */}
        <PharmacistServiceSection services={popularServices} />

        {/* 3. การประชุม */}
        <HomeEvents />

        {/* 4. เรื่องเด่น (Highlights only) */}
        <MemberHighlightSection highlights={highlights} />

        {/* 5. บริการอื่นๆ */}
        <OtherServiceSection />
      </MemberOnlySection>

      {/* ========================================== */}
      {/* ===           PUBLIC VIEW              === */}
      {/* ========================================== */}
      <PublicOnlySection>
        {/* 1. ค้นหารายชื่อ */}
        <section className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <LicenseSearch />
          </div>
        </section>

        {/* 2. บริการประชาชน */}
        <PublicServiceSection />

        {/* 3. บริการเภสัชกร */}
        <PharmacistServiceSection services={popularServices} />
        <PharmacistRolesSection />

        {/* 4. 6 สาขาวิชาชีพเภสัชกร */}
        <PharmacyCarousel />
        <HomeStats />

        {/* 5. การประชุม */}
        <HomeEvents />

        {/* 6. เรื่องเด่นและข่าวสาร (Full) */}
        <HomeNewsSection highlights={highlights} newsList={regularNews} />

        {/* ส่วนที่เหลือ (ถ้ามี) */}

      </PublicOnlySection>
    </div>
  );
}

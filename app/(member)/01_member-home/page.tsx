import BannerCarousel from "@/components/home/BannerCarousel";
import MemberBanner from "@/components/member/home/MemberBanner";
import MemberOnlySection from "@/components/member/home/MemberOnlySection";
import OtherServiceSection from "@/components/member/home/OtherServiceSection";
import MemberHighlightSection from "@/components/member/home/MemberHighlightSection";
import PopularServices from "@/components/member/service/PopularServices";
import HomeMeetings from "@/components/home/HomeMeetings";
import { getHomeContent, getPharmacistHomeContent, getWebSettings, getNews, getPopularServices } from "@/lib/api";
import styles from "./home.module.css";

export const dynamic = 'force-dynamic';

export default async function MemberHome() {
  const [homeContent, pharmacistContent, settings, allNews, popularServices] = await Promise.all([
    getHomeContent(),
    getPharmacistHomeContent(),
    getWebSettings(),
    getNews(),
    getPopularServices(),
  ]);

  const highlights = allNews.filter(n => n.isHighlight && n.status === 'published');

  const activeBanners = (homeContent.banners || [])
    .filter(b => b.active)
    .sort((a, b) => a.order - b.order);

  const pharmacistBanners = (pharmacistContent.banners || [])
    .filter(b => b.active)
    .sort((a, b) => a.order - b.order);

  return (
    <div className={styles.page}>
      <BannerCarousel
        banners={activeBanners}
        pharmacistBanners={pharmacistBanners}
        slogan={settings.slogan}
      />

      <MemberOnlySection>
        {/* 1. สถานะของฉัน */}
        <MemberBanner />

        {/* 2. บริการยอดนิยม */}
        <PopularServices services={popularServices} />

        {/* 3. การประชุม */}
        <HomeMeetings />

        {/* 4. เรื่องเด่น (Highlights only) */}
        <MemberHighlightSection highlights={highlights} />

        {/* 5. บริการอื่นๆ */}
        <OtherServiceSection />
      </MemberOnlySection>
    </div>
  );
}

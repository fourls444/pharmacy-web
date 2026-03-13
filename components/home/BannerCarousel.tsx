'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import styles from './BannerCarousel.module.css';

interface BannerItem {
  id: string;
  url: string;
  title: string;
  clickable: boolean;
  linkUrl: string;
}

interface BannerCarouselProps {
  banners: BannerItem[];
  slogan?: string | null;
}

export default function BannerCarousel({ banners: publicBanners, slogan }: BannerCarouselProps) {
  const { isLoggedIn } = useAuth();
  const [current, setCurrent] = useState(0);

  const memberBanners: BannerItem[] = [
    {
      id: 'member-banner-1',
      url: '/images/home/member/Section.png',
      title: 'Member Exclusive Banner',
      clickable: false,
      linkUrl: ''
    }
  ];

  const activeBanners = isLoggedIn ? memberBanners : publicBanners;

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % activeBanners.length);
  }, [activeBanners.length]);

  const prev = useCallback(() => {
    setCurrent(prev => (prev - 1 + activeBanners.length) % activeBanners.length);
  }, [activeBanners.length]);

  // Auto-slide every 5s
  useEffect(() => {
    if (activeBanners.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, activeBanners.length]);

  if (activeBanners.length === 0) {
    return (
      <section className={styles.banner}>
        <div className={styles.placeholder} />
        {slogan && (
          <div className={styles.overlay}>
            <p className={styles.slogan}>"{slogan}"</p>
          </div>
        )}
      </section>
    );
  }

  return (
    <section className={styles.banner}>
      {/* Slides */}
      <div className={styles.slides}>
        {activeBanners.map((b, i) => {
          const isActive = i === current;
          const Wrapper = b.clickable && b.linkUrl ? 'a' : 'div';
          const wrapperProps = b.clickable && b.linkUrl
            ? { href: b.linkUrl, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <Wrapper
              key={b.id}
              className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
              {...wrapperProps}
            >
              <Image
                src={b.url}
                alt={b.title || 'Banner'}
                fill
                priority={i === 0}
                className={styles.slideImage}
              />
            </Wrapper>
          );
        })}
      </div>

      {/* Overlay (slogan) */}
      {slogan && (
        <div className={styles.overlay}>
          <p className={styles.slogan}>"{slogan}"</p>
        </div>
      )}

      {/* Arrows */}
      {activeBanners.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </>
      )}

      {/* Dots */}
      {activeBanners.length > 1 && (
        <div className={styles.dots}>
          {activeBanners.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

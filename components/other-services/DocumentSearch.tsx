'use client';

import { useState } from 'react';
import { Search, ListFilter, ChevronDown } from 'lucide-react';
import styles from './DocumentSearch.module.css';

const searchCategories = [
  { value: 'all', label: 'ทั้งหมด' },
  { value: 'forms', label: 'ฟอร์ม' },
  { value: 'manuals', label: 'คู่มือ' },
];

export default function DocumentSearch() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedCategory = searchCategories.find(c => c.value === category)!;

  const handleSearch = () => {
    if (!query.trim() && category === 'all') return;
    console.log('Search Document:', category, query);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.title} ThaiFont`}>ค้นหาเอกสาร</h2>

      <div className={styles.searchRow}>
        {/* Dropdown */}
        <div className={styles.dropdown}>
          <button
            type="button"
            className={`${styles.dropdownButton} ThaiFont`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <ListFilter size={18} className={styles.dropdownIcon} strokeWidth={1.5} />
            <span>{selectedCategory.label}</span>
            <ChevronDown size={14} className={styles.chevron} strokeWidth={1.5} />
          </button>

          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {searchCategories.map(cat => (
                <li key={cat.value}>
                  <button
                    type="button"
                    className={`${styles.dropdownItem} ThaiFont ${cat.value === category ? styles.dropdownItemActive : ''}`}
                    onClick={() => {
                      setCategory(cat.value);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search input */}
        <div className={styles.inputWrap}>
          <Search size={18} className={styles.inputIcon} strokeWidth={1.5} />
          <input
            type="text"
            className={`${styles.input} ThaiFont`}
            placeholder="ค้นหาจาก keyword"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
          />
        </div>

        {/* Search button */}
        <button
          type="button"
          className={`${styles.searchButton} ThaiFont`}
          onClick={handleSearch}
        >
          ค้นหา
        </button>
      </div>
    </div>
  );
}

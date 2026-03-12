import { getLawsByCategory } from "@/lib/api";
import LawsContent from "@/components/laws/LawsContent";
import styles from "./laws.module.css";

export const dynamic = 'force-dynamic';

const CATEGORY_KEYS = ["law1", "law2", "law3", "law4", "law5", "law6", "law7"];

export default async function LawsPage() {
  // Fetch all categories in parallel
  const results = await Promise.all(
    CATEGORY_KEYS.map((key) => getLawsByCategory(key))
  );

  const allLaws: Record<string, any[]> = {};
  CATEGORY_KEYS.forEach((key, idx) => {
    allLaws[key] = results[idx];
  });

  return (
    <div className={styles.pageWrapper}>
      {/* Banner */}
      <header className={styles.banner}></header>

      {/* Laws Content (Client Component) */}
      <LawsContent allLaws={allLaws} />
    </div>
  );
}

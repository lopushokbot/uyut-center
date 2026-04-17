import RoomsPageContentClient from "../../components/RoomsPageContentClient";
import SiteShell from "../../components/SiteShell";
import JsonLd from "../../components/JsonLd";
import { ROOM_COLLECTION } from "../../data/rooms";
import { getPageMetadata } from "../../lib/metadata";
import { breadcrumbSchema, roomOffersSchema } from "../../lib/schema";
import styles from "../../components/RoomsPage.module.css";

export const metadata = getPageMetadata("rooms");

const BREADCRUMBS = [
  { name: "Главная", path: "/" },
  { name: "Номера", path: "/prices_and_rooms/" },
];

const BREAKFAST_NOTE =
  "В стоимость проживания включён завтрак по системе «Шведский стол»: с 7:00 до 10:00 по будням и с 8:00 до 11:00 по выходным в ресторане «Метрополь».";

const QUICK_FACTS = [
  { value: "7", label: "категорий номеров" },
  { value: "Wi‑Fi", label: "во всех категориях" },
  { value: "Завтрак", label: "включён в стоимость" },
];

export default function RoomsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[breadcrumbSchema(BREADCRUMBS), ...roomOffersSchema()]}
      />
      <section className={`page-hero ${styles.hero}`}>
        <div className={`page-hero-bg ${styles.heroBg}`} />
        <div className="page-hero-content page-container">
          <div className="hero-stars page-eyebrow">
            Размещение в центре Клинцов
          </div>
          <h1 className="page-hero-title">Снять номер в гостинице «Уют»</h1>
          <p className="page-hero-desc">
            Семь категорий номеров — от одноместных до двухкомнатных люксов.
            Завтрак по системе «Шведский стол» и бесплатный Wi‑Fi уже включены
            в стоимость.
          </p>
          <div className={styles.facts}>
            {QUICK_FACTS.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoomsPageContentClient
        breakfastNote={BREAKFAST_NOTE}
        rooms={ROOM_COLLECTION}
      />
    </SiteShell>
  );
}

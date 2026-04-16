import RoomsPageContentClient from "../../components/RoomsPageContentClient";
import SiteShell from "../../components/SiteShell";
import { ROOM_WIDGET_NAMES } from "../../data/roomWidgetNames";
import { getPageMetadata } from "../../lib/metadata";
import styles from "../../components/RoomsPage.module.css";

export const metadata = getPageMetadata("rooms");

const BREAKFAST_NOTE =
  "В стоимость проживания включён завтрак по системе «Шведский стол»: с 7:00 до 10:00 по будням и с 8:00 до 11:00 по выходным в ресторане «Метрополь».";

const ROOM_COLLECTION = [
  {
    id: "single",
    name: "Одноместный",
    widgetRoomName: ROOM_WIDGET_NAMES.single,
    subtitle: "Для одной персоны",
    image: "/images/rooms/single/01.jpg",
    gallery: ["/images/rooms/single/01.jpg", "/images/rooms/single/02.jpg"],
    summary:
      "Компактный и спокойный номер для деловой поездки или короткого отдыха.",
    description:
      "Уютный одноместный номер располагает всем необходимым для комфортного отдыха: полутораспальной кроватью 140×200, ковровым покрытием, современной мебелью, шкафом, телевизором, холодильником, набором для чая и кофе, а также бесплатным Wi‑Fi.",
    details:
      "Ванная комната оснащена душевой кабиной, феном, комплектом полотенец и косметическими принадлежностями.",
    features: [
      "Кровать 140×200",
      "Душевая кабина",
      "Телевизор",
      "Холодильник",
      "Чай/кофе",
      "Wi‑Fi",
    ],
    price: "от 2 000 ₽",
  },
  {
    id: "comfort",
    name: "Двухместный комфорт",
    widgetRoomName: ROOM_WIDGET_NAMES.comfort,
    subtitle: "Класс комфорт",
    image: "/images/rooms/comfort/01.jpg",
    gallery: [
      "/images/rooms/comfort/01.jpg",
      "/images/rooms/comfort/02.jpg",
      "/images/rooms/comfort/03.jpg",
    ],
    summary:
      "Удобный номер с двумя раздельными кроватями для пары гостей или коллег.",
    description:
      "Уютный двухместный номер оснащён двумя раздельными кроватями 90×200, ковровым покрытием и современной мебелью. В номере есть шкаф для одежды, телевизор, холодильник, набор для чая и кофе и бесплатный Wi‑Fi.",
    details:
      "Ванная комната укомплектована душевой кабиной, феном, полотенцами и косметическими принадлежностями.",
    features: [
      "2 кровати 90×200",
      "Душевая кабина",
      "Телевизор",
      "Холодильник",
      "Чай/кофе",
      "Wi‑Fi",
    ],
    price: "от 2 800 ₽",
  },
  {
    id: "business",
    name: "Двухместный бизнес",
    widgetRoomName: ROOM_WIDGET_NAMES.business,
    subtitle: "Бизнес-класс",
    image: "/images/rooms/business/01.jpg",
    gallery: [
      "/images/rooms/business/01.jpg",
      "/images/rooms/business/02.jpg",
      "/images/rooms/business/03.jpg",
      "/images/rooms/business/04.jpg",
    ],
    summary:
      "Более просторный формат для тех, кому нужен комфорт и рабочий ритм.",
    description:
      "Просторный и уютный двухместный номер в тёплых тонах подходит как для отдыха, так и для работы. Оснащён двумя раздельными кроватями 90×200, шкафом, телевизором, холодильником, набором для чая и кофе и бесплатным Wi‑Fi.",
    details:
      "Ванная комната включает душевую кабину, фен, комплект полотенец и косметические принадлежности.",
    features: [
      "2 кровати 90×200",
      "Просторная планировка",
      "Телевизор",
      "Холодильник",
      "Чай/кофе",
      "Wi‑Fi",
    ],
    price: "от 3 200 ₽",
  },
  {
    id: "luxe",
    name: "Люкс",
    widgetRoomName: ROOM_WIDGET_NAMES.luxe,
    subtitle: "Двухкомнатный номер",
    image: "/images/rooms/luxe/01.jpg",
    gallery: [
      "/images/rooms/luxe/01.jpg",
      "/images/rooms/luxe/02.jpg",
      "/images/rooms/luxe/03.jpg",
      "/images/rooms/luxe/04.jpg",
    ],
    summary: "Самый комфортный вариант с отдельной гостиной и спальней.",
    description:
      "Комфортабельный двухкомнатный номер с гостиной и спальней. Внутри двуспальная кровать 180×200, ковровое покрытие, современная мебель, шкаф для одежды, два телевизора и холодильник.",
    details:
      "Ванная комната оснащена душевой кабиной, феном, комплектом полотенец, косметическими принадлежностями, халатами и тапочками.",
    features: [
      "2 комнаты",
      "Кровать 180×200",
      "2 телевизора",
      "Холодильник",
      "Халаты и тапочки",
      "Wi‑Fi",
    ],
    price: "от 3 500 ₽",
  },
  {
    id: "junior",
    name: "Джуниор Сьют",
    widgetRoomName: ROOM_WIDGET_NAMES.junior,
    subtitle: "Дополнительное место",
    image: "/images/rooms/junior-suite/01.jpg",
    gallery: [
      "/images/rooms/junior-suite/01.jpg",
      "/images/rooms/junior-suite/02.jpg",
      "/images/rooms/junior-suite/03.jpg",
    ],
    summary:
      "Однокомнатный номер для пары гостей с возможностью дополнительного размещения.",
    description:
      "Номер категории «Джуниор Сьют» рассчитан на двухместное размещение и допускает дополнительное место. Оснащён большой кроватью, диваном, шкафом для одежды, телевизором и холодильником.",
    details:
      "Ванная комната включает душевую кабину, фен, комплект полотенец, косметические принадлежности, халаты и тапочки.",
    features: [
      "Кровать 160×200",
      "Диван",
      "Доп. место",
      "Телевизор",
      "Халаты и тапочки",
      "Wi‑Fi",
    ],
    price: "от 3 500 ₽",
  },
  {
    id: "triple",
    name: "Трёхместный",
    widgetRoomName: ROOM_WIDGET_NAMES.triple,
    subtitle: "Для двух или трёх гостей",
    image: "/images/rooms/triple/01.jpg",
    gallery: [
      "/images/rooms/triple/01.jpg",
      "/images/rooms/triple/02.jpg",
      "/images/rooms/triple/03.jpg",
    ],
    summary: "Практичный вариант для небольшой компании или семейной поездки.",
    description:
      "Уютный трёхместный номер подходит тем, кто путешествует вдвоём или втроём. В номере три раздельные кровати 90×200, ковровое покрытие, современная мебель, шкаф, телевизор, холодильник, набор для чая и кофе и бесплатный Wi‑Fi.",
    details:
      "Ванная комната оснащена душевой кабиной, феном, полотенцами и косметическими принадлежностями.",
    features: [
      "3 кровати 90×200",
      "Душевая кабина",
      "Телевизор",
      "Холодильник",
      "Чай/кофе",
      "Wi‑Fi",
    ],
    price: "по запросу",
  },
  {
    id: "halfluxe",
    name: "Полулюкс",
    widgetRoomName: ROOM_WIDGET_NAMES.halfluxe,
    subtitle: "Повышенный комфорт",
    image: "/images/rooms/half-luxe/01.jpg",
    gallery: [
      "/images/rooms/half-luxe/01.jpg",
      "/images/rooms/half-luxe/02.jpg",
    ],
    summary:
      "Однокомнатный номер с большой двуспальной кроватью и расширенным набором удобств.",
    description:
      "Полулюкс оборудован большой двуспальной кроватью 180×200, ковровым покрытием, современной мебелью, шкафом для одежды, телевизором и холодильником.",
    details:
      "Ванная комната включает душевую кабину, фен, комплект полотенец, косметические принадлежности, халаты и тапочки.",
    features: [
      "Кровать 180×200",
      "Телевизор",
      "Холодильник",
      "Душевая кабина",
      "Халаты и тапочки",
      "Wi‑Fi",
    ],
    price: "от 3 200 ₽",
  },
];

const QUICK_FACTS = [
  { value: "7", label: "категорий номеров" },
  { value: "Wi‑Fi", label: "во всех категориях" },
  { value: "Завтрак", label: "включён в стоимость" },
];

export default function RoomsPage() {
  return (
    <SiteShell>
      <section className={`page-hero ${styles.hero}`}>
        <div className={`page-hero-bg ${styles.heroBg}`} />
        <div className="page-hero-content page-container">
          <div className="hero-stars page-eyebrow">
            Размещение в центре Клинцов
          </div>
          <h1 className="page-hero-title">Снять номер в гостинице «Уют»</h1>
          <p className="page-hero-desc">
            Подобрали страницу под реальный номерной фонд из старого сайта: от
            одноместных вариантов до люкса и семейного формата.
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

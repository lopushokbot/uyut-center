import { SITE_URL, SITE_NAME, SOCIAL_LINKS } from "../data/siteData";
import { REVIEWS } from "../data/hotelData";
import { ROOM_COLLECTION } from "../data/rooms";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "ул. К. Маркса, д. 1",
  addressLocality: "Клинцы",
  addressRegion: "Брянская область",
  postalCode: "243140",
  addressCountry: "RU",
};

const GEO = {
  "@type": "GeoCoordinates",
  latitude: 52.749840,
  longitude: 32.235271,
};

const PHONE = "+7-930-722-48-88";
const EMAIL = "yut.klintsi@yandex.ru";
const IMAGE_URL = `${SITE_URL}/images/about/hotel-uyut.jpg`;
const OG_IMAGE_URL = `${SITE_URL}/images/og-cover.jpg`;

const SAME_AS = [
  SOCIAL_LINKS.yandexBusiness.url,
  SOCIAL_LINKS.yandexMaps.url,
  SOCIAL_LINKS.telegram.url,
].filter(Boolean);

const AMENITIES = [
  "Бесплатный Wi-Fi",
  "Бесплатная парковка",
  "Ресторан",
  "Сауна",
  "Круглосуточная стойка регистрации",
  "Завтрак шведский стол",
  "Бесплатный трансфер от Ж/Д вокзала",
  "Конференц-зал",
  "Кондиционер",
  "Холодильник в номере",
  "Телевизор",
  "Душевая кабина",
];

function aggregateRating() {
  if (!REVIEWS.length) return undefined;
  const sum = REVIEWS.reduce((acc, r) => acc + (r.rating || 5), 0);
  const value = (sum / REVIEWS.length).toFixed(1);
  return {
    "@type": "AggregateRating",
    ratingValue: value,
    reviewCount: REVIEWS.length,
    bestRating: 5,
    worstRating: 1,
  };
}

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE_URL}/#hotel`,
    name: SITE_NAME,
    alternateName: "Hotel Uyut",
    description:
      "Трёхзвёздочная гостиница «Уют» в центре Клинцов: 7 категорий номеров, ресторан «Метрополь», сауна, бесплатная парковка и трансфер от Ж/Д вокзала.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: [IMAGE_URL, OG_IMAGE_URL],
    priceRange: "₽₽",
    starRating: {
      "@type": "Rating",
      ratingValue: 3,
      bestRating: 5,
    },
    address: ADDRESS,
    geo: GEO,
    sameAs: SAME_AS,
    checkinTime: "14:00",
    checkoutTime: "12:00",
    petsAllowed: false,
    numberOfRooms: 7,
    currenciesAccepted: "RUB",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "SBP"],
    amenityFeature: AMENITIES.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    aggregateRating: aggregateRating(),
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating || 5,
        bestRating: 5,
      },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: IMAGE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: ADDRESS,
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "ru-RU",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function roomOffersSchema() {
  return ROOM_COLLECTION.map((room) => {
    const priceMatch = /\d[\d\s]*/.exec(room.price || "");
    const priceValue = priceMatch ? Number(priceMatch[0].replace(/\s/g, "")) : null;
    return {
      "@context": "https://schema.org",
      "@type": "HotelRoom",
      "@id": `${SITE_URL}/prices_and_rooms/#${room.id}`,
      name: `${room.name} — Гостиница «Уют»`,
      description: room.summary || room.description,
      url: `${SITE_URL}/prices_and_rooms/#${room.id}`,
      image: room.gallery?.map((img) => `${SITE_URL}${img}`) ?? [],
      occupancy: {
        "@type": "QuantitativeValue",
        value: room.id === "triple" ? 3 : room.id === "single" ? 1 : 2,
      },
      amenityFeature: (room.features || []).map((feature) => ({
        "@type": "LocationFeatureSpecification",
        name: feature,
        value: true,
      })),
      isPartOf: { "@id": `${SITE_URL}/#hotel` },
      ...(priceValue && {
        offers: {
          "@type": "Offer",
          price: priceValue,
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/prices_and_rooms/#${room.id}`,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: priceValue,
            priceCurrency: "RUB",
            unitText: "ночь",
          },
        },
      }),
    };
  });
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export const HOTEL_FAQ = [
  {
    question: "Во сколько заселение и выселение?",
    answer:
      "Заселение с 14:00, выселение до 12:00. Стойка регистрации работает круглосуточно — заезд и выезд в любое время суток возможны по предварительной договорённости.",
  },
  {
    question: "Включён ли завтрак в стоимость проживания?",
    answer:
      "Да, в стоимость всех номеров входит завтрак по системе «Шведский стол» в ресторане «Метрополь»: с 7:00 до 10:00 по будням и с 8:00 до 11:00 по выходным.",
  },
  {
    question: "Есть ли бесплатная парковка?",
    answer:
      "Да, на территории гостиницы работает бесплатная охраняемая парковка с видеонаблюдением, доступная круглосуточно для всех гостей.",
  },
  {
    question: "Предоставляете ли трансфер от вокзала?",
    answer:
      "Да, бесплатный трансфер от и до железнодорожного вокзала Клинцы для гостей отеля. Организуется по предварительному запросу при бронировании.",
  },
  {
    question: "Есть ли в гостинице сауна?",
    answer:
      "Да, для гостей доступна сауна для отдыха и восстановления после дороги. Бронирование — на стойке регистрации.",
  },
  {
    question: "Какие способы оплаты принимаются?",
    answer:
      "Принимаем банковские карты, Систему Быстрых Платежей (СБП), банковский перевод для юридических лиц и наличные.",
  },
  {
    question: "Можно ли забронировать номер без предоплаты?",
    answer:
      "Да, при прямом бронировании через сайт или по телефону оплата производится при заселении. Бронирование без кредитной карты, бесплатная отмена.",
  },
  {
    question: "Где находится гостиница?",
    answer:
      "Гостиница расположена в центре Клинцов по адресу ул. К. Маркса, 1 — в 4 минутах пешком от Центральной площади и рядом с главными достопримечательностями города.",
  },
];

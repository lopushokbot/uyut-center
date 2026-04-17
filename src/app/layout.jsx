import "./globals.css";
import JsonLd from "../components/JsonLd";
import { SITE_NAME, SITE_URL } from "../data/siteData";
import {
  hotelSchema,
  organizationSchema,
  websiteSchema,
} from "../lib/schema";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — трёхзвёздочная гостиница в Клинцах`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Гостиница «Уют» в центре Клинцов: 7 категорий номеров, ресторан «Метрополь», сауна, бесплатная парковка и трансфер. Завтрак включён.",
  keywords: [
    "гостиница Клинцы",
    "отель Клинцы",
    "Уют Клинцы",
    "снять номер Клинцы",
    "гостиница центр Клинцы",
    "трёхзвёздочная гостиница Клинцы",
    "ресторан Метрополь Клинцы",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "/",
    languages: { "ru-RU": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — трёхзвёздочная гостиница в Клинцах`,
    description:
      "Гостиница «Уют» в центре Клинцов: 7 категорий номеров, ресторан, сауна, бесплатная парковка и трансфер.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Гостиница «Уют» — трёхзвёздочный отель в центре Клинцов",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Трёхзвёздочная гостиница в центре Клинцов. Номера, ресторан, сауна, трансфер.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/fonts/cormorant-garamond-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/raleway.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="geo.region" content="RU-BRY" />
        <meta name="geo.placename" content="Клинцы" />
        <meta name="geo.position" content="52.749840;32.235271" />
        <meta name="ICBM" content="52.749840, 32.235271" />
        <JsonLd
          data={[organizationSchema(), websiteSchema(), hotelSchema()]}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

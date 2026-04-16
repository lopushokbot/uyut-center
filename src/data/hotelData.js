import { ROOM_WIDGET_NAMES } from "./roomWidgetNames";

export const ROOMS = [
  {
    id: 1,
    name: "Одноместный",
    widgetRoomName: ROOM_WIDGET_NAMES.single,
    desc: "Уютный номер с полутораспальной кроватью, идеальный для деловых поездок.",
    price: "от 2 000 ₽",
    features: ["22 м²", "Wi-Fi", "Завтрак"],
    imgUrl:
      "https://uyut-centr.ru/wp-content/uploads/2021/06/одноместный-5-scaled.jpg",
    gradient: "linear-gradient(135deg, #8B7355 0%, #C4A97D 50%, #A0896C 100%)",
    emoji: "🛏️",
  },
  {
    id: 2,
    name: "Комфорт",
    widgetRoomName: ROOM_WIDGET_NAMES.comfort,
    desc: "Двухместный номер класса комфорт с двумя раздельными кроватями и мягкой зоной.",
    price: "от 2 800 ₽",
    features: ["28 м²", "Wi-Fi", "Завтрак", "Мини-бар"],
    imgUrl:
      "https://uyut-centr.ru/wp-content/uploads/2021/06/Двухместный-комфорт-7-scaled.jpg",
    gradient: "linear-gradient(135deg, #6B5B4E 0%, #A89279 50%, #8C7A65 100%)",
    emoji: "🛋️",
  },
  {
    id: 3,
    name: "Бизнес",
    widgetRoomName: ROOM_WIDGET_NAMES.business,
    desc: "Просторный двухместный номер бизнес класса с рабочей зоной.",
    price: "от 3 200 ₽",
    features: ["32 м²", "Wi-Fi", "Завтрак", "Рабочий стол"],
    imgUrl:
      "https://uyut-centr.ru/wp-content/uploads/2021/06/Двухместный-бизнес-10-scaled.jpg",
    gradient: "linear-gradient(135deg, #5C5347 0%, #9E8E7A 50%, #7A6D5F 100%)",
    emoji: "💼",
  },
  {
    id: 4,
    name: "Полулюкс",
    widgetRoomName: ROOM_WIDGET_NAMES.halfluxe,
    desc: "Элегантный номер с большой двуспальной кроватью, халатами и тапочками.",
    price: "от 3 200 ₽",
    features: ["35 м²", "Wi-Fi", "Завтрак", "Халат"],
    imgUrl:
      "https://uyut-centr.ru/wp-content/uploads/2021/06/Полулюкс-8-scaled.jpg",
    gradient: "linear-gradient(135deg, #7B6B5A 0%, #BFA987 50%, #998468 100%)",
    emoji: "✨",
  },
  {
    id: 5,
    name: "Джуниор Сьют",
    widgetRoomName: ROOM_WIDGET_NAMES.junior,
    desc: "Номер с большой кроватью, диваном и дополнительным местом размещения.",
    price: "от 3 500 ₽",
    features: ["40 м²", "Wi-Fi", "Завтрак", "Диван"],
    imgUrl:
      "https://uyut-centr.ru/wp-content/uploads/2021/06/Семейный-4-scaled.jpg",
    gradient: "linear-gradient(135deg, #6E6054 0%, #B09A80 50%, #8D7B68 100%)",
    emoji: "🌟",
  },
  {
    id: 6,
    name: "Люкс",
    widgetRoomName: ROOM_WIDGET_NAMES.luxe,
    desc: "Двухкомнатный номер с гостиной, спальней, двумя ТВ. Максимум комфорта.",
    price: "от 3 500 ₽",
    features: ["48 м²", "Wi-Fi", "Завтрак", "2 комнаты"],
    imgUrl:
      "https://uyut-centr.ru/wp-content/uploads/2021/06/Люкс-10-scaled.jpg",
    gradient: "linear-gradient(135deg, #5A4E42 0%, #C4A97D 50%, #8B7355 100%)",
    emoji: "👑",
  },
];

export const OFFERS = [
  {
    title: "Конференц-зал",
    desc: "Современный зал для мероприятий и переговоров — 500 ₽/час.",
    icon: "🎤",
  },
  {
    title: "Молодожёнам",
    desc: "Свадьба в ресторане — номер «Люкс» на первую брачную ночь бесплатно!",
    icon: "💍",
  },
  {
    title: "Бесплатный трансфер",
    desc: "Трансфер от и до Ж/Д вокзала — бесплатно для всех гостей.",
    icon: "🚗",
  },
  {
    title: "День рождения —30%",
    desc: "В День Рождения скидка 30% на любой гостиничный номер.",
    icon: "🎂",
  },
];

export const ADVANTAGES = [
  {
    num: "01",
    text: "Гарантия лучшей цены — скидка 10% при бронировании на сайте",
  },
  { num: "02", text: "Бронирование без кредитной карты" },
  {
    num: "03",
    text: "Бесплатное повышение категории номера при наличии свободных",
  },
  { num: "04", text: "Бесплатная отмена бронирования" },
  { num: "05", text: "Скидка 10% в ресторане по меню à la carte" },
];

export const NAV_ITEMS = [
  { label: "Об отеле", href: "/about-us/" },
  { label: "Номера", href: "/prices_and_rooms/" },
  { label: "Ресторан", href: "/menu/" },
  { label: "Акции", href: "/disconts/" },
  { label: "Отзывы", href: "/reviews/" },
  { label: "Контакты", href: "/contact/" },
];

export const REVIEWS = [
  {
    text: "Прекрасная гостиница! Чистые и уютные номера, вежливый персонал, завтрак — отличный «шведский стол». Обязательно вернёмся!",
    author: "Анна К.",
    rating: 5,
  },
  {
    text: "Отличное расположение в центре города. Номер был тёплым и комфортным, всё необходимое есть. Рекомендую для деловых поездок.",
    author: "Дмитрий С.",
    rating: 5,
  },
  {
    text: "Останавливались с семьёй — всё понравилось. Очень вкусный ресторан, дети были в восторге от завтрака. Спасибо за гостеприимство!",
    author: "Елена М.",
    rating: 5,
  },
];

export const ABOUT_FEATURES = [
  "Бесплатный Wi-Fi",
  "Круглосуточная регистрация",
  "Шведский стол",
  "Бесплатная парковка",
  "Ресторан в отеле",
  "Конференц-зал",
  "Сауна",
];

export const PAYMENT_METHODS = [
  { icon: "💳", label: "Банковская карта" },
  { icon: "📱", label: "СБП" },
  { icon: "🏦", label: "Банковский перевод" },
  { icon: "💵", label: "Наличные" },
];

export const RESTAURANT_MENU_URL =
  "https://netmonet.co/tip/session?qrid=2e561695-6182-41b4-badd-3b4c8846714c&o=4";

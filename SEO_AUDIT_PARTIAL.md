# SEO Audit Partial

Дата сбора: 2026-03-23
Источник:

- HTTP-проверка публичных URL `uyut-centr.ru`
- локальные HTML-копии страниц из `/home/nick/projects/uyut-center/res`

## Кратко

- Все переданные URL ранее были подтверждены с ответом `HTTP 200`.
- Сайт работает на WordPress.
- `https://uyut-centr.ru/sitemap.xml` отдает `301` на `https://uyut-centr.ru/wp-sitemap.xml`.
- В локальной выгрузке удалось извлечь `title`, `canonical`, `robots`, `H1`, часть структуры заголовков, schema.org itemtypes и изображения.
- Во всех локальных HTML-файлах `meta description` не обнаружен.
- JSON-LD блоки `application/ld+json` в локальных копиях не обнаружены.
- Schema.org присутствует в виде microdata/itemtype, а не JSON-LD.
- В папке `/res` отсутствует локальная копия страницы `/about-us/`.

## URL Inventory

| URL | HTTP | Local HTML | Notes |
|---|---:|---|---|
| `https://uyut-centr.ru/` | 200 | yes | Главная, WordPress page id `660` |
| `https://uyut-centr.ru/about-us/` | 200 | no | Страница "Об отеле", WordPress page id `661` |
| `https://uyut-centr.ru/prices_and_rooms/` | 200 | yes | Страница "Номера", WordPress page id `1221` |
| `https://uyut-centr.ru/fun_and_services/` | 200 | yes | Страница "Услуги", WordPress page id `939` |
| `https://uyut-centr.ru/disconts/` | 200 | yes | Страница "Акции", WordPress page id `1088` |
| `https://uyut-centr.ru/menu/` | 200 | yes | Страница "Ресторан", WordPress page id `662` |
| `https://uyut-centr.ru/contact/` | 200 | yes | Страница "Контакты", WordPress page id `761` |
| `https://uyut-centr.ru/reviews/` | 200 | yes | Страница "Отзывы", WordPress page id `955` |
| `https://uyut-centr.ru/terms/` | 200 | yes | Политика конфиденциальности, WordPress page id `1149` |
| `https://uyut-centr.ru/terms-of-use/` | 200 | yes | Пользовательское соглашение, WordPress page id `1158` |

## Extracted Metadata

### `/`

- `title`: `Гостиница "Уют" – Трёхзвёздочная гостиница`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/`
- `H1`: `Гостиница «Уют»`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 7 unique
- `images with non-empty alt`: 0
- `local file`: `res/Гостиница _Уют_ – Трёхзвёздочная гостиница.html`

### `/about-us/`

- `local file`: not found in `/res`
- `status`: metadata not extracted from local HTML
- `note`: URL confirmed earlier by HTTP check, but page copy is missing from local export

### `/prices_and_rooms/`

- `title`: `Номера – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/prices_and_rooms/`
- `H1`: `Снять номер в гостинице "Уют"`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 9 unique
- `images with non-empty alt`: 0
- `local file`: `res/Номера – Гостиница _Уют_.html`

### `/fun_and_services/`

- `title`: `Услуги – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/fun_and_services/`
- `H1`: `Услуги`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 6 unique
- `images with non-empty alt`: 0
- `local file`: `res/Услуги – Гостиница _Уют_.html`

### `/disconts/`

- `title`: `Акции и специальные предложения – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/disconts/`
- `H1`: `Акции и специальные предложения`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 7 unique
- `images with non-empty alt`: 0
- `local file`: `res/Акции и специальные предложения – Гостиница _Уют_.html`

### `/menu/`

- `title`: `Ресторан – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/menu/`
- `H1`: `Ресторан`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 3 unique
- `images with non-empty alt`: 0
- `local file`: `res/Ресторан – Гостиница _Уют_.html`

### `/contact/`

- `title`: `Контакты – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/contact/`
- `H1`: not found
- `visible heading`: `Контакты` appears as `H2`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 2 unique
- `images with non-empty alt`: 0
- `local file`: `res/Контакты – Гостиница _Уют_.html`

### `/reviews/`

- `title`: `Отзывы – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/reviews/`
- `H1`: not found
- `visible heading`: `Отзывы` appears as `H2`
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 11 unique
- `images with non-empty alt`: 0
- `local file`: `res/Отзывы – Гостиница _Уют_.html`

### `/terms/`

- `title`: `Политика конфиденциальности – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/terms/`
- `H1`: not found
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 2 unique
- `images with non-empty alt`: 0
- `local file`: `res/Политика конфиденциальности – Гостиница _Уют_.html`

### `/terms-of-use/`

- `title`: `Пользовательское соглашение – Гостиница "Уют"`
- `meta description`: not found
- `robots`: `max-image-preview:large`
- `canonical`: `https://uyut-centr.ru/terms-of-use/`
- `H1`: not found
- `schema.org`: `WebPage`, `WPHeader`, `CreativeWork`, `WPFooter`, `SiteNavigationElement`
- `images`: 2 unique
- `images with non-empty alt`: 0
- `local file`: `res/Пользовательское соглашение – Гостиница _Уют_.html`

## Infrastructure Notes

### Sitemap

- Requested URL: `https://uyut-centr.ru/sitemap.xml`
- Result: `301 Moved Permanently`
- Redirect target: `https://uyut-centr.ru/wp-sitemap.xml`
- Final response on target: `200`

### Robots

- Requested URL: `https://uyut-centr.ru/robots.txt`
- Response: `200`
- `robots.txt` contents were not preserved in the local export

## HTTP Header Signals

На проверенных страницах были подтверждены следующие сигналы:

- `server: nginx/1.28.2`
- `content-type: text/html; charset=UTF-8`
- `link: <https://uyut-centr.ru/wp-json/>; rel="https://api.w.org/"`
- `link: <https://uyut-centr.ru/wp-json/wp/v2/pages/{id}>; rel="alternate"; title="JSON"; type="application/json"`
- `link: <https://uyut-centr.ru/?p={id}>; rel=shortlink`

## SEO Risks Observed

- `meta description` не найден ни в одной локальной HTML-копии.
- На нескольких страницах отсутствует `H1`; видимый главный заголовок оформлен как `H2`.
- Во всех локальных HTML-файлах у найденных изображений пустой `alt`.
- Отдельной локальной копии страницы `/about-us/` нет, значит перед миграцией её нужно обязательно дособрать.
- JSON-LD не найден; если на новом сайте будете улучшать SEO, стоит добавить структурированные данные явно.

## Migration Guidance

При миграции на Next.js желательно сохранить без изменений следующие URL:

- `/`
- `/about-us/`
- `/prices_and_rooms/`
- `/fun_and_services/`
- `/disconts/`
- `/menu/`
- `/contact/`
- `/reviews/`
- `/terms/`
- `/terms-of-use/`

Также важно сохранить:

- рабочий `sitemap.xml`
- корректный `robots.txt`
- `200` для существующих SEO-страниц
- `canonical` для каждой страницы
- текущие `title`
- текущие заголовки страниц
- постоянные редиректы, если какой-либо URL будет переименован

## Limits Of This Snapshot

Этот файл собран по локальным HTML-копиям и частичным HTTP-проверкам. Здесь нет:

- полного содержимого `robots.txt`
- содержимого `wp-sitemap.xml`
- полной карты внутренних ссылок
- отдельного разбора Open Graph / Twitter metadata, если они формируются динамически
- локальной копии страницы `/about-us/`

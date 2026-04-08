import { css } from "../styles/appStyles";
import { SITE_NAME, SITE_URL } from "../data/siteData";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description:
    "Гостиница «Уют» в центре Клинцов: комфортные номера, ресторан, трансфер, конференц-зал и круглосуточный приём гостей.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <style>{css}</style>
        {children}
      </body>
    </html>
  );
}

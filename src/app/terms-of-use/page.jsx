import LegalPage from "../../components/LegalPage";
import SiteShell from "../../components/SiteShell";
import { TERMS_OF_USE_TEXT } from "../../data/siteData";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("terms");

export default function TermsOfUsePage() {
  return (
    <SiteShell>
      <LegalPage
        title="Пользовательское соглашение"
        intro="Настоящее соглашение регулирует использование сайта гостиницы «Уют», материалов на нём и сервисов для отправки заявок и бронирования."
        sections={TERMS_OF_USE_TEXT}
      />
    </SiteShell>
  );
}

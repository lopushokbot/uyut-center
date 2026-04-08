import LegalPage from "../../components/LegalPage";
import SiteShell from "../../components/SiteShell";
import { PRIVACY_POLICY_TEXT } from "../../data/siteData";
import { getPageMetadata } from "../../lib/metadata";

export const metadata = getPageMetadata("privacy");

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalPage
        title="Политика конфиденциальности"
        intro="Документ описывает, какие данные обрабатываются при использовании сайта гостиницы «Уют» и как они применяются для связи с гостями и оформления бронирования."
        sections={PRIVACY_POLICY_TEXT}
      />
    </SiteShell>
  );
}

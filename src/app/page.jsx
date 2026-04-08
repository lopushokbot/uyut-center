import HomePageClient from "../components/HomePageClient";
import { getPageMetadata } from "../lib/metadata";

export const metadata = getPageMetadata("home");

export default function HomePage() {
  return <HomePageClient />;
}

import HeroSection from "./home/HeroSection";
import CampaignPreview from "./campaigns/CampaignPreview";
import AboutPreview from "./about/AboutPreview";
import DonationCategories from "./donate/DonationCategories";
import BlogPreview from "./blogs/BlogPreview";
import Volunteer from "./volunteer/Volunteer";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <CampaignPreview />
      <AboutPreview />
      <DonationCategories />
      <BlogPreview />
      <Volunteer />
    </main>
  );
}

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { ActivitiesSection } from '@/components/activities-section';
import { ClubsSection } from '@/components/clubs-section';
import { ClubMembersSection } from '@/components/club-members-section';
import { AchievementsSection } from '@/components/achievements-section';
import { EventsSection } from '@/components/events-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { AIChatbot } from '@/components/ai-chatbot';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <ActivitiesSection />
      <ClubsSection />
      <ClubMembersSection />
      <AchievementsSection />
      <EventsSection />
      <ContactSection />
      <Footer />
      <AIChatbot />
    </main>
  );
}

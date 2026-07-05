import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileOrderBar } from "@/components/layout/mobile-order-bar";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { WhyBrgrs } from "@/components/sections/why-brgrs";
import { SignatureBurgers } from "@/components/sections/signature-burgers";
import { IngredientStory } from "@/components/sections/ingredient-story";
import { Statement } from "@/components/sections/statement";
import { DeliveryPlatforms } from "@/components/sections/delivery-platforms";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { CustomerVoices } from "@/components/sections/customer-voices";
import { FAQ } from "@/components/sections/faq";
import { LocationsOverview } from "@/components/sections/locations-overview";
import { Location } from "@/components/sections/location";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <WhyBrgrs />
        <SignatureBurgers />
        <IngredientStory />
        <Statement />
        <DeliveryPlatforms />
        <Gallery />
        <Reviews />
        <CustomerVoices />
        <FAQ />
        <LocationsOverview />
        <Location />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}

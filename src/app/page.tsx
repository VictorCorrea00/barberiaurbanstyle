import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Professional from "@/components/sections/Professional";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import FeaturedVideo from "@/components/sections/FeaturedVideo";
import BookingAndLocation from "@/components/sections/BookingAndLocation";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-luxury-gold selection:text-black bg-luxury-black">
      <Hero />
      <About />
      <Services />
      <Professional />
      <Gallery />
      <FeaturedVideo />
      <Testimonials />
      <BookingAndLocation />
      <Footer />
    </main>
  );
}

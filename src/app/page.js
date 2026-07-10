import AboutUs from "@/components/AboutUs";
import Carousel from "@/components/Carousel";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Milestone from "@/components/Milestone";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CoverflowSlider from "@/components/CoverflowSlider";



export const metadata = {
  title: "Custom Software Development Solutions Company in Middle East",
  description:
    "Delivering custom software development solutions across the Middle East, including AI, cloud, mobile apps, and innovative business technologies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IT Services for Modern Businesses",
    description:
      "Web, Software, AI/ML, Cloud, IoT, and UX/UI services to help you build, scale, and innovate.",
    url: "/",
    images: [{ url: "/logowall.jpg" }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <CoverflowSlider
        items={[
          <div key="red" className="w-65 h-45 bg-red-500 rounded-xl" />,
          <div key="blue" className="w-65 h-45 bg-blue-500 rounded-xl" />,
          <div key="green" className="w-65 h-45 bg-green-500 rounded-xl" />,
        ]}

      />

      <Features />
      <AboutUs />
      <Carousel />
      <Process />
      <Services />
      <Milestone />
      <Testimonials />
      <FAQ />
    </>
  );
}

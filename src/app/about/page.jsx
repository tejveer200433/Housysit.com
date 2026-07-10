
import Link from "next/link";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import BlogCTA from "@/components/BlogCTA";
export const metadata = {
  title: "Expert Software & Technology Solutions | Houston Systems",
  description:
    "Houston Systems delivers expert software, AI, cloud, and technology solutions tailored to enhance efficiency, innovation, and business growth.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Expert Software & Technology Solutions | Houston Systems",
    description:
      "Houston Systems delivers expert software, AI, cloud, and technology solutions tailored to enhance efficiency, innovation, and business growth.",
    url: "/about",
    images: [{ url: "/aboutpage.jpg" }],
  },
};

export default function About() {
  return (
    <>
      {/* About Section */}
      <section className="bg-white min-h-screen w-full px-4 pt-12 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 text-2xl mb-2">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get to know Houston Systems
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            A gateway to understanding who we are, what we build, and how we empower businesses with cutting-edge IT and automation solutions.
          </p>
          <Link
  href="/contact"
  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition mb-8"
>
  Start Your Journey with Us
</Link>
          <div className="rounded-xl overflow-hidden max-w-4xl mx-auto mb-12">
            <Image
              src="/aboutpage.jpg"
              alt="Team working in office"
              width={2000}
              height={1125}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Logo grid i have made a chnge here which company 1..so on  */}
      

        {/* Section: Built on Innovation */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <p className="text-blue-600 font-medium mb-2">
              Houston Systems Through The Years
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
              Built on Innovation.{" "}
              <br className="hidden md:block" />
              Proven by Experience.
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              At Houston Systems, we don't just build software — we engineer scalable, adaptable solutions for real business needs. From enterprise automation to digital transformation, our team brings together decades of experience, technical expertise, and a passion for solving complex challenges.
            </p>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              We've worked alongside startups, established enterprises, and everything in between. Our approach is collaborative, transparent, and always focused on delivering measurable results.
            </p>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              As we continue to grow, our journey is defined not by numbers alone, but by the trust we’ve earned, the partnerships we’ve built, and the innovations we deliver every day.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-blue-600 text-2xl font-bold">2016</div>
                <div className="text-gray-500 text-xs">Launched</div>
              </div>
              <div>
                <div className="text-blue-600 text-2xl font-bold">10+</div>
                <div className="text-gray-500 text-xs">Sectors Served</div>
              </div>
              <div>
                <div className="text-blue-600 text-2xl font-bold">50+</div>
                <div className="text-gray-500 text-xs">Technologies mastered</div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/office.jpg"
              alt="Houston Systems office building"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="bg-white w-full px-4 pt-12 pb-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">What we do</p>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
            Building Smart, Scalable Digital Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            We design and develop custom software, websites, and IoT systems to help businesses grow and innovate seamlessly.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Row 1 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src="/feature1.png"
              alt="Web Development"
              className="rounded-lg mb-4 w-full h-32 object-cover"
            />
            <div className="font-semibold text-gray-900 mb-1">Web Development</div>
            <div className="text-gray-600 text-sm">
              Building responsive, secure, and high-performing websites that elevate your business online.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src="/feature2.png"
              alt="Software Solutions"
              className="rounded-lg mb-4 w-full h-32 object-cover"
            />
            <div className="font-semibold text-gray-900 mb-1">Software Solutions</div>
            <div className="text-gray-600 text-sm">
              Custom software solutions designed to streamline operations and boost productivity.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src="/feature3.png"
              alt="Mobile App Development"
              className="rounded-lg mb-4 w-full h-32 object-cover"
            />
            <div className="font-semibold text-gray-900 mb-1">Mobile App Development</div>
            <div className="text-gray-600 text-sm">
             Creating user-friendly mobile apps that enhance engagement and drive business growth.
            </div>
          </div>

          {/* Row 2 */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src="/feature4.png"
              alt="IoT Systems"
              className="rounded-lg mb-4 w-full h-32 object-cover"
            />
            <div className="font-semibold text-gray-900 mb-1">IoT Systems</div>
            <div className="text-gray-600 text-sm">
               Innovative IoT systems improving automation, efficiency, and operational control.
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src="/carousel1.png"
              alt="AI & Automation"
              className="rounded-lg mb-4 w-full h-32 object-cover"
            />
            <div className="font-semibold text-gray-900 mb-1">AI & Automation</div>
            <div className="text-gray-600 text-sm">
              AI and automation solutions transforming business processes and decision-making.

            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <img
              src="/about.png"
              alt="Hiring & Staff Augmentation"
              className="rounded-lg mb-4 w-full h-32 object-cover"
            />
            <div className="font-semibold text-gray-900 mb-1">Hiring & Staff Augmentation</div>
            <div className="text-gray-600 text-sm">
              Providing skilled professionals to strengthen teams and accelerate project delivery.
            </div>
          </div>
        </div>
      </section>

      {/* Who we are Section */}
      <section className="bg-white w-full px-4 pt-12 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-blue-600 font-medium mb-2">Who we are</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              A team of builders,
              <br className="hidden md:block" />
              thinkers, and problem-solvers.
            </h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Houston Systems Engineers, with hands-on software & systems engineering and real-world business experience, deliver solutions that work — from architecture to release, ideation to solution — built with a sharp mission and a relentless drive for results.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/feature1.png"
              alt="Team working"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="bg-white min-h-screen w-full px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/logowall.jpg"
              alt="Company logo montage"
              width={320}
              height={320}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-blue-600 font-medium mb-2">Our core values</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Heart Behind Every Solution We Build
            </h1>
            <p className="text-gray-600 mb-6">
              We believe that a strong set of values is the foundation of
              everything we do. Our core principles guide our decisions, shape
              our culture, and drive us toward meaningful impact. These values
              reflect who we are, how we work, and what we strive to become —
              both as individuals and as a team.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-start items-center gap-2"><CircleCheckBig className="text-green-500"/> Integrity and transparency in every action</li>
              <li className="flex justify-start items-center gap-2"><CircleCheckBig className="text-green-500"/> Innovation-driven approach to solving problems</li>
              <li className="flex justify-start items-center gap-2"><CircleCheckBig className="text-green-500"/> Accountability and ownership at all levels</li>
              <li className="flex justify-start items-center gap-2"><CircleCheckBig className="text-green-500"/> Respect for people, ideas, and diversity</li>
              <li className="flex justify-start items-center gap-2"><CircleCheckBig className="text-green-500"/> Empathy towards clients, users, and teammates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 w-full px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-blue-600 font-medium mb-2">Why choose us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Success Is Our Priority
          </h2>
          <p className="text-gray-600 mb-12">
            From idea to execution, we stay committed to building solutions that
            help you grow with confidence.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-2xl p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expertise That Delivers
              </h3>
              <p className="text-gray-600 mb-4">
                Our team of seasoned developers, designers, and engineers brings
                years of experience across industries to craft tailored digital
                solutions.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Read More →
              </a>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Client-First Approach
              </h3>
              <p className="text-gray-600 mb-4">
                From discovery to deployment, we work closely with you to ensure
                every solution meets your goals and expectations.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Read More →
              </a>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reliable & Scalable Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                We build future-ready platforms that adapt and scale with your
                growing business needs — no compromises.
              </p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:underline inline-flex items-center"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
          <a
  href="https://wa.me/917351689677?text=Hi%20Houston%20Systems,%0A%0AI%27m%20interested%20in%20your%20IT%20services.%20I%20would%20like%20to%20discuss%20my%20project%20with%20your%20team."
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
>
  Talk to Our Team
</a>
          </div>
        </div>
      </section>
      <BlogCTA />
    </>
  );
}

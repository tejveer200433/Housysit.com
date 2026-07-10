import { PhoneIcon, MapPinIcon, MailIcon, Facebook, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          <div className="lg:w-[40%]">
            <h3 className="text-lg font-semibold mb-6">Reach us</h3>
            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 mt-0.5 text-gray-400 flex-linear-0" />
                <span className="text-gray-300"><a href="tel:+919999126885">+91 99991 26885</a></span>
              </div>

              <div className="flex items-start gap-3">
                <MailIcon className="w-5 h-5 mt-0.5 text-gray-400 flex-linear-0" />
                <span className="text-gray-300"><a href="mailto:sk@houstonsystem.com">sk@houstonsystem.com</a></span>
              </div>

              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 mt-0.5 text-gray-400 flex-linear-0" />
                <div className="text-gray-300 leading-relaxed">
                  <a href="https://maps.app.goo.gl/s3ivkCzBine5FV4YA" target="_blank" rel="noopener noreferrer">
                    D 148, EPIP, Kasna, Surajpur Site V,<br />
                     Greater  Noida, Uttar Pradesh<br />
                              201310
                  </a>
                </div>
              </div>
            </div>
            <span className="mt-10 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-green-400 text-xs  tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              All Systems Operational
            </span>
          </div>

          <div className="lg:w-[30%]">
            <h3 className="text-lg font-semibold mb-6 ">Houston Systems</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-[30%]">
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms and Services
                </Link>
              </li>
              <li>
                <Link href="/terms-use" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          

        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <div className="flex items-center gap-2 text-gray-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">2025 Houston System. All right reserved</span>
            </div>

            <div className="flex items-center gap-6">
              <Image src="/logo.png" alt="Houston Logo" width={100} height={40} />

              <div className="flex items-center gap-3">

                <a
                  href="https://www.linkedin.com/company/houstonsystems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href="https://youtube.com/@houstonsystems952?si=yU14nePSEHDSqG3U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Youtube className="w-4 h-4 text-gray-400" />
                </a>

                <a
                  href="https://www.facebook.com/HoustonSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4 text-gray-400" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;

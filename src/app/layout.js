import ChatWidget from "../components/ui/ChatWidget";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import CTA from "../components/CTA";
import { ModalProvider } from "../context/ModalContext"; // Import the provider
import ModalAutoTrigger from "../components/ModalAutoTrigger"; // Import the auto-trigger component
import ThemeProvider from "../providers/ThemeProvider";
export const metadata = {
  metadataBase: new URL("https://www.housysit.com"),
  title: {
    default: "Houston Systems IT",
    template: "%s | Houston Systems IT",
  },
  description: "End-to-end IT services: Web, Software, AI/ML, Cloud, IoT, and UX/UI.",
  keywords: [
    "IT Services",
    "Software Development",
    "Web Development",
    "Cloud Services",
    "AI/ML",
    "IoT Systems",
    "UX/UI Design",
  ],
  openGraph: {
    title: "Houston Systems IT",
    description: "End-to-end IT services: Web, Software, AI/ML, Cloud, IoT, and UX/UI.",
    url: "/",
    siteName: "Houston Systems IT",
    images: [
      {
        url: "/logowall.jpg",
        width: 1200,
        height: 630,
        alt: "Houston Systems IT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston Systems IT",
    description: "End-to-end IT services: Web, Software, AI/ML, Cloud, IoT, and UX/UI.",
    images: ["/logowall.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.housysit.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className="antialiased">
    <ThemeProvider>
  <ModalProvider>

    <ModalAutoTrigger />

    <Navbar />

    <main>{children}</main>

    <CTA />

    <Footer />

    <ChatWidget />

  </ModalProvider>
</ThemeProvider>
  </body>
</html>
  );
}

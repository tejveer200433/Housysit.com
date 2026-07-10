import ContactForm from "@/components/ContactForm"
import { Mail, MapPin, Phone, MessageCircle, ShieldCheck, Globe } from "lucide-react"

export const metadata = {
  title: "Get in Touch | Houston Systems IT",
  description: "Discuss your software, cloud, and AI needs with our expert engineering team.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-blue-500/30">

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT SIDE: CONTENT & INFO --- */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-black leading-tight mb-6">
                Let's Build the <br />
                <span className="text-blue-500">Next Big Thing.</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                Whether you're scaling a startup or digitizing an enterprise, our engineering pods are ready to deploy.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="mailto:sk@houstonsystems.com">
              <div className="p-6 rounded-3xl bg-white border border-white/10 hover:border-blue-500/50 transition-colors group">
                <Mail className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold mb-1">Email Us</h3>
                <p className="text-slate-400 text-sm">sk@houstonsystems.com</p>
              </div>
              </a>
              <a href="tel:+919999126885">
              <div className="p-6 rounded-3xl bg-white border border-white/10 hover:border-blue-500/50 transition-colors group">
                <Phone className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold mb-1">Call Us</h3>
                <p className="text-slate-400 text-sm">+91 9999126885</p>
              </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-bold tracking-widest">
                <ShieldCheck size={16} className="text-blue-500" /> SOC2 Compliant
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs uppercase font-bold tracking-widest">
                <Globe size={16} className="text-blue-500" /> Global Support
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <div className="relative">
            
            <div className="bg-white backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem]">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-black mb-2">Send a Message</h3>
                <p className="text-slate-400 text-sm">Average response time: &lt; 2 hours</p>
              </div>
              
              {/* Note: Update your ContactForm component internally 
                  to use dark-mode compatible inputs (white text, transparent bg) 
              */}
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
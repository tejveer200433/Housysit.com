import Image from "next/image";
import Link from "next/link";
import {
  Blocks,
  BadgeCheck,
  BellRing,
  BriefcaseMedical,
  Building2,
  CarFront,
  Cctv,
  CircleParking,
  CloudCog,
  Fingerprint,
  Factory,
  Flame,
  Gauge,
  Goal,
  GraduationCap,
  House,
  Landmark,
  MonitorCog,
  Network,
  Package,
  Plane,
  RadioTower,
  Rocket,
  ScanLine,
  Server,
  ServerCog,
  Shield,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export const metadata = {
  title: "System Integration Services | Houston Systems",
  description:
    "Secure system integration services that connect applications, data, cloud platforms, and business processes.",
  alternates: { canonical: "/services/system-integration" },
};

export default function SystemIntegrationPage() {
  const capabilities = [
    {
      title: "IT Strategy & Consulting",
      description:
        "Practical roadmaps that align your technology, operations, and long-term business goals.",
      icon: Blocks,
    },
    {
      title: "Multi-Vendor Integration",
      description:
        "Bring platforms and products from different vendors together in one dependable environment.",
      icon: Network,
    },
    {
      title: "Shared Services & Infrastructure",
      description:
        "Consolidate core services and infrastructure to improve performance, control, and efficiency.",
      icon: ServerCog,
    },
    {
      title: "Cloud & Hybrid Integration",
      description:
        "Connect on-premise systems with public and private cloud platforms through secure workflows.",
      icon: CloudCog,
    },
    {
      title: "Secure System Architecture",
      description:
        "Build protection, governance, and resilience into every layer of your connected ecosystem.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="mb-8 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-[#102a56]">
              <Shield className="h-4 w-4" aria-hidden="true" />
              Advanced System Integration
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[#082d72] sm:text-5xl lg:text-[3.45rem]">
              Integrated Security &amp;
              <span className="block text-[#0877d1]">Infrastructure Solutions</span>
            </h1>
            <h2 className="mt-7 max-w-xl text-xl font-bold leading-7 text-slate-700 sm:text-2xl">
              Complete System Integration for Smart Buildings &amp; Critical Premises
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              We are a technology-driven System Integration Company delivering end-to-end
              security, safety, IT and infrastructure automation solutions for large
              buildings, campuses and public infrastructure. From perimeter protection to
              centralized command control, we design, integrate and commission complete
              smart ecosystems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get Consultation
              </Link>
              <Link
                href="#integration-services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-[#0a3277] bg-white px-8 py-3 font-semibold text-[#0a3277] transition hover:bg-blue-50"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl pb-7 sm:px-4 lg:px-0">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-[#041b45] shadow-2xl shadow-blue-950/20">
              <Image
                src="/system-integration-hero.png"
                alt="Secure systems connected through a central integration platform"
                width={1693}
                height={929}
                priority
                className="aspect-[4/4.1] w-full object-cover"
              />
            </div>
            <div className="absolute -right-2 top-10 hidden min-w-52 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block">
              <div className="flex items-center gap-3 text-[#0a3277]">
                <Gauge className="h-5 w-5" aria-hidden="true" />
                <p className="font-bold">Infrastructure Load</p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-4/5 rounded-full bg-blue-600" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 hidden min-w-64 items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:flex lg:-left-10">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Shield className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-[#0a3277]">Active Protection</p>
                <p className="text-sm text-slate-500">Real-time monitoring online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integration-services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              What We Deliver
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102a56] sm:text-4xl">
              Beyond Standalone Products
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              We combine strategy, infrastructure, cloud, security, and specialist
              technologies to deliver complete solutions—not disconnected products.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-6 text-[#102a56]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-2xl bg-blue-200/60" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
              <Image
                src="/secure-facility-access.png"
                alt="Secure facility with vehicle access control and CCTV surveillance"
                width={1693}
                height={929}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Physical Security Integration
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102a56] sm:text-4xl">
              High-Security Vehicle Access &amp; CCTV Protection
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Protect critical locations with intelligent access control and surveillance
              systems connected through one centralized security platform.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <CarFront className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-[#102a56]">Vehicle Access Control</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Barriers, ANPR, RFID, and automated entry workflows.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Cctv className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-[#102a56]">Advanced CCTV</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">High-definition monitoring with intelligent video analytics.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Network className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-[#102a56]">Centralized Monitoring</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Unified live views, alerts, reporting, and remote control.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Shield className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-[#102a56]">Perimeter Protection</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Layered detection for entrances and sensitive boundaries.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border-l-4 border-blue-600 bg-white px-5 py-4 shadow-sm">
              <p className="text-sm font-semibold leading-6 text-slate-700">
                Designed for corporate campuses, industrial facilities, data centers,
                healthcare sites, and other high-security environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
              <div className="p-7 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Fingerprint className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                  Identity &amp; Entry Management
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#102a56]">
                  Secure Human Access
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Control who enters your facilities with integrated credentials,
                  biometrics, visitor management, and intelligent entry systems.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Biometric authentication", "Smart card and mobile access", "Visitor management", "Time and attendance integration"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src="/secure-human-access.png"
                alt="Employees entering through secure access-control turnstiles"
                width={1648}
                height={958}
                className="aspect-[16/8] w-full object-cover"
              />
            </article>

            <article className="overflow-hidden rounded-2xl bg-[#15243e] text-white shadow-xl shadow-slate-950/15">
              <div className="p-7 sm:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/20">
                  <ScanLine className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Detection &amp; Inspection
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Perimeter Screening Infrastructure
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Screen people and carried items efficiently with dependable detection
                  equipment integrated into your wider security operations.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Walk-through metal detectors", "Baggage X-ray screening", "Handheld detection systems", "Centralized alarm monitoring"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-200">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Image
                src="/perimeter-screening.png"
                alt="Walk-through detector and baggage screening equipment"
                width={1693}
                height={929}
                className="aspect-[16/8] w-full object-cover"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Connected Mobility
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#102a56] sm:text-4xl">
              Smart Parking Infrastructure Solutions
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Turn parking facilities into connected, efficient environments with
              real-time occupancy data, automated access, guidance, and centralized
              management.
            </p>

            <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="flex gap-3">
                <CircleParking className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-[#102a56]">Parking Guidance</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Live bay availability and clear directional guidance.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Cctv className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-[#102a56]">License Plate Recognition</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Fast, controlled entry using automated plate detection.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <RadioTower className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-[#102a56]">Occupancy Sensors</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Accurate space status through connected bay sensors.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Gauge className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-[#102a56]">Central Dashboard</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Monitor usage, alerts, access, and performance in one place.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Corporate Campuses", "Airports", "Hospitals", "Commercial Properties"].map((item) => (
                <span key={item} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-600/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-blue-900/20 bg-[#07172d] p-2 shadow-2xl shadow-blue-950/20">
              <Image
                src="/smart-parking.png"
                alt="Smart parking garage with connected sensors and guidance technology"
                width={1693}
                height={929}
                className="aspect-[16/10] w-full rounded-xl object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/75 px-4 py-3 text-white backdrop-blur-md">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">Live Infrastructure</p>
                  <p className="mt-1 text-sm font-bold">Connected, visible, and easier to manage</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a3277] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-[#04162e] shadow-2xl shadow-black/20">
            <Image
              src="/unified-command-map.png"
              alt="World map displayed in a centralized monitoring interface"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm font-medium text-blue-200">
              <Network className="h-4 w-4" aria-hidden="true" />
              Unified Command &amp; Control Platform
            </p>
            <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
              One Platform.
              <span className="mt-1 block text-[#86a5ff]">Complete Visibility.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg">
              Centralized monitoring environment for CCTV, Access Control, Fire Alarm,
              BMS, Perimeter, Parking, Visitor Management.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: "CCTV & VMS", icon: MonitorCog },
                { label: "BMS Integration", icon: Building2 },
                { label: "Fire & Life Safety", icon: Flame },
                { label: "Intrusion Detection", icon: BellRing },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="rounded-xl border border-blue-200/15 bg-white/5 px-5 py-4">
                  <Icon className="h-5 w-5 text-blue-100" aria-hidden="true" />
                  <p className="mt-3 font-bold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a3277] sm:text-4xl">
              Industries We Serve
            </h2>
            <span className="mx-auto mt-6 block h-1 w-24 rounded-full bg-blue-600" />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-14">
            {[
              { label: "Govt", icon: Landmark },
              { label: "Smart Cities", icon: Building2 },
              { label: "Airports/Metro", icon: Plane },
              { label: "Stadiums", icon: Goal },
              { label: "Corporate", icon: Building2 },
              { label: "Industrial", icon: Factory },
              { label: "Education", icon: GraduationCap },
              { label: "Healthcare", icon: BriefcaseMedical },
              { label: "Data Centers", icon: Server },
              { label: "Heritage", icon: House },
            ].map(({ label, icon: Icon }) => (
              <article
                key={label}
                className="group flex flex-col items-center text-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100 text-[#0a3277] transition duration-300 group-hover:-translate-y-1 group-hover:bg-blue-50 group-hover:shadow-lg sm:h-24 sm:w-24">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-slate-900 sm:text-base">{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6fa] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-blue-600">
              Our Integration Workflow
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0a3277] sm:text-4xl">
              End-to-End Turnkey Execution
            </h2>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-[7%] right-[7%] top-5 hidden h-px bg-blue-200 lg:block" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
              {[
                { step: "1", label: "Site Survey" },
                { step: "2", label: "Solution Design" },
                { step: "3", label: "OEM Selection" },
                { step: "4", label: "Installation" },
                { step: "5", label: "System Integration" },
                { step: "6", label: "Commissioning" },
                { step: "7", label: "Training & Maintenance" },
              ].map(({ step, label }) => (
                <article key={step} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-200 bg-white text-sm font-bold text-[#0a3277]">
                    {step}
                  </span>
                  <h3 className="mt-4 max-w-32 text-sm font-bold leading-5 text-slate-900">
                    {label}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-[#0a3277] sm:text-4xl">
              Why Choose Us as Your System Integrator?
            </h2>
            <Image
              src="/system-integrator-handshake.png"
              alt="Infrastructure partners shaking hands"
              width={1752}
              height={926}
              className="mt-8 aspect-[16/9] w-full rounded-xl object-cover"
            />
          </div>

          <div className="space-y-6">
            {[
              {
                title: "In-House Portfolio",
                description: "Direct access to proprietary security technologies and OEM partnerships.",
                icon: Package,
              },
              {
                title: "Multi-Vendor Capability",
                description: "Agnostic approach to hardware for the best solution fit.",
                icon: UsersRound,
              },
              {
                title: "Govt & Infra Experience",
                description: "Proven track record with high-security government installations.",
                icon: Landmark,
              },
              {
                title: "Future-Ready Architecture",
                description: "Scalable solutions that grow with your infrastructure needs.",
                icon: Rocket,
              },
              {
                title: "Single Point of Responsibility",
                description: "One partner for design, supply, integration, and lifelong support.",
                icon: BadgeCheck,
              },
            ].map(({ title, description, icon: Icon }) => (
              <article key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[#1d2c44] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            One Partner. Complete Infrastructure Control.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Whether it is a government complex, stadium, airport, monument or corporate
            campus — we deliver secure, intelligent and fully integrated environments.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              Request Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-500 bg-slate-600/40 px-8 py-3 text-sm font-bold text-white transition hover:bg-slate-600"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

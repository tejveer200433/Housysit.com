
import Link from "next/link";
import { getAllPosts } from "../../lib/mdx";
import Image from "next/image";
import SidebarFilter from "../../components/ServerFilter"
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: 'IT Service Blogs',
  description: 'Insights on Web, Software, AI/ML, Cloud, IoT, and UX/UI.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'IT Service Blogs',
    description: 'Insights on Web, Software, AI/ML, Cloud, IoT, and UX/UI.',
    url: '/blog',
    images: [{ url: '/logowall.jpg' }],
  },
}

export default function BlogIndex() {
  const posts: any = getAllPosts();
  console.log(posts);

  const categories = ["All Post", ...new Set(posts.map((post: any) => post.category))];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="bg-white">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">

          <div className="max-w-9/11 mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
                  <Sparkles size={14} /> <span>The Intelligence Hub</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] mb-6">
                  Blogs for the <span className="text-blue-600">Digital-First</span> Era.
                </h1>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-xl">
                  Exploring the intersection of scalable software, AI-driven automation, and industrial-grade hardware integration.
                </p>
              </div>

              <div
                className="relative"
              >
                <div className="relative rounded-4xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/blog.gif"
                    alt="Tech Collaboration"
                    width={800}
                    height={500}
                    className="w-full h-100 object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                </div>

                {/* Floating Stat/Card for visual "coolness" */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1 text-left">Latest Update</p>
                  <p className="text-slate-900 font-bold text-left">
                    {posts[0]?.title
                      ? posts[0].title.slice(0, 50) + "..."
                      : "No posts available"}
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-10 md:py-28 md:px-20 flex flex-col lg:flex-row gap-8 w-full ">
          <SidebarFilter posts={posts} categories={categories} />
        </div>
      </div>
    </div>
  );
}

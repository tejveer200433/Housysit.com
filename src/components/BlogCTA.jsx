import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

const formatDate = (date) => {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
};

const BlogCTA = () => {
  const blogPosts = getAllPosts()
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")))
    .slice(0, 4);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Blog</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn From The Blogs</h2>
          <p className="text-gray-600">Stay updated with our latest insights and development trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row group"
            >
              <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0">
                <Image
                  src={post.image || "/logowall.jpg"}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 12rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-sm text-gray-500 mb-2">
                  <span>{post.category || "Insight"}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                {post.summary && (
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {post.summary}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogCTA;

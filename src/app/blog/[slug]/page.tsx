
import { getPostBySlug } from "../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import GoBack from "@/components/GoBack"
import Image from "next/image";

import { CalendarDays, User } from "lucide-react";


// Custom components for complete control
const components = {
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8 leading-tight first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-3xl font-semibold text-gray-800 mb-5 mt-8 leading-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-6 leading-tight" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-5 leading-tight" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5 className="text-lg font-semibold text-gray-800 mb-2 mt-4 leading-tight" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6 className="text-base font-semibold text-gray-800 mb-2 mt-4 leading-tight" {...props}>
      {children}
    </h6>
  ),
  p: ({ children, ...props }: any) => (
    <p className="text-gray-700 mb-4 leading-relaxed text-base" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc pl-6 mb-4 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-gray-700 leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 py-3 mb-6 italic text-gray-600 bg-gray-50 rounded-r-lg" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm" {...props}>
      {children}
    </pre>
  ),
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors font-medium"
      {...props}
    >
      {children}
    </a>
  ),
  img: ({ src, alt }: any) => (
    <div className="relative w-full h-100 mb-6">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-lg shadow-md object-cover"
      />
    </div>
  ),
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border-collapse border border-gray-300" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: any) => (
    <tbody {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: any) => (
    <tr className="border-b border-gray-200" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: any) => (
    <th className="border border-gray-300 bg-gray-100 px-4 py-3 text-left font-semibold text-gray-800" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="border border-gray-300 px-4 py-3 text-gray-700" {...props}>
      {children}
    </td>
  ),
  hr: (props: any) => (
    <hr className="border-t border-gray-300 my-8" {...props} />
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-gray-900" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { content, data } = getPostBySlug(slug);



  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <GoBack />
        {/* Header */}
        <header className="mb-10 pb-8 border-b border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {data.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-3">

            {/* Date */}
            <div className="flex items-center gap-1.5">
              <CalendarDays size={16} className="text-gray-400" />
              <span>{data.date}</span>
            </div>

            <span className="text-gray-300">•</span>

            {/* Author */}
            <div className="flex items-center gap-1.5">
              <User size={16} className="text-gray-400" />
              <span>{data.author}</span>
            </div>

            {data.category && (
              <>
                <span className="text-gray-300">•</span>

                {/* Category */}
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-xs">
                  {data.category}
                </span>
              </>
            )}

          </div>
        </header>

        {/* Content with custom components */}
        <div className="max-w-none">
          <MDXRemote source={content} components={components} />
        </div>
      </div>
    </div>
  );
}
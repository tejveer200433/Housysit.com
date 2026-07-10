"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SidebarFilter({ posts, categories }) {
    const [selectedCategory, setSelectedCategory] = useState("All Post");
    const [openFilter, setOpenFilter] = useState(false);

    const filteredPosts =
        selectedCategory === "All Post"
            ? posts
            : posts.filter((post) => post.category === selectedCategory);

    return (
        <>
            {/* Sidebar for large screens */}
            <div className="hidden lg:block w-64">
                <h2 className="text-gray-900 font-semibold mb-4">Explore by topics</h2>
                <ul className="space-y-2">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => setSelectedCategory(cat)}
                                className={`block w-full text-left px-3 py-2 rounded-lg ${selectedCategory === cat
                                    ? "bg-blue-100 text-blue-600 font-medium"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Dropdown filter for small screens */}
            <div className="lg:hidden w-full ">
                <button
                    onClick={() => setOpenFilter(!openFilter)}
                    className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-800"
                >
                    <span>{selectedCategory}</span>
                    <span>{openFilter ? "▲" : "▼"}</span>
                </button>
                {openFilter && (
                    <ul className="mt-2 bg-white shadow rounded-lg overflow-hidden">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <button
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setOpenFilter(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 ${selectedCategory === cat
                                        ? "bg-blue-100 text-blue-600 font-medium"
                                        : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Blog content */}
            <div className="flex-1">
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <li
                            key={post.slug}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block h-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                    width={400}
                                    height={250}
                                />
                                <div className="p-4">
                                    <div className="flex flex-row justify-between items-center">

                                        <p className="text-blue-600 font-medium mb-2">{post.category}</p>
                                        <p className="text-gray-500 text-sm">{post.date}</p>

                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-gray-950 transition-all duration-300 mb-2">
                                        {post.title}
                                    </h2>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { ArrowLeft } from 'lucide-react';

const GoBack = () => {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 text-[#058AFB] hover:text-[#0470D4] transition-colors py-10"
        >
            <ArrowLeft size={16} />
            Back to Blogs
        </button>
    )
}

export default GoBack;
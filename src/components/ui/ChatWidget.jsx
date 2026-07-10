"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition-all z-[9999] flex items-center justify-center"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://houstan.netlify.app/"
            title="HOUSYS Chatbot"
            allow="microphone"
            className="w-[380px] h-[600px] border-0 rounded-2xl"
          />
        </div>
      )}
    </>
  );
}
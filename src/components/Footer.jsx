import { MessageCircle, Mail } from "lucide-react";
import BeerFlowLogo from "./BeerFlowLogo.jsx";
import {
  RESTAURANT_NAME,
  TAGLINE,
  BUILDER_NAME,
  BUILDER_WHATSAPP,
  BUILDER_EMAIL,
} from "../config.js";

const builderMsg = encodeURIComponent(
  `Hi ${BUILDER_NAME}, I saw the Qalandari Biryani website. I want a website / POS for my business.`
);

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        <div>
          <p className="text-lg font-bold text-white">{RESTAURANT_NAME}</p>
          <p className="mt-1 text-yellow-300">{TAGLINE}</p>
          <p className="mt-3 text-sm text-gray-400">Freshly cooked biryani and pulao. Order anytime on WhatsApp.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-xs font-semibold tracking-widest text-gray-400">WEBSITE DEVELOPED BY</p>
          <div className="mt-3">
            <BeerFlowLogo />
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Need a website, restaurant POS or custom software for your business?
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${BUILDER_WHATSAPP}?text=${builderMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              <MessageCircle size={16} aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a
              href={`mailto:${BUILDER_EMAIL}`}
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Mail size={16} aria-hidden="true" /> Email us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {RESTAURANT_NAME}. Built by {BUILDER_NAME}.
      </div>
    </footer>
  );
}

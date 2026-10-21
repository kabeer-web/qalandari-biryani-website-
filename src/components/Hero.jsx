import { ArrowDown, Clock, Truck, BadgeCheck } from "lucide-react";
import FoodImage from "./FoodImage.jsx";
import { RESTAURANT_NAME, TAGLINE } from "../config.js";
import { FOOD_ITEMS } from "../data/menu.js";
import { formatPKR } from "../utils/format.js";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=75";

const startingPrice = Math.min(...FOOD_ITEMS.map((i) => i.price));

const chip =
  "flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm backdrop-blur";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-400 text-white"
    >
      {/* soft glow shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-red-500/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {RESTAURANT_NAME}
          </h1>
          <p className="mt-4 text-xl font-semibold text-yellow-100 sm:text-2xl">{TAGLINE}</p>
          <p className="mt-4 max-w-md text-orange-50">
            Freshly cooked biryani and pulao, packed hot and delivered to your door. Pick your
            food, then send your order on WhatsApp.
          </p>

          <a
            href="#menu"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-orange-600 shadow-xl hover:bg-yellow-50"
          >
            Order Now
            <ArrowDown size={20} aria-hidden="true" />
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className={chip}><Clock size={16} aria-hidden="true" /> Fresh &amp; hot</span>
            <span className={chip}><Truck size={16} aria-hidden="true" /> Home delivery</span>
            <span className={chip}><BadgeCheck size={16} aria-hidden="true" /> Order on WhatsApp</span>
          </div>
        </div>

        <div className="relative">
          <FoodImage
            src={HERO_IMAGE}
            alt="A plate of Qalandari chicken biryani"
            className="h-72 w-full rounded-3xl border-4 border-white/40 shadow-2xl sm:h-96"
          />
          <div className="absolute -bottom-4 left-4 rounded-2xl border border-white/50 bg-white/85 px-5 py-3 text-gray-900 shadow-xl backdrop-blur">
            <p className="text-xs font-medium text-gray-500">Starting from</p>
            <p className="text-xl font-extrabold text-orange-600">{formatPKR(startingPrice)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

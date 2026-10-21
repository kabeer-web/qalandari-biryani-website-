import { ShoppingCart, Flame } from "lucide-react";
import { RESTAURANT_NAME } from "../config.js";

export default function Header({ cartCount }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/75 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 font-bold text-gray-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow">
            <Flame size={20} aria-hidden="true" />
          </span>
          <span className="hidden text-sm leading-tight sm:block">{RESTAURANT_NAME}</span>
          <span className="text-sm leading-tight sm:hidden">Qalandari Biryani</span>
        </a>

        <nav className="flex items-center gap-5 text-sm font-medium text-gray-700">
          <a href="#menu" className="hover:text-orange-600">Menu</a>
          <a href="#how" className="hidden hover:text-orange-600 sm:block">How to order</a>
          <a
            href="#cart"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 font-semibold text-white shadow hover:from-orange-600 hover:to-amber-600"
            aria-label={`Cart, ${cartCount} items`}
          >
            <ShoppingCart size={18} aria-hidden="true" />
            Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-orange-600">
              {cartCount}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}

import { ShoppingCart } from "lucide-react";
import { formatPKR } from "../utils/format.js";

// Sticky bottom bar on phones, only when the cart has items
export default function MobileCartBar({ count, total }) {
  if (count === 0) return null;
  return (
    <a
      href="#cart"
      className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-between rounded-full bg-gray-900 px-5 py-3 text-white shadow-2xl md:hidden"
    >
      <span className="flex items-center gap-2 font-semibold">
        <ShoppingCart size={18} aria-hidden="true" /> {count} {count === 1 ? "item" : "items"}
      </span>
      <span className="font-bold text-yellow-300">View cart &middot; {formatPKR(total)}</span>
    </a>
  );
}

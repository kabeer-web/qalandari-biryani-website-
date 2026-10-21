import { Plus } from "lucide-react";
import FoodImage from "./FoodImage.jsx";
import { formatPKR } from "../utils/format.js";

export default function FoodCard({ item, onAdd }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <FoodImage src={item.image} alt={item.name} className="h-48 w-full transition duration-500 group-hover:scale-105" />
        <span className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-orange-600 shadow backdrop-blur">
          {formatPKR(item.price)}
        </span>
        {item.suggested && (
          <span className="absolute top-3 left-3 rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-gray-900">
            Suggested price
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
        <p className="mt-1 flex-1 text-sm text-gray-600">{item.description}</p>
        <button
          type="button"
          onClick={() => onAdd({ id: item.id, name: item.name, price: item.price })}
          className="mt-4 flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:from-orange-600 hover:to-amber-600"
        >
          <Plus size={16} aria-hidden="true" /> Add to Cart
        </button>
      </div>
    </article>
  );
}

import { useState } from "react";
import { Plus, CupSoda } from "lucide-react";
import { DRINK_SIZES } from "../data/menu.js";
import { formatPKR } from "../utils/format.js";

export default function DrinkCard({ drink, onAdd }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const size = DRINK_SIZES[sizeIndex];

  const handleAdd = () =>
    onAdd({
      id: `${drink.id}-${size.label}`, // different sizes = different cart lines
      name: `${drink.name} (${size.label})`,
      price: size.price,
    });

  return (
    <article className="flex flex-col rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${drink.color}`}>
          <CupSoda size={24} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-bold text-gray-900">{drink.name}</h3>
          <p className="text-sm font-semibold text-orange-600">{formatPKR(size.price)}</p>
        </div>
      </div>

      <label className="mt-4 text-xs font-medium text-gray-500" htmlFor={`size-${drink.id}`}>
        Size
      </label>
      <select
        id={`size-${drink.id}`}
        value={sizeIndex}
        onChange={(e) => setSizeIndex(Number(e.target.value))}
        className="mt-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-orange-400 focus:outline-none"
      >
        {DRINK_SIZES.map((s, i) => (
          <option key={s.label} value={i}>
            {s.label} - {formatPKR(s.price)}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-3 flex items-center justify-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white hover:from-orange-600 hover:to-amber-600"
      >
        <Plus size={16} aria-hidden="true" /> Add to Cart
      </button>
    </article>
  );
}

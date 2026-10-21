import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatPKR } from "../utils/format.js";
import { DELIVERY_FEE } from "../config.js";

export default function Cart({ cart }) {
  const { items, subtotal, total, increase, decrease, removeItem, clearCart } = cart;

  return (
    <div className="rounded-3xl border border-white bg-white p-5 shadow-lg shadow-orange-100">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900">Your Cart</h3>
        {items.length > 0 && (
          <button type="button" onClick={clearCart} className="text-sm font-medium text-red-500 hover:underline">
            Clear cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center py-10 text-center text-gray-500">
          <ShoppingBag size={44} className="text-orange-300" aria-hidden="true" />
          <p className="mt-3 font-semibold text-gray-700">Your cart is empty</p>
          <p className="text-sm">Add some biryani from the menu to get started.</p>
          <a href="#menu" className="mt-4 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600">
            Browse menu
          </a>
        </div>
      ) : (
        <>
          <ul className="mt-4 divide-y divide-gray-100">
            {items.map((item) => (
              <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{formatPKR(item.price)} each</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => decrease(item.id)}
                    disabled={item.qty === 1}
                    aria-label={`Decrease ${item.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-orange-50 disabled:opacity-40"
                  >
                    <Minus size={14} aria-hidden="true" />
                  </button>
                  <span className="w-6 text-center font-semibold">{item.qty}</span>
                  <button
                    type="button"
                    onClick={() => increase(item.id)}
                    aria-label={`Increase ${item.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-orange-50"
                  >
                    <Plus size={14} aria-hidden="true" />
                  </button>
                </div>

                <p className="w-20 text-right font-semibold text-gray-900">{formatPKR(item.price * item.qty)}</p>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-1 border-t border-gray-100 pt-4 text-sm">
            <div className="flex justify-between text-gray-600">
              <dt>Subtotal</dt>
              <dd>{formatPKR(subtotal)}</dd>
            </div>
            {DELIVERY_FEE > 0 && (
              <div className="flex justify-between text-gray-600">
                <dt>Delivery</dt>
                <dd>{formatPKR(DELIVERY_FEE)}</dd>
              </div>
            )}
            <div className="flex justify-between pt-2 text-lg font-bold text-gray-900">
              <dt>Total</dt>
              <dd className="text-orange-600">{formatPKR(total)}</dd>
            </div>
          </dl>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildOrderMessage, openWhatsApp } from "../utils/whatsapp.js";

const EMPTY_FORM = { name: "", phone: "", address: "", notes: "" };

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your name.";
  const digits = form.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Enter a valid phone number, e.g. 0300 1234567.";
  if (form.address.trim().length < 8) errors.address = "Please enter your full delivery address.";
  return errors;
}

export default function Checkout({ cart }) {
  const { items, subtotal, total } = cart;
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const customer = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      notes: form.notes.trim(),
    };
    openWhatsApp(buildOrderMessage({ items, customer, subtotal, total }));
    setSent(true);
  };

  const inputClass = (field) =>
    `mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 ${
      errors[field] ? "border-red-400" : "border-gray-200"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-white bg-white p-5 shadow-lg shadow-orange-100">
      <h3 className="text-xl font-bold text-gray-900">Checkout</h3>

      {items.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-500">
          Add at least one item to your cart to place an order.
        </p>
      ) : (
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} autoComplete="name" className={inputClass("name")} />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone number</label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" placeholder="0300 1234567" className={inputClass("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="address" className="text-sm font-medium text-gray-700">Delivery address</label>
            <textarea id="address" name="address" rows={3} value={form.address} onChange={handleChange} autoComplete="street-address" className={inputClass("address")} />
            {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="notes" className="text-sm font-medium text-gray-700">Order notes (optional)</label>
            <textarea id="notes" name="notes" rows={2} value={form.notes} onChange={handleChange} placeholder="e.g. extra raita, less spicy" className={inputClass("notes")} />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            <MessageCircle size={20} aria-hidden="true" /> Place Order on WhatsApp
          </button>

          {sent && (
            <p className="rounded-lg bg-yellow-50 p-3 text-sm text-gray-700">
              WhatsApp should now be open with your order. Please press <strong>Send</strong> there to
              confirm it. If nothing opened, tap the button again.
            </p>
          )}
        </div>
      )}
    </form>
  );
}

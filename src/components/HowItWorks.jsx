import { UtensilsCrossed, ShoppingCart, MessageCircle } from "lucide-react";

const STEPS = [
  { icon: UtensilsCrossed, title: "Choose your food", text: "Pick biryani, pulao and a cold drink from the menu." },
  { icon: ShoppingCart, title: "Fill your details", text: "Check your cart and enter your name, phone and address." },
  { icon: MessageCircle, title: "Send on WhatsApp", text: "Your order opens in WhatsApp. Press Send and we start cooking." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-extrabold text-gray-900">How to order</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50/50 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-gray-900">{i + 1}. {title}</h3>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

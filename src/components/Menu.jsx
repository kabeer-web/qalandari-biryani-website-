import FoodCard from "./FoodCard.jsx";
import DrinkCard from "./DrinkCard.jsx";
import { FOOD_ITEMS, DRINKS } from "../data/menu.js";

export default function Menu({ onAdd }) {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-14">
      <h2 className="text-3xl font-extrabold text-gray-900">Our Menu</h2>
      <p className="mt-2 text-gray-600">Choose your favourites and add them to your cart.</p>

      <h3 className="mt-10 mb-4 border-l-4 border-yellow-400 pl-3 text-xl font-bold text-gray-900">
        Biryani &amp; Pulao
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FOOD_ITEMS.map((item) => (
          <FoodCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>

      <h3 className="mt-12 mb-4 border-l-4 border-yellow-400 pl-3 text-xl font-bold text-gray-900">
        Cold Drinks
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DRINKS.map((drink) => (
          <DrinkCard key={drink.id} drink={drink} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

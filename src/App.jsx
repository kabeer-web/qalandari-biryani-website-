import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Menu from "./components/Menu.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Footer from "./components/Footer.jsx";
import MobileCartBar from "./components/MobileCartBar.jsx";
import useCart from "./hooks/useCart.js";

export default function App() {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header cartCount={cart.count} />
      <main>
        <Hero />
        <Menu onAdd={cart.addItem} />

        <section id="cart" className="bg-gradient-to-b from-yellow-50 to-orange-50/60 py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-extrabold text-gray-900">Your Order</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <Cart cart={cart} />
              <Checkout cart={cart} />
            </div>
          </div>
        </section>

        <HowItWorks />
      </main>
      <Footer />
      <MobileCartBar count={cart.count} total={cart.total} />
    </div>
  );
}

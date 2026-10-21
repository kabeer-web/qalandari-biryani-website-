import { useEffect, useMemo, useState } from "react";
import { DELIVERY_FEE } from "../config.js";

const STORAGE_KEY = "qalandari-cart-v1";

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export default function useCart() {
  const [items, setItems] = useState(loadCart);

  // Save to localStorage whenever the cart changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage full or blocked - ignore */
    }
  }, [items]);

  // item = { id, name, price }
  const addItem = (item) =>
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...item, qty: 1 }];
    });

  const increase = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decrease = (id) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)));

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setItems([]);

  const { count, subtotal, total } = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    return { count, subtotal, total: items.length ? subtotal + DELIVERY_FEE : 0 };
  }, [items]);

  return { items, count, subtotal, total, addItem, increase, decrease, removeItem, clearCart };
}

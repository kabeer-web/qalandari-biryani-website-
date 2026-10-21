import { RESTAURANT_NAME, WHATSAPP_NUMBER, DELIVERY_FEE } from "../config.js";
import { formatPKR } from "./format.js";

export function buildOrderMessage({ items, customer, subtotal, total }) {
  const lines = items.map(
    (item, i) =>
      `${i + 1}. ${item.name} x ${item.qty}\n    ${formatPKR(item.price)} each = ${formatPKR(item.price * item.qty)}`
  );

  const parts = [
    `*New Order - ${RESTAURANT_NAME}*`,
    "",
    "*Customer Details*",
    `Name: ${customer.name}`,
    `Phone: ${customer.phone}`,
    `Address: ${customer.address}`,
    `Notes: ${customer.notes || "None"}`,
    "",
    "*Order Items*",
    ...lines,
    "",
    `Subtotal: ${formatPKR(subtotal)}`,
  ];

  if (DELIVERY_FEE > 0) parts.push(`Delivery: ${formatPKR(DELIVERY_FEE)}`);
  parts.push(`*Total: ${formatPKR(total)}*`, "", "Please confirm my order. Thank you!");

  return parts.join("\n");
}

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

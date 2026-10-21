import { useState } from "react";
import { UtensilsCrossed } from "lucide-react";

// Shows the photo; if it fails to load, shows a warm placeholder instead.
export default function FoodImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`flex items-center justify-center bg-orange-100 text-orange-400 ${className}`}>
        <UtensilsCrossed size={40} aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

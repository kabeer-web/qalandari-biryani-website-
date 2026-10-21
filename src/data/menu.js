// All menu items and prices live here. Edit freely.
// To use your own photos: put them in /public/images and set image: "/images/your-photo.jpg"

export const FOOD_ITEMS = [
  {
    id: "chicken-biryani",
    name: "Chicken Biryani",
    price: 200,
    description: "Fragrant basmati rice layered with juicy, spiced chicken.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=70",
    suggested: false,
  },
  {
    id: "beef-biryani",
    name: "Beef Biryani",
    price: 300,
    description: "Slow-cooked tender beef with rich masala and aromatic rice.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=70",
    suggested: false,
  },
  {
    id: "chicken-pulao",
    name: "Chicken Pulao",
    price: 250,
    description: "Light, mildly spiced pulao cooked in chicken yakhni.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=70",
    suggested: true,
  },
  {
    id: "beef-pulao",
    name: "Beef Pulao",
    price: 300,
    description: "Classic beef pulao with soft rice and whole spices.",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=800&q=70",
    suggested: true,
  },
];

// Same sizes/prices apply to every drink. Edit the prices as needed.
export const DRINK_SIZES = [
  { label: "250 ml", price: 60 },
  { label: "500 ml", price: 100 },
  { label: "1.5 L", price: 180 },
  { label: "2.25 L", price: 250 },
];

export const DRINKS = [
  { id: "coke", name: "Coke", color: "bg-red-50 text-red-600" },
  { id: "pepsi", name: "Pepsi", color: "bg-blue-50 text-blue-600" },
  { id: "sprite", name: "Sprite", color: "bg-green-50 text-green-600" },
  { id: "7up", name: "7UP", color: "bg-lime-50 text-lime-600" },
  { id: "fanta", name: "Fanta", color: "bg-orange-50 text-orange-600" },
  { id: "mirinda", name: "Mirinda", color: "bg-amber-50 text-amber-600" },
  { id: "dew", name: "Mountain Dew", color: "bg-yellow-50 text-yellow-600" },
  { id: "water", name: "Mineral Water", color: "bg-sky-50 text-sky-600" },
];

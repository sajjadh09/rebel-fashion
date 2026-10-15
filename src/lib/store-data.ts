export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  accent: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  badge?: string;
  featured?: boolean;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  material: string;
  fit: string;
  care: string;
  shipping: string;
};

export const announcement = "New season arrivals • Free shipping on orders over $150";

export const categories: Category[] = [
  {
    id: "women",
    slug: "women",
    name: "Women",
    description: "Tailored layers, fluid silhouettes, and elevated essentials.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    accent: "#C49A78",
  },
  {
    id: "men",
    slug: "men",
    name: "Men",
    description: "Refined basics, relaxed tailoring, and modern staples.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    accent: "#D8B99A",
  },
  {
    id: "new-arrivals",
    slug: "new-arrivals",
    name: "New Arrivals",
    description: "Fresh edits shaped by the latest runway and city moments.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    accent: "#E8D5C0",
  },
  {
    id: "streetwear",
    slug: "streetwear",
    name: "Streetwear",
    description: "Crisp silhouettes, closed-toe impact, and utility details.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    accent: "#F3E2D0",
  },
  {
    id: "essentials",
    slug: "essentials",
    name: "Essentials",
    description: "Quiet hero pieces made to build a wardrobe that lasts.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    accent: "#F8F3EC",
  },
  {
    id: "accessories",
    slug: "accessories",
    name: "Accessories",
    description: "Finishing touches that bring polish to every look.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
    accent: "#EAD7C5",
  },
];

export const products: Product[] = [
  {
    id: "amber-tailored-blazer",
    slug: "amber-tailored-blazer",
    name: "Amber Tailored Blazer",
    category: "women",
    price: 240,
    compareAtPrice: 280,
    badge: "New",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Sand", "Mocha", "Ivory"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A softly structured blazer designed with a clean shoulder line and a polished drape for day-to-night dressing.",
    material: "Italian wool blend",
    fit: "Slim fit with a relaxed line through the body",
    care: "Dry clean recommended",
    shipping: "Ships in 2–4 business days",
  },
  {
    id: "monsoon-knit-sweater",
    slug: "monsoon-knit-sweater",
    name: "Monsoon Knit Sweater",
    category: "women",
    price: 142,
    compareAtPrice: 178,
    badge: "Sale",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Cocoa", "Oat", "Rose"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Lightweight but substantial, this knit balances cozy texture with a sleek, modern silhouette that layers beautifully.",
    material: "Cotton and merino blend",
    fit: "Regular fit with easy movement",
    care: "Hand wash or cold wash",
    shipping: "Free delivery over $150",
  },
  {
    id: "studio-lounge-trench",
    slug: "studio-lounge-trench",
    name: "Studio Lounge Trench",
    category: "women",
    price: 260,
    badge: "Editor’s Pick",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Stone", "Caramel", "Black"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "A generous trench cut with subtle structure, destined to move effortlessly from morning meetings to evening plans.",
    material: "Water-resistant twill",
    fit: "Relaxed fit with a long line",
    care: "Spot clean and hang dry",
    shipping: "Free exchange and returns within 30 days",
  },
  {
    id: "city-line-overshirt",
    slug: "city-line-overshirt",
    name: "City Line Overshirt",
    category: "men",
    price: 128,
    compareAtPrice: 160,
    badge: "New",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Taupe", "Forest", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A credential-style overshirt built for layering, with utility pockets and an understated city-ready shape.",
    material: "Cotton canvas",
    fit: "Straight fit with a relaxed shoulder",
    care: "Machine wash cold",
    shipping: "Ships in 3–5 business days",
  },
  {
    id: "nocturne-utility-shirt",
    slug: "nocturne-utility-shirt",
    name: "Nocturne Utility Shirt",
    category: "men",
    price: 118,
    badge: "Trending",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Slate", "Sand", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Constructed with utility pockets and a crisp collar, this shirt balances polished tailoring with all-day ease.",
    material: "Cotton twill",
    fit: "Classic fit",
    care: "Machine wash cold",
    shipping: "Ready to ship",
  },
  {
    id: "dune-silk-dress",
    slug: "dune-silk-dress",
    name: "Dune Silk Dress",
    category: "women",
    price: 220,
    compareAtPrice: 260,
    badge: "Best Seller",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Champagne", "Sienna", "Ink"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "An elegant column dress cut in fluid silk with soft movement and a softly defined waistline.",
    material: "Silk satin",
    fit: "Straight fit with defined waist",
    care: "Dry clean only",
    shipping: "Ships in 2–3 business days",
  },
  {
    id: "raw-edge-denim",
    slug: "raw-edge-denim",
    name: "Raw Edge Denim",
    category: "streetwear",
    price: 168,
    compareAtPrice: 198,
    badge: "New",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Washed Blue", "Jet", "Stone"],
    sizes: ["26", "28", "30", "32", "34"],
    description:
      "A heritage-inspired denim with an intentional raw hem and tapered line for elevated everyday styling.",
    material: "Premium rigid denim",
    fit: "Relaxed taper",
    care: "Cold wash and line dry",
    shipping: "Free shipping over $150",
  },
  {
    id: "crescent-pleat-set",
    slug: "crescent-pleat-set",
    name: "Crescent Pleat Set",
    category: "new-arrivals",
    price: 196,
    badge: "New",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Almond", "Mocha", "Tea Rose"],
    sizes: ["XS", "S", "M", "L"],
    description:
      "An elegant soft-set pairing intended for warm-weather layers and polished casual dressing.",
    material: "Silk blend twill",
    fit: "Relaxed fit with a soft drape",
    care: "Gentle hand wash",
    shipping: "Ready to ship",
  },
  {
    id: "studio-essentials-tote",
    slug: "studio-essentials-tote",
    name: "Studio Essentials Tote",
    category: "accessories",
    price: 92,
    compareAtPrice: 120,
    badge: "Limited",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    ],
    colors: ["Cocoa", "Tan", "Pearl"],
    sizes: ["One Size"],
    description:
      "A structured everyday tote with soft handles and plenty of room for the essentials you carry daily.",
    material: "Pebbled vegan leather",
    fit: "One-size relaxed carryall",
    care: "Wipe clean with soft cloth",
    shipping: "Ships in 2–4 business days",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(currentProductId: string) {
  return products.filter((product) => product.id !== currentProductId).slice(0, 4);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

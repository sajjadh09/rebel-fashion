"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { type Product } from "@/lib/store-data";

export type CartItem = {
  id: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
};

type AddToCartInput = {
  product: Product;
  color?: string;
  size?: string;
  quantity?: number;
};

type StoreContextValue = {
  cart: CartItem[];
  wishlist: string[];
  itemCount: number;
  subtotal: number;
  addToCart: (input: AddToCartInput) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  clearCart: () => void;
};

const cartStorageKey = "rebel-fashion-cart-v1";
const wishlistStorageKey = "rebel-fashion-wishlist-v1";

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

function parseStoredValue<T>(value: string | null, fallback: T): T {
  if (!value) {
    return fallback;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const savedCart = parseStoredValue<CartItem[]>(localStorage.getItem(cartStorageKey), []);
    const savedWishlist = parseStoredValue<string[]>(localStorage.getItem(wishlistStorageKey), []);

    if (Array.isArray(savedCart)) {
      setCart(savedCart);
    }

    if (Array.isArray(savedWishlist)) {
      setWishlist(savedWishlist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(wishlistStorageKey, JSON.stringify(wishlist));
  }, [wishlist]);

  const itemCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const subtotal = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  const addToCart = ({ product, color, size, quantity = 1 }: AddToCartInput) => {
    const safeQuantity = Number.isFinite(quantity) ? Math.max(1, quantity) : 1;
    const selectedColor = product.colors.length > 0 ? (color ?? product.colors[0]) : "";
    const selectedSize = product.sizes.length > 0 ? (size ?? product.sizes[0]) : "";

    setCart((previous) => {
      const existingItem = previous.find(
        (item) => item.productId === product.id && item.color === selectedColor && item.size === selectedSize,
      );

      if (existingItem) {
        return previous.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: Math.min(item.quantity + safeQuantity, 99) }
            : item,
        );
      }

      const newItem: CartItem = {
        id: `${product.id}-${selectedColor}-${selectedSize}`,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        image: product.images[0],
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        quantity: safeQuantity,
      };

      return [...previous, newItem];
    });
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    const safeQuantity = Math.max(1, Math.min(quantity, 99));
    setCart((previous) =>
      previous.map((item) => (item.id === itemId ? { ...item, quantity: safeQuantity } : item)),
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((previous) => previous.filter((item) => item.id !== itemId));
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId],
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const clearCart = () => setCart([]);

  const value = useMemo<StoreContextValue>(
    () => ({
      cart,
      wishlist,
      itemCount,
      subtotal,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      toggleWishlist,
      isWishlisted,
      clearCart,
    }),
    [cart, wishlist, itemCount, subtotal],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}

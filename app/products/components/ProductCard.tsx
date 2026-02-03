"use client";

import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="
        group bg-surface border border-border rounded-xl overflow-hidden
        transition-all duration-300 ease-out cursor-pointer
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30
        hover:border-border-light
      "
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* Placeholder for product image */}
          <div className="w-full h-full rounded-lg bg-gray-100 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 bg-black/0 group-hover:bg-black/5
            transition-colors duration-300
          "
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3
          className="
            text-sm font-medium text-text-primary leading-snug
            line-clamp-2 min-h-[2.5rem] mb-3
          "
        >
          {product.name}
        </h3>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-text-muted">批發價</span>
            <p className="text-lg font-bold text-gold">
              NT${product.price.toLocaleString()}
            </p>
          </div>
          <button
            className="
              px-3 py-1.5 text-xs font-medium rounded-lg
              bg-primary-light text-text-secondary
              border border-border
              transition-all duration-200
              hover:bg-accent hover:text-white hover:border-accent
              cursor-pointer
            "
          >
            查看詳情
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="
        group bg-surface border border-border rounded-xl overflow-hidden
        transition-all duration-300 ease-out cursor-pointer block
        hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30
        hover:border-border-light
      "
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-white overflow-hidden">
        {product.image && !product.image.includes("placeholder") ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 sm:p-4"
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
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
        )}
        {/* Video indicator */}
        {product.videoUrl && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md flex items-center gap-1 text-xs font-medium shadow-lg">
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
            影片
          </div>
        )}
        {/* Hover overlay */}
        <div
          className="
            absolute inset-0 bg-black/0 group-hover:bg-black/5
            transition-colors duration-300
          "
        />
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        <h3
          className="
            text-xs sm:text-sm font-medium text-text-primary leading-snug
            line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] mb-1.5 sm:mb-2
          "
        >
          {product.name}
        </h3>

        <p className="text-[11px] sm:text-xs text-text-muted mb-2 sm:mb-3">{product.quantity}</p>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-[11px] sm:text-xs text-text-muted">批發價</span>
            <p className="text-base sm:text-lg font-bold text-gold">
              NT${product.price.toLocaleString()}
            </p>
          </div>
          <span
            className="
              hidden sm:inline-block
              px-3 py-1.5 text-xs font-medium rounded-lg
              bg-primary-light text-text-secondary
              border border-border
              transition-all duration-200
              group-hover:bg-accent group-hover:text-white group-hover:border-accent
            "
          >
            查看詳情
          </span>
        </div>
      </div>
    </Link>
  );
}

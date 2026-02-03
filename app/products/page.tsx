"use client";

import { useState, useCallback, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { categories, getProductsByCategory, getCategoryById } from "@/lib/data";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import MobileCategorySelect from "./components/MobileCategorySelect";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || categories[0].id;
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory);

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategoryId(id);
    router.replace(`/products?category=${id}`, { scroll: false });
  }, [router]);

  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">("default");

  const activeCategory = getCategoryById(activeCategoryId);
  const filteredProducts = getProductsByCategory(activeCategoryId);

  const sortedProducts = useMemo(() => {
    if (sortOrder === "default") return filteredProducts;
    return [...filteredProducts].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
  }, [filteredProducts, sortOrder]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-primary-dark/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/LOGO.png" alt="順發煙火" className="h-16 w-auto" />
              <h1 className="text-lg font-bold text-text-primary tracking-tight">
                順發煙火
              </h1>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-text-secondary">
              <a href="#" className="hover:text-text-primary transition-colors">
                首頁
              </a>
              <a
                href="#"
                className="text-accent-light font-medium"
              >
                商品目錄
              </a>
              <a href="/wholesale" className="hover:text-text-primary transition-colors">
                批發須知
              </a>
              <a href="#" className="hover:text-text-primary transition-colors">
                聯絡我們
              </a>
            </nav>
            {/* Mobile menu button */}
            <button className="sm:hidden p-2 text-text-secondary hover:text-text-primary cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-border/50 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <a href="#" className="hover:text-text-secondary transition-colors">
              首頁
            </a>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-text-secondary">商品目錄</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-text-primary">{activeCategory?.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <Sidebar
            categories={categories}
            activeCategoryId={activeCategoryId}
            onCategoryChange={handleCategoryChange}
          />

          {/* Product Content */}
          <main className="flex-1 min-w-0">
            {/* Mobile Category Select */}
            <MobileCategorySelect
              categories={categories}
              activeCategoryId={activeCategoryId}
              onCategoryChange={handleCategoryChange}
            />

            {/* Category Header + Sort */}
            <div className="flex items-end justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-1">
                  {activeCategory?.name}
                </h2>
                <p className="text-sm text-text-muted">
                  共 {filteredProducts.length} 項商品
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {(["default", "asc", "desc"] as const).map((order) => (
                  <button
                    key={order}
                    onClick={() => setSortOrder(order)}
                    className={`
                      px-3 py-1.5 text-xs rounded-lg border cursor-pointer transition-colors
                      ${sortOrder === order
                        ? "bg-accent text-white border-accent"
                        : "bg-surface text-text-secondary border-border hover:border-border-light hover:text-text-primary"
                      }
                    `}
                  >
                    {order === "default" ? "預設" : order === "asc" ? "價格低→高" : "價格高→低"}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div
              className="
                grid gap-3 sm:gap-4
                grid-cols-2
                md:grid-cols-3
                xl:grid-cols-4
              "
            >
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty state */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-text-muted text-sm">此分類目前沒有商品</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 bg-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <p>順發煙火 — 專業煙火批發供應商</p>
            <p>僅供批發商、活動公司、廟會主辦採購，恕不零售</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}

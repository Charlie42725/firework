import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, getCategoryById } from "@/lib/data";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);
  const hasRealImage =
    product.image && !product.image.includes("placeholder");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-primary-dark/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/products" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h1 className="text-lg font-bold text-text-primary tracking-tight">
                  煙火批發官網
                </h1>
              </Link>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-text-secondary">
              <Link
                href="/"
                className="hover:text-text-primary transition-colors"
              >
                首頁
              </Link>
              <Link
                href="/products"
                className="text-accent-light font-medium"
              >
                商品目錄
              </Link>
              <a href="#" className="hover:text-text-primary transition-colors">
                批發須知
              </a>
              <a href="#" className="hover:text-text-primary transition-colors">
                聯絡我們
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-border/50 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link
              href="/"
              className="hover:text-text-secondary transition-colors"
            >
              首頁
            </Link>
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
            <Link
              href="/products"
              className="hover:text-text-secondary transition-colors"
            >
              商品目錄
            </Link>
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
            <span className="text-text-secondary">{category?.name}</span>
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
            <span className="text-text-primary">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Back link */}
        <Link
          href="/products"
          className="
            inline-flex items-center gap-2 text-sm text-text-muted
            hover:text-text-primary transition-colors mb-8
          "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回商品列表
        </Link>

        {/* Product Layout: Left Image + Right Info */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Product Image */}
          <div className="lg:w-1/2 xl:w-5/12">
            <div
              className="
                relative aspect-square bg-white rounded-2xl overflow-hidden
                border border-border
              "
            >
              {hasRealImage ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-24 h-24 text-gray-200 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-gray-300 text-sm">商品圖片</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Information Panel */}
          <div className="lg:w-1/2 xl:w-7/12">
            {/* Category Tag */}
            <span className="inline-block text-xs font-medium text-accent-light bg-accent/10 px-3 py-1 rounded-full mb-4">
              {category?.name}
            </span>

            {/* Product Name */}
            <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price & Quantity */}
            <div className="flex items-baseline gap-4 mb-8">
              <div>
                <span className="text-sm text-text-muted mr-2">批發價</span>
                <span className="text-3xl font-bold text-gold">
                  NT${product.price.toLocaleString()}
                </span>
              </div>
              <span className="text-sm text-text-muted px-3 py-1 bg-surface rounded-lg border border-border">
                {product.quantity}
              </span>
            </div>

            {/* Info Sections as Tag-style blocks */}
            <div className="space-y-4">
              {/* Description */}
              <div className="bg-surface rounded-xl border border-border overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-surface-light border-b border-border">
                  <svg
                    className="w-4 h-4 text-text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-sm font-semibold text-text-primary">
                    商品說明
                  </h3>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {product.description ?? "暫無說明"}
                  </p>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-surface rounded-xl border border-border overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 bg-surface-light border-b border-border">
                  <svg
                    className="w-4 h-4 text-text-muted"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <h3 className="text-sm font-semibold text-text-primary">
                    規格資訊
                  </h3>
                </div>
                <div className="px-5 py-4">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-3">
                    <div>
                      <dt className="text-xs text-text-muted">商品名稱</dt>
                      <dd className="text-sm text-text-primary mt-0.5">
                        {product.name}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-muted">包裝數量</dt>
                      <dd className="text-sm text-text-primary mt-0.5">
                        {product.quantity}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-muted">批發單價</dt>
                      <dd className="text-sm font-semibold text-gold mt-0.5">
                        NT${product.price.toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-text-muted">商品分類</dt>
                      <dd className="text-sm text-text-primary mt-0.5">
                        {category?.name}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Notes */}
              {product.notes && (
                <div className="bg-surface rounded-xl border border-accent-muted/30 overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-3 bg-accent-muted/10 border-b border-accent-muted/20">
                    <svg
                      className="w-4 h-4 text-accent-light"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                    <h3 className="text-sm font-semibold text-accent-light">
                      注意事項
                    </h3>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {product.notes}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-xl text-sm font-semibold
                  bg-accent text-white
                  hover:bg-accent-light transition-colors
                "
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                聯絡我們洽詢批發
              </a>
              <Link
                href="/products"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-xl text-sm font-medium
                  bg-surface-light text-text-secondary
                  border border-border
                  hover:bg-surface-hover hover:text-text-primary hover:border-border-light
                  transition-colors
                "
              >
                繼續瀏覽商品
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 bg-primary-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <p>煙火批發官網 — 專業煙火批發供應商</p>
            <p>僅供批發商、活動公司、廟會主辦採購，恕不零售</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

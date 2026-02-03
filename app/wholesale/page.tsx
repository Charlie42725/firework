import Link from "next/link";

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-primary-dark/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/products" className="flex items-center gap-3">
                <img src="/LOGO.PNG" alt="順發煙火" className="h-14 w-auto" />
                <h1 className="text-lg font-bold text-text-primary tracking-tight">
                  順發煙火
                </h1>
              </Link>
            </div>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-text-secondary">
              <Link href="/" className="hover:text-text-primary transition-colors">
                首頁
              </Link>
              <Link href="/products" className="hover:text-text-primary transition-colors">
                商品目錄
              </Link>
              <Link href="/wholesale" className="text-accent-light font-medium">
                批發須知
              </Link>
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
            <Link href="/" className="hover:text-text-secondary transition-colors">
              首頁
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-text-primary">批發須知</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-text-primary mb-8">批發須知</h2>

        <div className="space-y-4">
          <div className="bg-surface rounded-xl border border-border overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">最低批發金額</h3>
                <p className="text-sm text-text-secondary mt-0.5">NT$5,000 起批</p>
              </div>
            </div>
          </div>

          <div className="bg-surface rounded-xl border border-border overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-primary">到貨時間</h3>
                <p className="text-sm text-text-secondary mt-0.5">下單後最久 7 天內到貨</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/products"
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
              bg-accent text-white hover:bg-accent-light transition-colors
            "
          >
            前往選購商品
          </Link>
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

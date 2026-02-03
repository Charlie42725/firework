"use client";

import { Category } from "@/lib/types";

interface SidebarProps {
  categories: Category[];
  activeCategoryId: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function Sidebar({
  categories,
  activeCategoryId,
  onCategoryChange,
}: SidebarProps) {
  return (
    <aside className="hidden lg:block w-[260px] shrink-0">
      <div className="sticky top-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 px-3">
          商品分類
        </h2>
        <nav className="sidebar-scroll max-h-[calc(100vh-120px)] overflow-y-auto">
          <ul className="space-y-0.5">
            {categories.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <li key={cat.id}>
                  <button
                    onClick={() => onCategoryChange(cat.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm font-medium
                      transition-all duration-200 cursor-pointer
                      flex items-center justify-between group
                      ${
                        isActive
                          ? "bg-accent text-white shadow-md shadow-accent/20"
                          : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                      }
                    `}
                  >
                    <span className="leading-snug">{cat.name}</span>
                    <span
                      className={`
                        text-xs px-2 py-0.5 rounded-full transition-colors
                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-surface text-text-muted group-hover:bg-border group-hover:text-text-secondary"
                        }
                      `}
                    >
                      {cat.productCount}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

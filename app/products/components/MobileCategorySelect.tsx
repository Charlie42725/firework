"use client";

import { useState } from "react";
import { Category } from "@/lib/types";

interface MobileCategorySelectProps {
  categories: Category[];
  activeCategoryId: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function MobileCategorySelect({
  categories,
  activeCategoryId,
  onCategoryChange,
}: MobileCategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeCategory = categories.find((c) => c.id === activeCategoryId);

  return (
    <div className="lg:hidden mb-6">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-full flex items-center justify-between
            px-4 py-3 rounded-xl
            bg-surface border border-border
            text-text-primary text-sm font-medium
            transition-colors hover:border-border-light
            cursor-pointer
          "
        >
          <span className="flex items-center gap-2">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            {activeCategory?.name ?? "選擇分類"}
          </span>
          <svg
            className={`w-4 h-4 text-text-muted transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            {/* Dropdown */}
            <div
              className="
                absolute z-20 top-full left-0 right-0 mt-2
                bg-surface border border-border rounded-xl
                shadow-2xl shadow-black/40
                max-h-[60vh] overflow-y-auto sidebar-scroll
              "
            >
              <ul className="py-1">
                {categories.map((cat) => {
                  const isActive = cat.id === activeCategoryId;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          onCategoryChange(cat.id);
                          setIsOpen(false);
                        }}
                        className={`
                          w-full text-left px-4 py-3 text-sm font-medium
                          transition-colors cursor-pointer
                          flex items-center justify-between
                          ${
                            isActive
                              ? "bg-accent/10 text-accent-light"
                              : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                          }
                        `}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={`
                            text-xs px-2 py-0.5 rounded-full
                            ${
                              isActive
                                ? "bg-accent/20 text-accent-light"
                                : "bg-surface-light text-text-muted"
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}

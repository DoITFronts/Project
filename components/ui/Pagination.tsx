'use client';

import clsx from 'clsx';
import { useState } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChangeAction: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChangeAction,
}: PaginationProps) {
  const [selectedPage, setSelectedPage] = useState(currentPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setSelectedPage(page);
    onPageChangeAction(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i += 1) {
      if (i === 1 || i === totalPages || (i >= selectedPage - 1 && i <= selectedPage + 1)) {
        pages.push(
          <button
            key={i}
            type="button"
            aria-label={`Go to page ${i}`}
            className={clsx(
              'flex size-12 items-center justify-center rounded-lg p-2.5',
              selectedPage === i
                ? 'bg-[#fcfcfc] font-bold text-[#595959]'
                : 'bg-white text-[#bfbfbf]',
            )}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>,
        );
      } else if (i === selectedPage - 2 || i === selectedPage + 2) {
        pages.push(
          <div
            key={i}
            className="flex size-12 items-center justify-center rounded-lg bg-[#fcfcfc] p-2.5"
          >
            <div className="flex gap-0.5">
              <div className="size-[3px] rounded-full bg-[#bfbfbf]" />
              <div className="size-[3px] rounded-full bg-[#bfbfbf]" />
              <div className="size-[3px] rounded-full bg-[#bfbfbf]" />
            </div>
          </div>,
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex h-12 items-center gap-2.5">
      {/* 이전 페이지 버튼 */}
      <button
        type="button"
        aria-label="Previous page"
        className="flex size-12 items-center justify-center"
        onClick={() => handlePageChange(selectedPage - 1)}
        disabled={selectedPage === 1}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M19.8408 24.7477C19.3933 24.3499 19.3933 23.6507 19.8408 23.2529L26.3356 17.4797C26.9805 16.9064 28 17.3642 28 18.2271V29.7734C28 30.6363 26.9805 31.0941 26.3356 30.5208L19.8408 24.7477Z"
            fill={selectedPage === 1 ? '#E5E7EB' : '#F0F0F0'}
          />
        </svg>
      </button>

      {/* 페이지 번호 */}
      <div className="flex gap-1">{renderPageNumbers()}</div>

      {/* 다음 페이지 버튼 */}
      <button
        type="button"
        aria-label="Next page"
        className="flex size-12 items-center justify-center"
        onClick={() => handlePageChange(selectedPage + 1)}
        disabled={selectedPage === totalPages}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M27.1592 24.7474C27.6067 24.3496 27.6067 23.6504 27.1592 23.2526L20.6644 17.4794C20.0195 16.9062 19 17.364 19 18.2268V29.7732C19 30.636 20.0195 31.0938 20.6644 30.5206L27.1592 24.7474Z"
            fill={selectedPage === totalPages ? '#E5E7EB' : '#F0F0F0'}
          />
        </svg>
      </button>
    </div>
  );
}

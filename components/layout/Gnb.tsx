'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function GNB() {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full px-4 md:px-11 lg:px-60 md:h-[60px] h-14 bg-orange-500 shadow-md font-['Pretendard'] flex justify-between items-center">
        <div className="md:gap-x-6 gap-x-3 flex items-center">
          {/* 로고 나중에 변경 */}
          <Link href="/" className="text-lg font-bold text-white">
            같이달램
          </Link>
          <NavItem href="/a" label="모임 찾기" currentPath={pathname} />
          <NavItem href="/b" label="찜한 모임" currentPath={pathname} />
          <NavItem href="/b" label="모든 리뷰" currentPath={pathname} />
        </div>
        <div>
          <NavItem href="/signin" label="로그인" currentPath={pathname} />
        </div>
      </nav>
    </>
  );
}

function NavItem({
  href,
  label,
  currentPath,
}: {
  href: string;
  label: string;
  currentPath: string;
}) {
  return (
    <Link href={href} className="text-orange-50 md:text-base text-sm font-semibold">
      {label}
    </Link>
  );
}

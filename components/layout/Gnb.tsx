'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import Logo from '@/public/assets/mainLogo/logoYW.svg';

import Icon from '../shared/Icon';

function NavItem({
  href,
  label,
  currentPath,
}: {
  href: string;
  label: string;
  currentPath: string;
}) {
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`flex items-center font-['Pretendard'] text-sm font-bold transition-colors md:text-base ${
        isActive ? 'text-yellow-400' : 'text-white'
      }`}
    >
      {label}
    </Link>
  );
}

export default function GNB() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      setIsLoggedIn(!!token);
    }
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 flex h-[60px] w-full items-center bg-black px-3 shadow-md md:h-[60px] md:px-6 xl:px-[360px]">
      <div className="flex w-full justify-between">
        <div className="flex items-center justify-between gap-x-[31px] md:gap-x-[78px]">
          <Link href="/" className="flex h-[17px] w-[75px] md:h-5 md:w-20">
            <Image
              src={Logo}
              alt="번개팅 메인 로고"
              width={80}
              height={20}
              priority
              loading="eager"
            />
          </Link>
          <div className="mr-5 flex gap-x-3 md:gap-x-6">
            <NavItem href="/meeting/list" label="번개 찾기" currentPath={pathname} />
            <NavItem href="/my/liked" label="찜한 번개" currentPath={pathname} />
            <NavItem href="/my/review" label="리뷰" currentPath={pathname} />
          </div>
        </div>
        <div>
          {isLoggedIn ? (
            // TODO: user 개인 Profile 분기처리
            <Icon path="profile/userProfileDefault" width="37px" height="37px" />
          ) : (
            <NavItem href="/user/signin" label="로그인" currentPath={pathname} />
          )}
        </div>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from '../shared/Icon';
import Image from 'next/image';
import Logo from '@/public/assets/mainLogo/logoYW.svg';

export default function GNB() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); // 또는 쿠키에서 가져오기
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="w-full md:h-[60px] h-[57px] bg-black shadow-md flex items-center xl:px-[360px] md:px-6 px-3">
      <div className="flex justify-between w-full">
        {/* 왼쪽덩어리 */}
        <div className="flex items-center md:gap-x-[78px] gap-x-[31px] justify-between">
          <Link href="/" className="flex md:w-20 md:h-5 w-[75px] h-[17px]]">
            <Image src={Logo} alt="번개팅 메인 로고" width={80} height={20} />
          </Link>
          <div className="mr-5 flex md:gap-x-6 gap-x-3">
            <NavItem href="/a" label="번개 찾기" currentPath={pathname} />
            <NavItem href="/b" label="찜한 번개" currentPath={pathname} />
            <NavItem href="/c" label="리뷰" currentPath={pathname} />
          </div>
        </div>

        {/* 오른쪽덩어리 */}
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
    <Link
      href={href}
      className="text-white md:text-base text-sm font-bold font-['Pretendard'] flex items-center"
    >
      {label}
    </Link>
  );
}

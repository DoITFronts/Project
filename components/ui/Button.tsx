import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonSize = 'sm' | 'lg';
type ButtonColor = 'filled' | 'white';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonColor;
}

export default function Button({
  children,
  className = '',
  type = 'button',
  form,
  onClick,
  disabled = false,
  size = 'sm',
  color = 'filled',
}: ButtonProps) {
  const buttonStyle = twMerge(
    baseStyle,
    styleByColor[color],
    size === 'sm' && smButtonStyle,
    className,
  );
  return (
    <button className={buttonStyle} type={type} form={form} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

const baseStyle =
  "flex items-center justify-center rounded-xl font-semibold font-['Pretendard'] overflow-hidden";

// white2: clsx(baseStyle, 'bg-white'),

const styleByColor: Record<ButtonColor, string> = {
  filled:
    'text-white bg-orange-600 gap-2.5 inline-flex overflow-hidden hover:bg-orange-700 active:bg-orange-800 disabled:bg-gray-400',
  white:
    'bg-white border border-orange-600 text-orange-600 hover:border-orange-700 hover:text-orange-700 active:border-orange-800 active:text-orange-800 disabled:border-gray-400 disabled:text-gray-400',
};

const smButtonStyle = 'px-16 text-sm';

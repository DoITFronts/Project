interface CheckIconProps {
  size?: 'sm' | 'lg';
  variant?: 'default' | 'filled-orange' | 'filled-dark';
}

export default function CheckIcon({ size = 'sm', variant = 'default' }: CheckIconProps) {
  const dimensions = size === 'sm' ? 16 : 24;

  if (variant === 'filled-orange') {
    return (
      <svg
        width={dimensions}
        height={dimensions}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" fill="#F97316" />
        <path
          d="M8.5 11.8245L11.0087 14.3333L15.342 10"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === 'filled-dark') {
    return (
      <svg
        width={dimensions}
        height={dimensions}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" fill="#111827" />
        <path
          d="M8.5 11.8245L11.0087 14.3333L15.342 10"
          stroke="#F97316"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      width={dimensions}
      height={dimensions}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7.24558L7.08767 10.3333L12.4209 5"
        stroke="#F97316"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

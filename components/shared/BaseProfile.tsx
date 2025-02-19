function ProfileIcon({
  theme,
  size = 'medium',
}: {
  theme: 'light' | 'dark';
  size?: 'small' | 'medium';
}) {
  const backgroundColor = theme === 'dark' ? '#BFBFBF' : '#F0F0F0';
  const pathColor = theme === 'dark' ? '#F0F0F0' : '#BFBFBF';
  const dimensions = size === 'small' ? 20 : 30;

  return (
    <svg
      width={dimensions}
      height={dimensions}
      viewBox={`0 0 ${dimensions} ${dimensions}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={dimensions} height={dimensions} rx="15" fill={backgroundColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={
          size === 'small'
            ? 'M9.63354 4.94165H12.5172V5.61554H13.2356C13.222 5.6513 13.2046 5.68601 13.1839 5.71974L10.8579 9.01387H13.0423V9.58581H13.6109C13.5965 9.6668 13.5618 9.74815 13.5023 9.82775L7.71632 15.0582V14.4989H7.32136L8.19905 10.6906H6.92856V10.1136H6.38867C6.39342 10.0876 6.39958 10.0603 6.40693 10.0315L8.91549 5.61554H9.63354V4.94165Z'
            : 'M14.34 5.89575H19.5326V7.1089H20.8243C20.7997 7.17318 20.7685 7.23559 20.7314 7.29625L16.5445 13.2254H20.4771V14.2552H21.4998C21.4739 14.4009 21.4114 14.5472 21.3044 14.6903L10.8904 24.1042V23.0978H10.1789L11.7587 16.2434H9.47256V15.2051H8.5C8.50855 15.1581 8.51966 15.109 8.53291 15.057L13.0481 7.1089H14.34V5.89575Z'
        }
        fill={pathColor}
      />
    </svg>
  );
}

export default ProfileIcon;

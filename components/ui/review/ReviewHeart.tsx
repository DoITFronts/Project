export default function ReviewHeart({ count }: { count: number }) {
  return (
    <svg
      width="140"
      height="28"
      viewBox="0 0 140 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.05238 5.59961H9.83133H12.6103V8.39961H15.3892V5.59961H18.1682H20.9471V8.39961H23.7261V11.1996V13.9996H20.9471V16.7996H18.1682V19.5996H15.3892V22.3996H12.6103V19.5996H9.83133V16.7996H7.05238V13.9996H4.27344V11.1996V8.39961H7.05238V5.59961Z"
        fill={count >= 1 ? '#FFD500' : '#F0F0F0'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.0524 5.59961H37.8313H40.6103V8.39961H43.3892V5.59961H46.1682H48.9471V8.39961H51.7261V11.1996V13.9996H48.9471V16.7996H46.1682V19.5996H43.3892V22.3996H40.6103V19.5996H37.8313V16.7996H35.0524V13.9996H32.2734V11.1996V8.39961H35.0524V5.59961Z"
        fill={count >= 2 ? '#FFD500' : '#F0F0F0'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.0524 5.59961H65.8313H68.6103V8.39961H71.3892V5.59961H74.1682H76.9471V8.39961H79.7261V11.1996V13.9996H76.9471V16.7996H74.1682V19.5996H71.3892V22.3996H68.6103V19.5996H65.8313V16.7996H63.0524V13.9996H60.2734V11.1996V8.39961H63.0524V5.59961Z"
        fill={count >= 3 ? '#FFD500' : '#F0F0F0'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.0524 5.59961H93.8313H96.6103V8.39961H99.3892V5.59961H102.168H104.947V8.39961H107.726V11.1996V13.9996H104.947V16.7996H102.168V19.5996H99.3892V22.3996H96.6103V19.5996H93.8313V16.7996H91.0524V13.9996H88.2734V11.1996V8.39961H91.0524V5.59961Z"
        fill={count >= 4 ? '#FFD500' : '#F0F0F0'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M119.052 5.59961H121.831H124.61V8.39961H127.389V5.59961H130.168H132.947V8.39961H135.726V11.1996V13.9996H132.947V16.7996H130.168V19.5996H127.389V22.3996H124.61V19.5996H121.831V16.7996H119.052V13.9996H116.273V11.1996V8.39961H119.052V5.59961Z"
        fill={count >= 5 ? '#FFD500' : '#F0F0F0'}
      />
    </svg>
  );
}

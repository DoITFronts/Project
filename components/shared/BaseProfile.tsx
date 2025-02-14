function LightProfile() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="30" rx="15" fill="#F0F0F0" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3406 5.89478H19.5312V7.10753H20.8245C20.7999 7.17197 20.7686 7.23454 20.7314 7.29534L16.5445 13.2248H20.477V14.2543H21.5C21.474 14.4 21.4116 14.5465 21.3045 14.6898L10.8891 24.1052V23.0977H10.1788L11.7586 16.2429H9.4714V15.2041H8.5C8.50853 15.1572 8.51962 15.1083 8.53281 15.0564L13.0484 7.10753H14.3406V5.89478Z"
        fill="#BFBFBF"
      />
    </svg>
  );
}

function DarkProfile() {
  return (
    <div data-svg-wrapper>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="30" rx="15" fill="#BFBFBF" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.34 5.89575H19.5326V7.1089H20.8243C20.7997 7.17318 20.7685 7.23559 20.7314 7.29625L16.5445 13.2254H20.4771V14.2552H21.4998C21.4739 14.4009 21.4114 14.5472 21.3044 14.6903L10.8904 24.1042V23.0978H10.1789L11.7587 16.2434H9.47256V15.2051H8.5C8.50855 15.1581 8.51966 15.109 8.53291 15.057L13.0481 7.1089H14.34V5.89575Z"
          fill="#F0F0F0"
        />
      </svg>
    </div>
  );
}

function BaseProfile({ theme }) {
  return theme === 'dark' ? <DarkProfile /> : <LightProfile />;
}

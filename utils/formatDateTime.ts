function formatDateTime(datetimeStr: string, locale = 'ko-KR'): string {
  const dateTime = new Date(`${datetimeStr}`);

  const formattedDate = dateTime.toLocaleDateString(locale, {
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = dateTime.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return `${formattedDate} ${formattedTime}`;
}

export default formatDateTime;

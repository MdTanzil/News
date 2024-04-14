function humanizeDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const now = new Date();

  const diff = Math.abs(now - date);

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `${days} day${days === 1 ? "" : "s"} ${hours % 24} hour${
      hours % 24 === 1 ? "" : "s"
    } ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ${minutes % 60} minute${
      minutes % 60 === 1 ? "" : "s"
    } ago`;
  } else {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }
}

// Output: "2 days ago" (assuming current date is 2024-02-09)

export default humanizeDateTime;

const today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formattedDate = `${days[today.getDay()]}, ${
  months[today.getMonth()]
} ${today.getDate()}, ${today.getFullYear()}`;

export default formattedDate;

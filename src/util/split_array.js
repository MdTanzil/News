function splitNews(array) {
  const length = array.length;
  const splitIndex = Math.floor((length * 3) / 4); // Split at 3/4th of the length

  // Split the array
  const part1 = array.slice(0, splitIndex);
  const part2 = array.slice(splitIndex);

  return [part1, part2];
}

export default splitNews;

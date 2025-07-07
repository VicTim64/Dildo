export const formatDate = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
export const getReadTime = (content) => {
  const contentText = JSON.stringify(content);
  const charCount = contentText?.length;
  const wordsCount = Math.ceil(charCount / 5);
  const readTime = Math.ceil(wordsCount / 200);
  return readTime;
};
export default function formatDate(date = '2020-03-02 10:16:47') {
  const removeTime = date.split(' ')[0];
  const splitDate = removeTime.split('-');

  const year = splitDate[0];
  const month = splitDate[1];
  const day = splitDate[2];

  const newDate = new Date(Date.UTC(year, month, day));

  return new Intl.DateTimeFormat('en-GB').format(newDate);
}

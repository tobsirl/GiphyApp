export default function setColorRating(rating) {
  switch (rating) {
    case 'g':
      return 'green';
    case 'pg':
      return 'yellow';
    case 'pg-13':
      return 'orange';
    case 'r':
      return 'red';
    default:
      return rating;
  }
}

import setColorRating from '../utils/setColorRating';

function Giphy({
  id,
  title,
  rating,
  images,
  import_datetime,
  type,
  username,
  source_tld,
}) {
  return (
    <div className="giphy" onClick={() => console.log(`Id: ${id}`)}>
      <img src={images.original.url} alt={title} />
      <div className="giphy__info">
        <p>{title}</p>
        <span className={`tag ${setColorRating(rating)}`}>
          {rating.toUpperCase()}
        </span>
      </div>

      <div className="giphy__details">
        <h3>Details</h3>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Source:</strong> {source_tld}
        </p>
        <p>
          <strong>Import Date & time:</strong> {import_datetime}
        </p>
      </div>
    </div>
  );
}

Giphy.defaultProps = {
  source_tld: 'N/A',
};

export default Giphy;
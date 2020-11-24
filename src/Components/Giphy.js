import Proptypes from 'prop-types';
import formatDate from '../utils/formatDate';
import setColorRating from '../utils/setColorRating';
import truncateString from '../utils/truncateString';
function Giphy({
  id,
  title,
  rating,
  images,
  import_datetime,
  type,
  username,
  source_tld,
  url,
}) {
  return (
    <div className="giphy" onClick={() => console.log(`Id: ${id}`)}>
      <img src={images.original.url} alt={title} />
      <div className="giphy__info">
        <p>{truncateString(title, 40)}</p>
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
          <strong>Date & time:</strong> {formatDate(import_datetime)}
        </p>
        <a className="btn" href={url} target="_blank" rel="noreferrer">
          View on Giphy
        </a>
      </div>
    </div>
  );
}

Giphy.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  rating: Proptypes.string.isRequired,
  images: Proptypes.object.isRequired,
  import_datetime: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
  source_tld: Proptypes.string.isRequired,
};

Giphy.defaultProps = {
  source_tld: 'N/A',
};

export default Giphy;

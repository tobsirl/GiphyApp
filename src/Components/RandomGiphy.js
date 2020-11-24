import Proptypes from 'prop-types';
import setColorRating from '../utils/setColorRating';
import truncateString from '../utils/truncateString';

import { GiRollingDices } from 'react-icons/gi';
export default function RandomGiphy(props) {
  const {
    title = 'No Title',
    id,
    images,
    rating = 'g',
    type,
    username,
    source_tld,
    import_datetime,
    url,
  } = props.data;

  return (
    <>
      <div className="random">
        <div className="random__btn">
          <button
            onClick={() => props.rollDice(props.roll === true ? false : true)}
            className="btn-dice"
          >
            <GiRollingDices />
          </button>
        </div>

        <div className="giphy">
          <img src={images?.original.url} alt="title" />

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
              <strong>Import Date & time:</strong> {import_datetime}
            </p>
            <a className="btn" href={url} target="_blank" rel="noreferrer">
              View on Giphy
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

RandomGiphy.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  rating: Proptypes.string.isRequired,
  images: Proptypes.object.isRequired,
  import_datetime: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
  source_tld: Proptypes.string.isRequired,
};

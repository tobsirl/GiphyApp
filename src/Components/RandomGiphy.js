// import { faDiceD6 } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GiRollingDices } from 'react-icons/gi';
export default function RandomGiphy(props) {
  const { title, id, images } = props.data;
  console.log(props.data);
  return (
    <div className="random">
      <div className="random__btn">
        <button
          onClick={() => props.rollDice(props.roll === true ? false : true)}
          className="btn-dice"
        >
          {/* <FontAwesomeIcon icon={faDiceD6} size="6x" /> */}
          <GiRollingDices />
        </button>
      </div>
      <div className="random__image">
        <img src={images?.original.url} alt="title" />
      </div>
    </div>
  );
}

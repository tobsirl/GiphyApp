export default function RandomGiphy(props) {
  const { title, id, images } = props.data;
  console.log(props.data);
  return (
    <div className="randomGiphy">
      <button
        onClick={() => props.rollDice(props.roll === true ? false : true)}
      >
        Random
      </button>
      {/* <p>{JSON.stringify(props.data, null, 2)}</p> */}
      <h1>{title}</h1>
      <p>{id}</p>
      <img src={images?.original.url} alt="title" />
    </div>
  );
}

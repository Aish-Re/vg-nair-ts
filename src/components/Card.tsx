type CardProps = {
  title : string,
  description : string,
  color : string
};

function Card(props : CardProps) {
  return (
  <div className={`card ${props.color}`}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
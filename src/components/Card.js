const Card = props => {
  return (
    <div className="backdrop-blur-md bg-white/30 rounded-md text-center text-white m-4 p-4">
      {props.children}
    </div>
  );
};

export default Card;

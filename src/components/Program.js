const Program = (props) => {
  const { name, description, broadcastinfo } = props.data;

  return (
    <div>
      <p> {name} </p>
      <p> {description} </p>
      <p> { broadcastinfo } </p>
    </div>
  
  );
};

export default Program;

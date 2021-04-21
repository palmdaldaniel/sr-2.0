const Program = (props) => {
  const { name, description } = props.data;

  return (
    <div>
      <p> {name} </p>
      <p> {description} </p>
    </div>
  );
};

export default Program;

import Program from "./Program";

const ProgramsList = ({programs}) => {
 
  return (
    <div>
      {programs &&
       programs.map((program, i) => (
          <Program data={program} key={i} />
        ))}
    </div>
  );
};

export default ProgramsList;

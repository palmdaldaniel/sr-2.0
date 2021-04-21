import { useContext } from "react";
import { RadioContext } from "../contexts/RadioProvider";
import Categories from "./Categories";

import Program from "./Program";

const ProgramsList = () => {
  const { programs, filteredPrograms } = useContext(RadioContext);


  return (
    <div>
    <Categories />
      {filteredPrograms &&
       filteredPrograms.programs.map((program, i) => (
          <Program data={program} key={i} />
        ))}
      ; 
    </div>
  );
};

export default ProgramsList;

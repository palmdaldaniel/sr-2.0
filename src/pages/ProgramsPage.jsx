import { useContext } from 'react'
import ProgramsList from '../components/ProgramsList';
import Categories from '../components/Categories'
import { RadioContext } from '../contexts/RadioProvider';


import { useEffect } from "react";
import { useLocation } from "react-router-dom";



const ProgramsPage = () => {

const { programs } = useContext(RadioContext)

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return ( 
        <div className="PogramsPage">
          <Categories />
            <ProgramsList programs={programs} />
        </div>
     );
}
 
export default ProgramsPage;
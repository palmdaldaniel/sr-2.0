import { useContext } from 'react'
import ProgramsList from '../components/ProgramsList';
import { RadioContext } from '../contexts/RadioProvider';


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProgramsPage = () => {


    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return ( 
        <div className="PogramsPage">
            <ProgramsList />
        </div>
     );
}
 
export default ProgramsPage;
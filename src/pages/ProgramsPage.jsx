import { useContext } from 'react'
import ProgramsList from '../components/ProgramsList';
import { RadioContext } from '../contexts/RadioProvider';

const ProgramsPage = () => {

    return ( 
        <div className="PogramsPage">
            <ProgramsList />
        </div>
     );
}
 
export default ProgramsPage;
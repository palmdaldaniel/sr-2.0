import { Link  } from 'react-router-dom'


const Navbar = () => {
    return ( 
        <div className='Navbar'>
            <Link to='/'> Home </Link>
            <Link to='/programs'> Programs </Link>
            <Link to='/login'> Login </Link>
        </div>
        
     );
}
 
export default Navbar;
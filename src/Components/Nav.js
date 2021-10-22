import {FaUser } from 'react-icons/fa'

const Nav = () => {
    return ( 
         <div className='nav-container'>
                <nav>
                    <div className='logo'>
                        <h1>Welcome Back John</h1>
                    </div>
                    <div className='profile-pix'><span><FaUser/></span></div>
                </nav>
         </div>
     );
}
 
export default Nav;
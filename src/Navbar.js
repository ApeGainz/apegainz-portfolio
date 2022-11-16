import React from 'react';

  
const Navbar = () => {
  return (
   <div className='navbar-container'> 
        <div className='columns is-centered'> 
            <div className='column has-text-centered is-2'>
                <a className='nav-item'> Diamond Paper Hands </a>
            </div>
            <div className='column has-text-centered is-2'>
                <a className='nav-item'> Hindsight Tool </a>
            </div>
            <div className='column has-text-centered is-2'>
                <a className='nav-item'> Web3 Quiz </a>
            </div>
            <div className='column has-text-centered is-2'>
                <a className='nav-item'> Tweets </a>
            </div>
        </div> 
   </div>
  );
};
  
export default Navbar;
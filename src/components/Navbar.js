import React from 'react';
import { Outlet, Link } from "react-router-dom";

  
const Navbar = () => {
  return (
    <>
        <div className='navbar-container'> 
            <div className='columns is-centered'> 
                <div className='column has-text-centered is-2'>
                    <Link to="/" className='nav-item'> Home </Link>
                </div>
                <div className='column has-text-centered is-2'>
                    <Link to="/dph" className='nav-item'> Diamond Paper Hands </Link>
                </div>
                <div className='column has-text-centered is-2'>
                    <Link to="/hindsightTool" className='nav-item' style={{pointerEvents: 'none'}}>Hindsight Tool</Link>
                </div>
                <div className='column has-text-centered is-2'>
                    <Link to="/web3Quiz" className='nav-item' style={{pointerEvents: 'none'}}> Web3 Quiz </Link>
                </div>
            </div> 
        </div>
        
        <Outlet />
    </>

  );
};
  
export default Navbar;
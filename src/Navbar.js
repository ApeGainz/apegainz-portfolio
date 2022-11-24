import React from 'react';
import { Outlet, Link } from "react-router-dom";

  
const Navbar = () => {
  return (
    <>
        <div className='navbar-container'> 
            <div className='columns is-centered'> 
                <div className='column has-text-centered is-2'>
                    <Link to="/dph"> Diamond Paper Hands </Link>
                </div>
                <div className='column has-text-centered is-2'>
                    <Link to="/blogs">Hindsight Tool</Link>
                </div>
                <div className='column has-text-centered is-2'>
                    <Link to="/web3Quiz"> Web3 Quiz </Link>
                </div>
                <div className='column has-text-centered is-2'>
                    <Link to="/"> Home </Link>
                </div>
            </div> 
        </div>
        
        <Outlet />
    </>

  );
};
  
export default Navbar;
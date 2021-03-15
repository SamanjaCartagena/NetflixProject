import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
   const [show, handleShow] = useState(false);
    useEffect(() =>{
      
      window.addEventListener("scroll", ()=>{
          if(window.scrollY >100){
               handleShow(true);
          }
          else handleShow(false);
      });
      return () =>{
          window.removeEventListener("scroll");
      };

    },[]);



    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
            />

            <img 
            className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix logo"
            
            
            />
        </div>
    )
}

export default Nav

import React from "react";

 function Header(){
     return(
      
        <>
        <div className="Header">
        <div className="logo">
          <img src="../image/logo.png" alt="" />
          <div id="logo-name">Syndic</div>
        </div>
        <div className="User">
          <div id="username">
          <h2>Syndic</h2>
          <h3>Résidence tamssena</h3>
          </div>
          <img src="../image/user.png" alt="" />
        </div>
    </div>
    </>
       
     )
  ;
 }
 export default Header;
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
          <span className="logoText">H.<span>F</span></span>
          <span>HatimFn</span>
        </div>

        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
           
            <div className="notification">
              <img src="./notifications.svg" alt="" />
              <span>1</span>
            </div>
            
            <div className="user">
              <img
                src="./MyProfile.jpg"
                alt=""
              />
              <span>Hatim</span>
            </div>
            
            <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

function MainHeader({light,setLight}) {
  return   <header>
  <nav  className={light ? "nav-light" : "nav-dark"} >
    <h1>Where in the world?</h1>
    <button
      type="button"
      className={light ? "btn-light" : "btn-dark"}
      onClick={() => setLight(!light)}
      id="btn"
    >
     <i className={light? "fa fa-duotone fa-moon ":"fa fa-thin fa-moon"}></i>
      {light? "Light":"Dark"} mode
    </button>
  </nav>
</header>;
}

export default MainHeader;

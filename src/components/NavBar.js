import imagen from "../img/icono_usuario.png";
import imagen2 from "../img/rayo.jpg";
import { useState } from "react";


function NavBar() {

  const [showLogo, setshowLogo] = useState(true);
  const [showProfile, setshowProfile] = useState(true);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"  onClick={() => {setshowLogo(!showLogo) }}>
            <img src={imagen2} alt="" width="30" height="24" />
            three pics
          </a>
          <a className="navbar-brand" href="#"  onClick={() => {setshowProfile(!showProfile)}}>
            <img src={imagen} alt="" width="30" height="24" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

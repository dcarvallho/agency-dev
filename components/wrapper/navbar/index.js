import React from "react";
import Button from "../../button";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <h2>Agency</h2>
        <div className={style.navbarRight}>
          <ul className={style.navbarList}>
            <li>Home</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
          {/* Separar botões */}
          <div className={style.navbarRightButtons}>
            <Button>ENTRAR</Button>
            <Button className={style.navbarRegisterButton}>REGISTRAR</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <header>
      <nav className={style.navbar}>
        <h2>Agency</h2>
        <div className={style.navbarRight}>
            <ul className={style.navbarList}>
              <li>Home</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
                <button>Entrar</button>
                <button>Registrar</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

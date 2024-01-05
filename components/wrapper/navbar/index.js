import Image from "next/image";
import React from "react";
import Button from "../../button";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.navbarBrand}>
        <div style={{ backgroundColor: 'white' }}>
          <Image
            src="/images/icon-home.png"
            alt="Cerébro com lâmpada"
            height={50}
            width={50}
          />
        </div>
        <h2>Agency</h2>
        </div>
        <div className={style.navbarRight}>
          <ul className={style.navbarList}>
            <li>Home</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
          <div className={style.navbarRightButtons}>
            <Button>ENTRAR</Button>
            <Button>REGISTRAR</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

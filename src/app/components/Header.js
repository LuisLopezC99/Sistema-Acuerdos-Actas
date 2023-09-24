import Link from "next/link";
import Image from "next/image";
import "src/app/components/Header.css";
import React from "react";

const Header = () => {
  return (    

    <header className="caja">
        <h1> 
            <Image width={100} height={100} src="/icons/logo.png" />
            <p className="texto1"> Municipalidad de Tibas</p>
        </h1>
        <div className="caja1">
            <p className="texto2">Sistema de Acuerdos y Actas Municipales</p>
        <nav>
            <Link href="/sesiones">Sesiones</Link>
            <Link href="/acuerdos">Acuerdos</Link>
            <Link href="/actas">Actas</Link>
          </nav>
        </div>
        <a className="caja1">
            <Image  width={100} height={100} src="/icons/account.png" />
            <h1 href="/account" className="texto1">Perfil</h1>
        </a>
        
    </header>
  );
}

export default Header;

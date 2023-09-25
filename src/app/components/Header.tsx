import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
    const [showEnTramiteMenu, setShowEnTramiteMenu] = useState(false);
    const [showAcuerdosMenu, setShowAcuerdosMenu] = useState(false);

    const toggleEnTramiteMenu = () => {
        setShowEnTramiteMenu(!showEnTramiteMenu);
    };

    const toggleAcuerdosMenu = () => {
        setShowAcuerdosMenu(!showAcuerdosMenu);
    };

    const hideAcuerdosMenu = () => {
        setShowAcuerdosMenu(false);
    };

    const acuerdosItems = [
        { label: "Redirigido", href: "/acuerdos/redirigido" },
        { label: "Vencidos", href: "/acuerdos/vencidos" },
        { label: "Cumplidos", href: "/acuerdos/cumplidos" },
    ];

    return (
        <Navbar className="gray-background" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img width={100} height={100} src="icons/logo.png" alt="Logo" />
                    <p className="navbar-brand-text">Municipalidad de Tibás</p>
                </Navbar.Brand>

                <Nav className="mx-auto flex-column align-items-center">
                    <div className="d-flex flex-column align-items-center mt-auto">
                        <p className="header-text">Sistema de Acuerdos y Actas Municipales</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="mx-2">
                            <Link href="/sesiones">
                                <span className="nav-link-text">Sesiones</span>
                            </Link>
                        </div>
                        <div
                            className="mx-2"
                            onMouseEnter={toggleAcuerdosMenu}
                            onMouseLeave={hideAcuerdosMenu}
                        >
                            <NavDropdown
                                title={<span className="nav-link-text">Acuerdos</span>}
                                id="acuerdos-dropdown"
                            >
                                {acuerdosItems.map((item, index) => (
                                    <NavDropdown.Item href={item.href} key={index}>
                                        <span className="nav-link-text">{item.label}</span>
                                    </NavDropdown.Item>
                                ))}
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    onMouseEnter={toggleEnTramiteMenu}
                                    onMouseLeave={toggleEnTramiteMenu}
                                >
                                    <span className="nav-link-text">En trámite</span>
                                    {showEnTramiteMenu && (
                                        <div className="custom-dropdown-menu">
                                            <span className="nav-link-text">Nuevos</span>
                                            <span className="nav-link-text">Por vencer</span>
                                        </div>
                                    )}
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="mx-2">
                            <Link href="/actas">
                                <span className="nav-link-text">Actas</span>
                            </Link>
                        </div>
                    </div>
                </Nav>

                <Nav>
                    <Link href="/account">
                        <span>
                            <img width={100} height={100} src="/icons/account.png" alt="Perfil" />
                            <p className="navbar-brand-text">Perfil</p>
                        </span>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;

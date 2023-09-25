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
            <Container fluid>
                <Navbar.Brand>
                    <img width={62} height={84} style={{ fontSize: '18px', marginLeft: '100px', marginTop: '5px' }} src="icons/logo.png" alt="Logo" />
                    <p className="navbar-brand-text" style={{ fontSize: '18px', marginLeft: '50px', marginTop: '5px' }}>
                        Municipalidad de Tibás
                    </p>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center mt-auto">
                            <p className="header-text">
                                Sistema de Acuerdos y Actas Municipales
                            </p>
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
                                        style={{ position: 'relative' }}
                                    >
                                        <span className="nav-link-text">En trámite</span>
                                        {showEnTramiteMenu && (
                                            <div className="custom-dropdown-menu">
                                                <div className="submenu-items">
                                                    <span className="nav-link-text">Nuevos</span>
                                                    <span className="nav-link-text">Por vencer</span>
                                                </div>
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
                        <Link href="/account" style={{ fontSize: '18px', marginLeft: '100px', marginTop: '5px' }}>
                            <span>
                                <img width={50} height={50} src="/icons/account.png" alt="Perfil" />
                                <p className="navbar-brand-text" >Perfil</p>
                            </span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

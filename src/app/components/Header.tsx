import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
    const grayBackground = {
        backgroundColor: 'rgba(12, 12, 12, 0.12)',
    };

    return (
        <Navbar style={grayBackground} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand style={{ marginLeft: '-50px' }}>
                    <img width={100} height={100} src="icons/logo.png" alt="Logo" />
                    <p className="texto1 mb-0" style={{ color: 'rgba(3, 12, 4, 0.51)', marginLeft: '-30px' }}>Municipalidad de Tibás</p>
                </Navbar.Brand>

                <Nav className="mx-auto flex-column align-items-center">
                    <div className="d-flex flex-column align-items-center mt-auto">
                        <p style={{ color: '#34A853', fontSize: '35px', marginBottom: '10px' }}>Sistema de Acuerdos y Actas Municipales</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="mx-2" style={{ cursor: 'pointer', marginTop: '37px' }}>
                            <span onClick={() => window.location.href = '/sesiones'}>
                                <span className="nav-link-text">Sesiones</span>
                            </span>
                        </div>

                        <NavDropdown
                            title={<span className="acuerdos-title">Acuerdos</span>}
                            id="acuerdos-dropdown"
                            className="mx-2"
                            style={{ cursor: 'pointer', marginTop: '20px' }}
                        >
                            <div className="custom-dropdown-menu" style={{ backgroundColor: '#E5D22D' }}>
                                <NavDropdown.Item href="/acuerdos/nuevos">
                                    <span className="nav-link-text">Nuevos</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/acuerdos/en-tramite">
                                    <span className="nav-link-text">En trámite</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/acuerdos/redirigido">
                                    <span className="nav-link-text">Redirigido</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/acuerdos/vencidos">
                                    <span className="nav-link-text">Vencidos</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/acuerdos/cumplidos">
                                    <span className="nav-link-text">Cumplidos</span>
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>

                        <div className="mx-2" style={{ cursor: 'pointer', marginTop: '37px' }}>
                            <span onClick={() => window.location.href = '/actas'}>
                                <span className="nav-link-text">Actas</span>
                            </span>
                        </div>
                    </div>
                </Nav>

                <Nav>
                    <Nav.Link href="/account" style={{ marginRight: '-200px' }}>
                        <img width={100} height={100} src="/icons/account.png" alt="Perfil" />
                        <p className="texto1 mb-0" style={{ color: 'rgba(3, 12, 4, 0.51)', marginLeft: '30px' }}>Perfil</p>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}
export default Header;
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

interface HeaderProps {
  updateFilter: (newFilter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ updateFilter }) => {
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
    { label: "Redirigido" },
    { label: "Vencido" },
    { label: "Cumplido" },
  ];

  const handleMenuItemClick = (newFilter: string) => {
    updateFilter(newFilter);
  };

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
              <div className="mx-2" style={{ fontSize: '15px', marginLeft: '100px', marginTop: '20px' }}>
                <span className="nav-link-text" onClick={() => handleMenuItemClick('Mis Acuerdos')}>
                  Mis Acuerdos
                </span>
              </div>
              <div className="mx-2" style={{ fontSize: '15px', marginLeft: '100px', marginTop: '20px' }}>
                <span className="nav-link-text" onClick={() => handleMenuItemClick('Sesiones')}>
                  Sesiones
                </span>
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
                    <NavDropdown.Item key={index} onClick={() => handleMenuItemClick(item.label)}>
                      <span className="nav-link-text">{item.label}</span>
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onMouseEnter={toggleEnTramiteMenu}
                    onMouseLeave={toggleEnTramiteMenu}
                    style={{ position: 'relative' }}
                    className="submenu-parent"
                  >
                    <span className="nav-link-text">En trámite</span>
                    {showEnTramiteMenu && (
                      <div className="custom-dropdown-menu submenu-top">
                        <div className="submenu-items" style={{ justifyContent: 'flex-start', flexDirection: 'column' }}>
                          <span className="nav-link-text" onClick={() => handleMenuItemClick('nuevo')}>
                            Nuevos
                          </span>
                          <span className="nav-link-text" onClick={() => handleMenuItemClick('por vencer')}>
                            Por vencer
                          </span>
                        </div>
                      </div>
                    )}
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="mx-2" style={{ fontSize: '15px', marginLeft: '100px', marginTop: '20px' }}>
                <span className="nav-link-text" onClick={() => handleMenuItemClick('Busquedas')}>
                  Busquedas
                </span>
              </div>
            </div>
          </Nav>
          <Nav>
            <span style={{ fontSize: '18px', marginLeft: '100px', marginTop: '5px' }}>
              <img width={50} height={50} src="/icons/account.png" alt="Perfil" />
              <p className="navbar-brand-text" >Perfil</p>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-white text-white fixed-bottom">
            <Container>
                <div className="d-flex justify-content-between align-items-center py-3">
                    <p className="custom-footer-text">&copy; 2023 Sistema de Acuerdos y Actas Municipales. Todos los derechos reservados</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;

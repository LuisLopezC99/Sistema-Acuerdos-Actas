import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div style={{ position: 'absolute', top: '210px', right: '150px' }}>
      <button className="btn btn-amarillo" onClick={handleModalOpen}>
  Crear Nuevo
</button>


      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title >Crear Nuevo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="sesion">
              <Form.Label>Sesión</Form.Label>
              <Form.Control type="text" placeholder="Ingresa la sesión" />
            </Form.Group>

            <Form.Group controlId="tema">
              <Form.Label>Tema</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el tema" />
            </Form.Group>

            <Form.Group controlId="fechaVencimiento">
              <Form.Label>Fecha de Vencimiento</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingresa la descripción" />
            </Form.Group>

            <Form.Group controlId="destinatario">
              <Form.Label>Destinatario</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el destinatario" />
            </Form.Group>

            <Form.Group controlId="docAcuerdo">
              <Form.Label>Doc. Acuerdo</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cerrar
          </Button>
          <Button variant="primary">
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddButton;

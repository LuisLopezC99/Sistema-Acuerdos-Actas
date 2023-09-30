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


      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton style={{height: '45px', padding: '10px', backgroundColor: '#D9D9D9', color: 'black' }}>
          <Modal.Title >Crear Acuerdo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
            <div style={{ marginRight: '5px' }}>
              <Form.Group controlId="sesion">
                <Form.Label>Sesión</Form.Label>
                <Form.Control type="text" placeholder="Ingrese sesión" style={{ backgroundColor: '#EFF8EE', color: 'black' }} />
              </Form.Group>
            </div>
            <div style={{ marginRight: '5px' }}>
              <Form.Group controlId="tema">
                <Form.Label>Tema</Form.Label>
                <Form.Control type="text" placeholder="Ingrese tema" style={{ backgroundColor: '#EFF8EE', color: 'black' }}  />
              </Form.Group>
            </div>
            <div style={{ marginRight: '1px' }}>
            <Form.Group controlId="fechaVencimiento">
              <Form.Label>Fecha de Vencimiento</Form.Label>
              <Form.Control type="date" style={{ backgroundColor: '#EFF8EE', color: 'black' }} />
              </Form.Group>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
            <div style={{ width: '63%', marginRight: '5px'  }}>
            <Form.Group controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" style={{ backgroundColor: '#EFF8EE', color: 'black' }} />
            </Form.Group>
            </div>
            <div style={{ width: '35%' }}>
              <Form.Group controlId="destinatario">
                <Form.Label>Destinatario</Form.Label>
                <Form.Control type="text" placeholder="Destinatario" style={{ backgroundColor: '#EFF8EE', color: 'black' }}/>
              </Form.Group>
            </div>
          </div>
            <Form.Group controlId="docAcuerdo">
              <Form.Label>Doc. Acuerdo</Form.Label>
              <div style={{ position: 'relative', marginTop: '4px', backgroundColor: '#EFF8EE'}}>
                  <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', position: 'relative' }}>
                    <div style={{ border: '1px dashed #ccc', borderRadius: '4px', padding: '10px', position: 'relative' }}>
                      <div style={{ textAlign: 'center', marginTop: '5px' }}>
                        Arrastre y suelte el documento aquí
                      </div>
                        <Form.Control type="file" accept=".pdf" style={{ cursor: 'pointer', display: 'block', backgroundColor: '#C9C6C6', color: 'black', padding: '3px', width: 'fit-content',marginLeft: '39px', marginTop: '9px' }}/>
                      </div>
                  </div>
                  <Form.Control type="file" style={{ display: 'none' }} />
                </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Guardar
          </Button>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddButton;

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
        <div style={{ position: 'absolute', top: '210px', right: '20px' }}>
          <button className="btn btn-amarillo" onClick={handleModalOpen}>
            Crear Nuevo
          </button>
    
    
          <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton style={{height: '45px', padding: '10px', backgroundColor: '#D9D9D9', color: 'black' }}>
              <Modal.Title >Crear Sesión</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
              <div style={{ width: '50%', marginRight: '5px'  }}>
                <Form.Group controlId="fechaCreacion">
                  <Form.Label>Fecha de Creación</Form.Label>
                  <Form.Control type="date" style={{ backgroundColor: '#EFF8EE', color: 'black' }} />
                  </Form.Group>
                </div>
                <div style={{ width: '50%', marginRight: '5px'  }}>
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre" style={{ backgroundColor: '#EFF8EE', color: 'black' }} />
                  </Form.Group>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
                <div style={{ width: '50%', marginRight: '5px'  }}>
                  <Form.Group controlId="tipo">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese tipo" style={{ backgroundColor: '#EFF8EE', color: 'black' }} />
                  </Form.Group>
                </div>
                <div style={{ width: '50%', marginRight: '5px'  }}>
                  <Form.Group controlId="enlace">
                    <Form.Label>Link de Facebook</Form.Label>
                    <Form.Control type="url" placeholder="Ingrese enlace" style={{ backgroundColor: '#EFF8EE', color: 'black' }}  />
                  </Form.Group>
                </div>
              </div>
             
                <Form.Group controlId="docActa">
                  <Form.Label>Doc.Acta</Form.Label>
                    <div style={{ position: 'relative', marginTop: '4px', backgroundColor: '#EFF8EE' }}>
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
  
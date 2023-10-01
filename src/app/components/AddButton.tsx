import { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { POST } from '../api/agreement/route';



const AddButton: React.FC = () => {
  // Creación de los hooks
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    topic: '',
    description: '',
    asignedTo: '',
    deadline: '',
    sessionId: '',
    state: '',
    agreementId: '',
  });

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const { topic, description, asignedTo, state, agreementId } = formValues
    const selectedDate = new Date(formValues.deadline);
    const sessionId = Number(formValues.sessionId)
    const deadline = selectedDate.toISOString();
    const session = { topic, description, asignedTo, deadline, sessionId, state, agreementId }
    try {
      const response = await fetch(`http://localhost:3000/api/agreement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(session)
      })
      const data = await response.json()
      console.log(data)
      setShowModal(false);
    } catch (error) {
      console.error("Error recovering: ", error)
      return ""
    }
  };

  return (
    <Container className="d-flex justify-content-end mt-3">
      <Button style={{ backgroundColor: '#E5D22D', borderColor: '#E5D22D', color: 'black' }} onClick={handleModalOpen}>
        Crear Nuevo
      </Button>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton style={{ height: '45px', padding: '10px', backgroundColor: '#D9D9D9', color: 'black' }}>
          <Modal.Title>Crear Acuerdo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
              <div style={{ marginRight: '5px' }}>
                <Form.Group controlId="sessionId">
                  <Form.Label>Sesión</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese sesión"
                    style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                    name="sessionId"
                    value={formValues.sessionId}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div style={{ marginRight: '5px' }}>
                <Form.Group controlId="topic">
                  <Form.Label>Tema</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese tema"
                    style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                    name="topic"
                    value={formValues.topic}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
              <div style={{ marginRight: '1px' }}>
                <Form.Group controlId="deadline">
                  <Form.Label>Fecha de Vencimiento</Form.Label>
                  <Form.Control
                    type="date"
                    style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                    name="deadline"
                    value={formValues.deadline}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
              <div style={{ width: '63%', marginRight: '5px' }}>
                <Form.Group controlId="description">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingrese la descripción"
                    style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>

              <div style={{ width: '35%' }}>
                <Form.Group controlId="asignedTo">
                  <Form.Label>Destinatario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Destinatario"
                    style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                    name="asignedTo"
                    value={formValues.asignedTo}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group controlId="state">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el estado"
                style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                name="state"
                value={formValues.state}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="agreementId">
              <Form.Label>Id acuerdo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el id de acuerdo"
                style={{ backgroundColor: '#EFF8EE', color: 'black' }}
                name="agreementId"
                value={formValues.agreementId}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="docAcuerdo">
              <Form.Label>Doc. Acuerdo</Form.Label>
              <div style={{ position: 'relative', marginTop: '4px', backgroundColor: '#EFF8EE' }}>
                <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', position: 'relative' }}>
                  <div style={{ border: '1px dashed #ccc', borderRadius: '4px', padding: '10px', position: 'relative' }}>
                    <div style={{ textAlign: 'center', marginTop: '5px' }}>
                      Arrastre y suelte el documento aquí
                    </div>
                    <Form.Control type="file" accept=".pdf" style={{ cursor: 'pointer', display: 'block', backgroundColor: '#C9C6C6', color: 'black', padding: '3px', width: 'fit-content', marginLeft: '39px', marginTop: '9px' }} />
                  </div>
                </div>
                <Form.Control type="file" style={{ display: 'none' }} />
              </div>
            </Form.Group>
            <Modal.Footer>
            </Modal.Footer>
          </Form>
        </Modal.Body>
        <Button onClick={handleSave} variant="primary">
          Guardar
        </Button>
        <Button variant="secondary" onClick={handleModalClose}>
          Cancelar
        </Button>
      </Modal>

    </Container>


  );
};

export default AddButton;

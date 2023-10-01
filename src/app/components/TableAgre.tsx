import React from 'react';

interface Agreement {
  id: number; 
  topic: string;
  description: string;
  asignedTo: string;
  deadline: string;
  sessionId: number;
  state: string;
  agreementId: string; 
}

interface TableAgreementProps {
  agreements: Agreement[];
  title: string; 
}

const TableAgreement: React.FC<TableAgreementProps> = ({ agreements,title }) => {
  return (
    <div style={{ padding: '100px' }}>
      <div className="col text-center">
      <h4 style={{ color: 'gray' }}>Acuerdos {title}</h4>
        <div className="scrollable-table-container">
          <table className="mi-tabla">
            <thead className="bg-light">
              <tr>
                <th className="custom-background">Oficio</th>
                <th>Sesión</th>
                <th>Tema</th>
                <th>Asignado</th>
                <th>Fecha Creación</th>
                <th>Fecha de Vencimiento</th>
                <th>Estado</th>
                <th>Acuerdo</th>
              </tr>
            </thead>
            <tbody>
              {agreements.map((agreement, index) => (
                <tr key={index}>
                  <td>{agreement.agreementId}</td>
                  <td>{agreement.sessionId}</td>
                  <td>{agreement.topic}</td>
                  <td>{agreement.asignedTo}</td>
                  <td>{agreement.deadline.substring(0,10)}</td>
                  <td>{agreement.deadline.substring(0,10)}</td>
                  <td>{agreement.state}</td>
                  <td>
                    <button className="btn btn-amarillo">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableAgreement;

import React from 'react';

const TableAgreement: React.FC = () => {
  return (
    <div style={{ padding: '100px' }}>
      <div className="col text-center"> {/* Agregamos la clase 'text-center' para centrar el contenido */}
        <h4 style={{color : 'gray'}} >Acuerdos en Trámite</h4>
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
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>800</td>
                <td>515</td>
                <td>285</td>
                <td>800</td>
                <td>515</td>
                <td>285</td>
                <td>Vencido</td>
                <td>
                  <button className="btn btn-amarillo">Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableAgreement;

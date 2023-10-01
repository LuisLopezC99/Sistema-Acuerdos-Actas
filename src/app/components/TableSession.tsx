import React from 'react';

interface Session {
  id: number;
  date: string;
  type: string;
  facebookUrl: string;
  report: string; 
}

interface TableSessionProps {
  sessions: Session[];
  title: string;
}

const TableSession: React.FC<TableSessionProps> = ({ sessions, title }) => {
  return (
    <div style={{ padding: '100px' }}>
      <div className="col text-center">
        <h4 style={{ color: 'gray' }}>{title}</h4>
        <div className="scrollable-table-container">
          <table className="mi-tabla">
            <thead className="bg-light">
              <tr>
                <th className="custom-background">Sesion#</th>
                <th>Dia de realización</th>
                <th>Tipo</th>
                <th>Facebook Link</th>
                <th>Acta</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr key={index}>
                  <td>{session.id}</td>
                  <td>{session.date}</td>
                  <td>{session.type}</td>
                  <td>
                    <a href={session.facebookUrl} target="_blank" rel="noopener noreferrer">
                      Enlace
                    </a>
                  </td>
                  <td>
                    <a href={session.report} target="_blank" rel="noopener noreferrer">
                      Acta
                    </a>
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

export default TableSession;

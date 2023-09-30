import React, { useEffect, useState } from 'react';
import TableAgreement from './TableAgre'; // Importa el componente TableAgreement

interface GetTableAgreeProps {
  filter: string; // Propiedad filter como string
  title: string; // Nueva propiedad title como string
}

function GetTableAgree({ filter, title }: GetTableAgreeProps) {
  const [agreements, setAgreements] = useState([]); // Cambia el nombre de la variable a 'agreements'

  useEffect(() => {
    // Realiza la solicitud GET con el filtro y almacena los datos en el estado 'agreements'
    fetch(`/api/agreement/${filter}`)
      .then((response) => response.json())
      .then((data) => {
        setAgreements(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, [filter]); // Escucha cambios en 'filter'

  return (
    <div>
      {/* Renderiza TableAgreement y pasa los datos como prop 'agreements' y el título como 'title' */}
      <TableAgreement agreements={agreements} title={title} />
    </div>
  );
}

export default GetTableAgree;

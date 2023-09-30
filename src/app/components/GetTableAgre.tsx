import React, { useEffect, useState } from 'react';
import TableAgreement from './TableAgre'; // Importa el componente TableAgreement

interface GetTableAgreeProps {
  filter: string; // Declara la propiedad filter como string
}

function GetTableAgree({ filter }: GetTableAgreeProps) {
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
      {/* Renderiza TableAgreement y pasa los datos como prop 'agreements' */}
      <TableAgreement agreements={agreements} />
    </div>
  );
}

export default GetTableAgree;

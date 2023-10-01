import React, { useEffect, useState } from 'react';
import TableAgreement from './TableAgre';

interface GetTableAgreeProps {
  filter: string; 
  title: string; 
}
function GetTableAgree({ filter, title }: GetTableAgreeProps) {
  const [agreements, setAgreements] = useState([]); 

  useEffect(() => {
   
    fetch(`/api/agreement/${filter}`)
      .then((response) => response.json())
      .then((data) => {
        setAgreements(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, [filter]); 

  return (
    <div>
      <TableAgreement agreements={agreements} title={title} />
    </div>
  );
}

export default GetTableAgree;

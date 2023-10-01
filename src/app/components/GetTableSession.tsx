import React, { useEffect, useState } from 'react';
import TableSession from './TableSession'; 

interface Session {
  id: number;
  date: string;
  type: string;
  facebookUrl: string;
  report: string;
}

interface GetTableSessionProps {
  title: string;
}

function GetTableSession({ title }: GetTableSessionProps) {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('/api/session');
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        setSessions(data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <TableSession sessions={sessions} title={title} />
    </div>
  );
}

export default GetTableSession;

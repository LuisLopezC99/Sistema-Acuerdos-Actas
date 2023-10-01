"use client";
// Home.tsx
import React, { useState } from 'react';
import Header from '../app/components/Header';
import GetTableAgree from './components/GetTableAgre';
import AddButton from './components/AddButton';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';
import GetTableSession from './components/GetTableSession';
import AddButton2 from './components/AddButton2';

export default function Home() {
  const [filter, setFilter] = useState('Mis Acuerdos');

  const updateFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  const getTitle = (filter: string) =>
    filter === 'por vencer' ? `en tramite ${filter}` :
    filter === 'nuevo' ? `en tramite ${filter}s` :
    filter === 'Redirigido' || filter === 'Vencido' || filter === 'Cumplido' ? `${filter}s` : filter;

  const renderTable = () =>
    filter === 'Sesiones' ? (<GetTableSession title={filter} />) :
    (<GetTableAgree filter={filter} title={getTitle(filter)} />);

  const renderAddButton = () =>
    filter === 'Sesiones' ? <AddButton2 updateFilter={updateFilter} /> : <AddButton />;

  return (
    <div>
      <Header updateFilter={updateFilter} />
      {renderAddButton()}
      <SearchButton />
      {renderTable()}
      <div>
        <Footer />
      </div>
    </div>
  );
}



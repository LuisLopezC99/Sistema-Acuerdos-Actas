"use client";
import React, { useState } from 'react';
import Header from '../app/components/Header';
import GetTableAgree from './components/GetTableAgre';
import AddButton from './components/AddButton';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';

export default function Home() {
  const [filter, setFilter] = useState('Por vencer');

  const updateFilter = (newFilter:string) => {
    setFilter(newFilter);
  };

  const title = (filter: string) => {
    return filter === 'Nuevo'
      ? `En trámite ${filter}s`
      : filter === 'Por vencer'
      ? `En trámite ${filter}`
      : `${filter}s`;
  };
  
  

  return (
    <div>
      <Header updateFilter={updateFilter} />
      <AddButton />
      <SearchButton />
      <GetTableAgree filter={filter} title={title(filter)} />
      <div>
        <Footer />
      </div>
    </div>
  );
}

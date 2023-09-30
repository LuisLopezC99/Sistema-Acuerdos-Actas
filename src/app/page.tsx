"use client";
import React, { useState } from 'react';
import Header from '../app/components/Header';
import GetTableAgree from './components/GetTableAgre';
import AddButton from './components/AddButton';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';

export default function Home() {
  const [filter, setFilter] = useState('Por vencer');

  const updateFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <Header updateFilter={updateFilter} />
      <AddButton />
      <SearchButton />
      <GetTableAgree filter={filter} />
      <div>
        <Footer />
      </div>
    </div>
  );
}




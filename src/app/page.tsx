

'use client';
import Image from 'next/image'

import styles from './page.module.css'
import Header from '../app/components/Header'
import TableAgreement from './components/TableAgre';
import AddButton from './components/AddButton';

export default function Home() {
  return (
    <div>
      <Header/>
      <AddButton/>
      <TableAgreement/>  
  </div>      
  )
}

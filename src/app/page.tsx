"use client";
import styles from './page.module.css'
import Header from '../app/components/Header'
import TableAgreement from './components/TableAgre';
import AddButton from './components/AddButton';
import SearchButton from './components/SearchButton';
import Footer from './components/Footer';

export default function Home() {
  return (
    
    <div>
      <Header/>
      <AddButton/>
      <SearchButton/>
      <div>
      <TableAgreement/> 
      </div>
         

      <div><Footer/></div>

    </div>
  )
}

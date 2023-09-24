import Image from 'next/image'
import styles from './page.module.css'
import Header from '../app/components/Header'

export default function Home() {
  return (
    
    <body className={styles.main}>
      <Header/>
      <div>
        <p>Hola Mundo</p>  
      </div>      

      

    </body>
  )
}

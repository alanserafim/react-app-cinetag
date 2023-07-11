import React from 'react'
import styles from './Favoritos.module.css'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import Card from 'components/Card'

export default function Favoritos() {
  return (
   <>
   <Banner imagem="favoritos"/>
    <Titulo>
        <h1>Meus favoritos</h1>
    </Titulo>
    <section className={styles.container}>
    <Card id="1" titulo="gatoxo" capa="https://thecatapi.com/api/images/get?format-src&type=png"/>
    </section>

   </>
  )
}

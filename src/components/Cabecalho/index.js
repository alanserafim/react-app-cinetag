import React from 'react'
import styles from 'components/Cabecalho/cabacalho.module.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import CabecalhoLink from 'components/CabecalhoLink'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to="./">
            <img
            src={logo}
            alt='logo do cientag'
            ></img>
        </Link>
        <nav>
            <CabecalhoLink url="./">Home</CabecalhoLink>
            <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
        </nav>

    </header>
  )
}

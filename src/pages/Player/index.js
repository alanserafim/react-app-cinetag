import Banner from 'components/Banner'
import styles from './Player.module.css'

import Titulo from 'components/Titulo'
import NaoEncontrada from 'pages/NaoEncontrada'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Player() {
    const [video, setVideo] = useState([]);

    const parametros = useParams();
    //retorna o objeto video que tenha id igual ao id informado no parametro
   // const video = videos.find((video) => video.id === Number(parametros.id));

   useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/alanserafim/react-app-cinetag-fakeapi/videos?=${parametros.id}`)
    .then( resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
        })
     },[])


    if(!video){
        return <NaoEncontrada/>
    }

    return (
        <>
        <Banner imagem="player"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
            <iframe 
                width="100%" 
                height="100%" 
                src={video.link} 
                title={video.title} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
            >
            </iframe>
        </section>
        </>
  )
}

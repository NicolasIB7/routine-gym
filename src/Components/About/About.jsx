import React from 'react';
import style from "./About.module.css"

function About() {
  return (
    <div className={style.container}>

        <img src="https://w0.peakpx.com/wallpaper/224/511/HD-wallpaper-who-cares-text-iphone-iphone-iphone-gym-motivation-gym-motivation-quotes-zyzz.jpg" alt="" className={style.imagen}/>

      <h1 className={style.descripcion}>
      Bienvenido al sitio web de ejercicios de gimnasio, donde puedes encontrar una gran variedad de ejercicios para llevar a cabo en tu rutina diaria de entrenamiento. En esta página, puedes buscar ejercicios y agregarlos a tu lista de favoritos para luego acceder a ellos y armarte tu propia rutina.

El sitio web fue creado como un proyecto de práctica utilizando tecnologías modernas como React y Redux. El objetivo es brindarte una experiencia de usuario intuitiva y eficiente, para que puedas enfocarte en tu entrenamiento y alcanzar tus objetivos de fitness.<br/><br/>

¡Gracias por visitar! Espero que disfrutes del sitio y encuentres los ejercicios que necesitas para llevar tu entrenamiento al siguiente nivel.
      </h1>
      

    </div>
  )
}

export default About
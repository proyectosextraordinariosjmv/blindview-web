import './App.css';
import React from 'react';
import Feature from "./components/feature.jsx";
import Mode from "./components/mode.jsx";
import Memoria from "./components/memoria.jsx"

function App() {
  return (
    <React.Fragment>
      <h1 class="name">BlindView</h1>
      <h2 class="subtitle">Una interfaz de audio para personas invidentes</h2>

      <div id="videodiv">
        <div id="text">
          <h2 class="whatisit">¿Qué es BlindView?</h2>
          <p class="blindview">BlindView es una aplicación Android específicamente diseñada para asistir y mejorar la independencia de las personas invidentes.<br/><br/> La aplicación utiliza la cámara y el sensor GPS del dispositivo telefónico con el fin de orientar al usuario en su entorno físico de forma precisa y en tiempo real, mediante inteligencia artificial. Esta puede ser controlada a través de una sencilla e intuitiva de usuario compuesta por varios modos y comandos de voz.</p>
        </div>
        <video src="ad.mp4" id="video" controls></video>
      </div>

      <h2 class="benefits">Ventajas</h2>
      <div id="wrapper">
        <Feature name="Accesibilidad" description="Nuestra sencilla interfaz integrada nos permite compartir los grandes avances y beneficios de la inteligencia artificial con las personas más dependientes." icon="./icons/accesibilidad.png"/>
        <Feature name="Bajo coste" description="A diferencia de muchas otras soluciones, esta aplicación es de uso prácticamente gratuito y de código abierto. Además, es posible administrar las claves utilizadas fácilmente." icon="./icons/dollar.png"/>
        <Feature name="Integración" description="Nuestra interfaz puede hacer uso de ciertas funciones como la ubicación, el giroscopio o la cámara del dispositivo, con el objetivo de orientar al usuario en el espacio que lo rodea." icon="./icons/gps.png"/>
        <Feature name="La aplicación" description="La aplicación proporciona una gran variedad de modos con diferentes funcionalidades y nos permite acceder a un sin fin de opciones mediante palabras clave seleccionables vía voz." icon="./icons/settings.png"/>
      </div>

      <h2 class="modes">Modos</h2>
      <div id="wrapper-modes">
        <Mode name="Orientación" keyword="orientación" description="Cuando este modo está activado, el dispositivo realiza capturas periódicamente y describe el ambiente percibido por la cámara, advirtiendo al usuario de cualquier peligro en el camino. Si se desea detener un mensaje específico de audio, en este o en cualquier otro modo, es posible hacerlo pulsando rápidamente la pantalla."/>
        <Mode name="Indicaciones" keyword="indicaciones" description="Una vez se activa este modo, la interfaz preguntará al usuario a dónde desea ir. Para el correcto funcionamiento de este modo, es necesario activar la ubicación del dispositivo. La aplicación refrescará las indicaciones desde su ubicación actual cuando el usuario diga 'actualizar ruta'."/>
        <Mode name="Semáforos" keyword="semáforos" description="Esta opción nos informa de nuestro entorno e identifica todos los semáforos presentes en el ambiente percibido, informando al usuario del estado de los mismos y de cualquier obstáculo relevante."/>
        <Mode name="Pregunta" example="pregunta ¿Cuánto es 10x3?" keyword="pregunta" description="En el caso de que el usuario quiera acceder a la inteligencia artificial, podrá realizar preguntas a través de esta opción, obteniendo un tiempo de respuesta mucho mejor que si enviase la imagen."/>
        <Mode name="Modo libre" example="¿De qué color es el suelo?" keyword="Por defecto" description="Si ninguna funcionalidad se adecúa a las necesidades del usuario, será posible utilizar el modo libre para mandar la imagen vista por la cámara a la inteligencia artificial, acompañada por las indicaciones del usuario, permitiendo una interacción completa con la inteligencia artificial."/>
        <Mode name="Menú" keyword="menú" description="Lee las opciones disponibles."/>
      </div>

      <div class="code">
        <p class="text">Código fuente</p>
        <p class="text2">👁️‍🗨️ Aplicación BlindView</p>
        <a class="link" href="https://google.es">https://github.com/proyectosextraordinariosjmv/BlindView</a>
        <p class="text2">💻 Página Web BlindView</p>
        <a class="link" href="https://google.es">https://github.com/proyectosextraordinariosjmv/blindview-web</a>
      </div>

      <Memoria/>
    </React.Fragment>
  );
}

export default App;

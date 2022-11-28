import foto1 from "../src/img/foto1.jpg"
import foto2 from "../src/img/foto2.jpg"
import foto3 from "../src/img/foto3.jpg"

import './App.css';

function App() {
  
  const toggleButton = document.getElementById('button-menu')
  const navWrapper = document.getElementById('nav')

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
  })

  navWrapper.addEventListener('click', e => {
    if (e.target.id === 'nav') {
      navWrapper.classList.remove('show')
      toggleButton.classList.remove('close')
    }
  })

  return (
    <div className="App">


      <header class="main-header" >
        <a class="main-logo" href="https://progradudi.netlify.app" >
          <strong>Progra_dudi</strong>
        </a>
        <nav id="nav" class="main-nav" >
          <div class="nav-links" >
            <a class="link-item" href="#" >Link1</a>
            <a class="link-item" href="#" >Link2</a>
            <a class="link-item" href="#" >Link3</a>
            <a class="link-item" href="#" >Link4</a>
          </div>
        </nav>
        <button id="button-menu" class="button-menu" >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div id="carouselExampleIndicators" class="carousel slide" >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={foto1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={foto2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={foto3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container-inicio">
        <div className='container-inicio-parrafos'>
          <div className='container-inicio-parrafo'>
            <p>¿Buscas el mejor servicio de pintura  de la capital? ¡Nos has encontrado! Contamos con los profesionales que necesitas para el servicio de pintado en Lima. ¡Los interiores y exteriores de tu casa, oficina, local comercial, etc. serán la envidia de tus vecinos y de tu competencia!</p>
          </div>
          <div className='container-inicio-parrafo'>
            <p>¡Te ofrecemos el servicio de pintado de casas, servicio de pintura de edificios, asesoría para elegir los mejores productos de pintado; y mucho más! Todo de la mano de los mejores maestros pintores en los diferentes distritos de Lima metropolitana.</p>
          </div>
          <div className='container-inicio-parrafo'>
            <p>¿Por qué esperar?</p>
          </div>
          <div className='container-inicio-parrafo'>
            <p>¡Contáctanos y te ofrecemos el servicio de pintado en Lima, de inmediato!</p>
          </div>
        </div>
      </div>


      <div className='container-nuestros-servicios'>
        <div className='container-nuestros-servicios-casas'>
          <div className='container-nuestros-servicios-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          </div>
          <h2 className='bg-white-text-h2'>Servicio de pintado de casas</h2>
          <div className='container-nuestros-servicios-texto'>
            <p>¿Quieres renovar la pintura de tu casa? Ya sea que quieras cambiar el color de la fachada o de las paredes interiores, ¡podemos ayudarte! No solo podemos cambiar el color o empezar a pintar tu pared desde cero, también podemos resanar tus paredes maltratadas, empastar tus paredes, curarlas de hongos o salitre y mucho más. ¡Confía en nuestros profesionales en el pintado de casas! El mejor pintor en Lima está en Rescate 24, esperando por conocer tu proyecto.</p>
          </div>
        </div>
        <div className='container-nuestros-servicios-paredes'>
          <div className='container-nuestros-servicios-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>
          </div>
          <h2 className='bg-white-text-h2'>Servicio de pintado de paredes</h2>
          <div className='container-nuestros-servicios-texto'>
            <p>¡Deja en nuestras manos el pintado de tus paredes! Podemos visitar tu proyecto para realizar una cotización a medida. Nuestros maestros especializados tienen experiencia comprobada, ¡hemos realizado más de 100 proyectos exitosos y contamos con más de 9 años de experiencia! ¡Ten el mejor resultado final con Rescate 24!</p>
          </div>
        </div>
        <div className='container-nuestros-servicios-edificios'>
          <div className='container-nuestros-servicios-icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
              <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </div>
          <h2 className='bg-white-text-h2'>Servicio de pintura de edificios</h2>
          <div className='container-nuestros-servicios-texto'>
            <p>¿Necesitas una empresa de pintura de edificios? ¿Quizá pintar tus oficinas? ¿Pintar la fachada del colegio antes del inicio de clases? Sea cual sea el edificio que necesitas pintar, ¡podemos ayudarte! Ya sea que necesites darle mantenimiento a la pintura, curar paredes, o pintar una propiedad nueva, nuestra experiencia y talentoso equipo te ofrecerá los mejores acabados.</p>
          </div>
        </div>
      </div>

      <div className='container-footer'>
        <div className='container-footer-1'>
          <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
              <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
            </svg>
          </div>
          <p>© 2020 Corporacion Rescate24 Todos los derechos reservados.</p>
        </div>
        <div className='container-footer-2'>
          <h2>Servicios de asistencia</h2>
          Gasfitero en Lima
          Electricista a Domicilio
          Albañilería
          Servicio Pintado
          Vidriero a Domicilio
          Carpintería
        </div>

        <div className='container-footer-3'>
          <h2>Contacto</h2>
          Jr. Huancavelica Nro. 3225 lima 31
          ovenancio@rescate24peru.com
          +51 956 104 494
        </div>
      </div>
    </div >
  );
}

export default App;

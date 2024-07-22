import { Component } from '@angular/core';

@Component({
  selector:'cardServices',
  standalone: true,
  imports: [],
  template:`
     <section class="min-h-screen  text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
        <span class="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">Lo que estamos ofreciendo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-600 ml-3 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </span>
        <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
            Servicios creados específicamente para su negocio
        </h1>
        <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div class="card bg-gray-800 p-10 relative">
            <div class="circle">
            </div>
            <div class="relative lg:pr-52">
              <h2 class="capitalize text-white mb-4 text-lg xl:text-3xl">uI/uX <br /> creative design</h2>
              <p class="text-gray-400 text-xs">
                Elevamos la experiencia de tus usuarios con diseños únicos y funcionales que combinan creatividad y 
                estrategia para asegurar un impacto duradero y efectivo en tu audiencia.
              </p>
            </div>
            <div class="icon"></div>
          </div>
          <div class="card bg-gray-800 p-10 relative">
            <div class="circle">
            </div>
            <div class="relative lg:pl-48">
              <h2 class="capitalize text-white mb-4 text-lg xl:text-3xl">Desarrollo <br /> de software y entornos cloud</h2>
              <p class="text-gray-400 text-xs">
                Impulsa tu crecimiento empresarial con nuestros servicios de desarrollo de software y soluciones en la nube, que ofrecen flexibilidad,
                 seguridad y un rendimiento excepcional para satisfacer todas tus necesidades tecnológicas.
                </p>
            </div>
          </div>
          <div class="card bg-gray-800 p-10 relative">
            <div class="circle">
            </div>
            <div class="relative lg:pr-44">
              <h2 class="capitalize text-white mb-4 text-lg xl:text-3xl">strategy & <br />digital marketing</h2>
              <p class="text-gray-400 text-xs">Potencia tu negocio con estrategias digitales personalizadas que maximizan tu visibilidad online y 
                convierten audiencias en clientes leales, utilizando tácticas probadas y efectivas.
            </p>
            </div>
          </div>
          <div class="card bg-gray-800 p-10 relative">
            <div class="circle">
            </div>
            <div class="relative lg:pl-48">
              <h2 class="capitalize text-white mb-4 text-lg xl:text-3xl">Asesorias<br /> personalizadas</h2>
              <p class="text-gray-400 text-xs">Recibe asesorías personalizadas que se adaptan a las necesidades específicas de tu negocio, proporcionando soluciones expertas y 
                estrategias efectivas para alcanzar tus objetivos tecnológicos y empresariales.</p>
            </div>
          </div>
        </div>
    </section>


  `,
  styles:`
.card {
  position: relative;
}
.card::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  transition: 0.6s;
  z-index: 0;
}
.card:hover {
  box-shadow: 0.063rem 0.063rem 1.25rem 0.375rem rgba(0, 0, 0, 0.53);
}
.card:nth-child(1)::before {
  bottom: 0;
  right: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
  background: rgb(2,0,36);
  background: linear-gradient(326deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 98%);
}
.card:nth-child(2)::before {
  bottom: 0;
  left: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
  background: rgb(2,0,36);
background: linear-gradient(122deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 98%);
 
}
.card:nth-child(3)::before {
  top: 0;
  right: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
  background: rgb(2,0,36);
  background: linear-gradient(241deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 98%);
}
.card:nth-child(4)::before {
  top: 0;
  left: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
  background: rgb(2,0,36);
background: linear-gradient(125deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 98%);
}
.card p {
  transition: 0.8s;
}

.card:hover::before {
  clip-path: circle(110vw at 100% 100%);
}

.card:hover p {
  color: #fff;
}

@media screen and (min-width: 62.5rem) {
  .circle {
    position: absolute;
    width: 50%;
    height: 80%;
    z-index: 0;
  }
}
.card:nth-child(1) .circle {
  background: url("/assets/img/seguridad.jpg") no-repeat 50% 50%/cover;
  bottom: 0;
  right: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 100% 100%);
}

.card:nth-child(2) .circle {
  background: url("/assets/img/cloud.jpg") no-repeat 50% 50%/cover;
  bottom: 0;
  left: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 0% 100%);
}

.card:nth-child(3) .circle {
  background: url("/assets/img/marketing.jpg") no-repeat 50% 50%/cover;
  top: 0;
  right: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 100% 0%);
}

.card:nth-child(4) .circle {
  background: url("/assets/img/desarrollo.jpg") no-repeat 50% 50%/cover;
  top: 0;
  left: 0;
  clip-path: circle(calc(6.25rem + 7.5vw) at 0% 0%);
}
  `
})
export class CardServicesComponent {

}

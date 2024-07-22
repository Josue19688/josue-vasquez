import { Component } from '@angular/core';

@Component({
    selector: 'card-servicio',
    standalone: true,
    imports: [],
    template: `
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-3xl font-bold text-center mb-8">Porque trabajar con nosotros?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-transparent p-6 rounded-lg shadow-md ">
            <section class="antialiased">
                <div class="max-w-2xl px-4 py-4 mx-auto lg:px-6 ">
                    <div class="w-full max-w-xl mx-auto space-y-4 text-center"><span
                            class="inline-flex items-center px-3 py-1 text-sm font-medium text-white rounded-full bg-sky-950 text-primary-300"><svg
                                aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="#fff">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clip-rule="evenodd"></path>
                            </svg><span class="mr-1 opacity-75">Desarrollo de Software</span> </span>
                    </div>
                    <div class="grid mt-12 lg:mt-16 gap-y-12 gap-x-16">
                        <div class="space-y-8">
                            <div class="flex flex-col gap-4  sm:flex-row sm:items-stretch rounded p-5 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-tabler"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l3 3l-3 3" /><path d="M13 15l3 0" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /></svg>
      
                                <div class="hidden w-px bg-gray-700 sm:shrink-0 sm:block"></div>
                                <div class="flex-1 pb-4">
                                    <h4 class="mb-2 -mt-2 text-xl font-bold text-yellow-200">Soluciones Personalizadas y Escalables</h4>
                                    <p class="text-base font-normal text-sky-200 [text-wrap:balance] mb-6">
                                        Crearemos un sitio web a medida que se ajuste perfectamente a 
                                        las necesidades de tu negocio, con la flexibilidad de escalar y adaptarse a futuros cambios y crecimiento
                                    </p>
                                   
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
          </div>
          <div class="bg-transparent p-6 rounded-lg shadow-md">
            <section class="antialiased">
                <div class="max-w-2xl px-4 py-4 mx-auto lg:px-6">
                    <div class="w-full max-w-xl mx-auto space-y-4 text-center"><span
                            class="inline-flex items-center px-3 py-1 text-sm font-medium text-white rounded-full bg-sky-950 text-primary-300"><svg
                                aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="#fff">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clip-rule="evenodd"></path>
                            </svg><span class="mr-1 opacity-75">Ciberseguridad</span> </span>
                    </div>
                    <div class="grid mt-12 lg:mt-16 gap-y-12 gap-x-16">
                        <div class="space-y-8">
                            <div class="flex flex-col gap-4 sm:flex-row sm:items-stretch rounded p-5 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shield-lock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" /><path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 12l0 2.5" /></svg>
                                <div class="hidden w-px bg-gray-700 sm:shrink-0 sm:block"></div>
                                <div class="flex-1 pb-4">
                                    <h4 class="mb-2 -mt-2 text-xl font-bold text-yellow-200">Protección Integral Contra Amenazas</h4>
                                    <p class="text-base font-normal text-sky-200 [text-wrap:balance] mb-6">
                                        Implementamos soluciones de seguridad avanzadas para proteger tu sitio web contra ataques 
                                        cibernéticos, malware y vulnerabilidades, asegurando que tus datos y los de tus clientes estén siempre a salvo.
                                    </p>
                                   
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
          </div>
          <div class="bg-transparent p-6 rounded-lg shadow-md">
            <section class="antialiased">
                <div class="max-w-2xl px-4 py-4 mx-auto lg:px-6">
                    <div class="w-full max-w-xl mx-auto space-y-4 text-center"><span
                            class="inline-flex items-center px-3 py-1 text-sm font-medium text-white rounded-full bg-sky-950 text-primary-300"><svg
                                aria-hidden="true" class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="#fff">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clip-rule="evenodd"></path>
                            </svg><span class="mr-1 opacity-75">Consultorias</span> </span>
                    </div>
                    <div class="grid mt-12 lg:mt-16 gap-y-12 gap-x-16">
                        <div class="space-y-8">
                            <div class="flex flex-col gap-4 sm:flex-row sm:items-stretch rounded p-5 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)]">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-shield"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 21v-2a4 4 0 0 1 4 -4h2" /><path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /></svg>
                                <div class="hidden w-px bg-gray-700 sm:shrink-0 sm:block"></div>
                                <div class="flex-1 pb-4">
                                    <h4 class="mb-2 -mt-2 text-xl font-bold text-yellow-200">Implementación Efectiva de Soluciones Tecnológicas</h4>
                                    <p class="text-base font-normal text-sky-200 [text-wrap:balance] mb-6">
                                        Desde la planificación hasta la ejecución, te guiamos en la implementación de nuevas tecnologías, asegurando una transición suave y sin problemas para mejorar tus operaciones y mantenerte a la vanguardia de la innovación.
                                    </p>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
          </div>

         
         
        </div>
        
      </div>
      
  `,


})
export class CardServicioComponent {

}

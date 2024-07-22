import { Component } from '@angular/core';

@Component({
  selector:'carousel-left',
  standalone: true,
  imports: [],
  template:`
  <div class="relative w-full max-w-4xl overflow-hidden mx-auto">
        <div class="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none"></div>
        <div class="carousel-track">
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-20 h-20">
          </div>
         


          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt=".NET" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" class="w-20 h-20">
          </div>
          <div class="carousel-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-20 h-20">
          </div>
        </div>
      </div>
  `,
  styles:`
  @keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.carousel-track {
  display: flex;
  animation: scroll 20s linear infinite;
}
.carousel-item {
  flex: 0 0 auto;
  width: 100px;
  margin: 0 10px;
}
  
  `
  
})
export class CarouselLeftComponent {

}

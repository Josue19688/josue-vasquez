import { Component } from '@angular/core';

@Component({
  selector:'star',
  standalone: true,
  imports: [],
  template:`
   <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>

    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <!-- Agrega más estrellas según desees -->
  </div>
  `,
  styles:`
  /* Tamaño y color de las estrellas */
.star {
    position: absolute;
    width: 5px;
    height: 2px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: fall linear infinite;
    
  }
  
  /* Animación de las estrellas cayendo en diagonal */
  @keyframes fall {
    0% {
      transform: translateY(-100vh) translateX(-100vw);
    }
    100% {
      transform: translateY(100vh) translateX(100vw);
    }
  }
  
  /* Configura las estrellas con diferentes posiciones y duraciones */
  .star:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-duration: 12s;
  }
  
  .star:nth-child(2) {
    top: 30%;
    left: 50%;
    animation-duration: 10s;
  }
  
  .star:nth-child(3) {
    top: 60%;
    left: 30%;
    animation-duration: 14s;
  }
  
  .star:nth-child(4) {
    top: 80%;
    left: 70%;
    animation-duration: 16s;
  }
  
  .star:nth-child(5) {
    top: 40%;
    left: 90%;
    animation-duration: 8s;
  }
  

  .star:nth-child(6) {
    top: 10%;
    left: 20%;
    animation-duration: 8s;
  }
  
  .star:nth-child(7) {
    top: 30%;
    left: 50%;
    animation-duration: 7s;
  }
  
  .star:nth-child(8) {
    top: 60%;
    left: 30%;
    animation-duration: 9s;
  }
  
  .star:nth-child(9) {
    top: 80%;
    left: 70%;
    animation-duration: 8s;
  }
  
  .star:nth-child(10) {
    top: 40%;
    left: 90%;
    animation-duration: 6s;
  }


  .star:nth-child(11) {
    top: 10%;
    left: 20%;
    animation-duration: 14s;
  }
  
  .star:nth-child(12) {
    top: 30%;
    left: 50%;
    animation-duration: 12s;
  }
  
  .star:nth-child(13) {
    top: 60%;
    left: 30%;
    animation-duration: 16s;
  }
  
  .star:nth-child(14) {
    top: 80%;
    left: 70%;
    animation-duration: 18s;
  }
  
  .star:nth-child(15) {
    top: 40%;
    left: 90%;
    animation-duration: 10s;
  }
  

   /* Configura las estrellas con diferentes posiciones y duraciones */
   .star:nth-child(16) {
    top: 5%;
    left: 30%;
    animation-duration: 12s;
  }
  
  .star:nth-child(17) {
    top: 10%;
    left: 40%;
    animation-duration: 10s;
  }
  
  .star:nth-child(18) {
    top: 15%;
    left: 40%;
    animation-duration: 14s;
  }
  
  .star:nth-child(19) {
    top: 20%;
    left: 90%;
    animation-duration: 16s;
  }
  
  .star:nth-child(20) {
    top: 60%;
    left: 30%;
    animation-duration: 8s;
  }
  

  .star:nth-child(21) {
    top: 10%;
    left: 40%;
    animation-duration: 8s;
  }
  
  .star:nth-child(22) {
    top: 30%;
    left: 50%;
    animation-duration: 7s;
  }
  
  .star:nth-child(23) {
    top: 10%;
    left: 30%;
    animation-duration: 9s;
  }
  
  .star:nth-child(24) {
    top: 5%;
    left: 70%;
    animation-duration: 8s;
  }
  
  .star:nth-child(25) {
    top: 1%;
    left: 90%;
    animation-duration: 6s;
  }


  .star:nth-child(26) {
    top: 10%;
    left: 60%;
    animation-duration: 14s;
  }
  
  .star:nth-child(27) {
    top: 90%;
    left: 50%;
    animation-duration: 12s;
  }
  
  .star:nth-child(28) {
    top: 100%;
    left: 30%;
    animation-duration: 16s;
  }
  
  .star:nth-child(29) {
    top: 80%;
    left: 10%;
    animation-duration: 18s;
  }
  
  .star:nth-child(30) {
    top: 90%;
    left: 90%;
    animation-duration: 10s;
  }
  

  

   /* Configura las estrellas con diferentes posiciones y duraciones */
   .star:nth-child(31) {
    top: 5%;
    left: 30%;
    animation-duration: 18s;
  }
  
  .star:nth-child(32) {
    top: 10%;
    left: 40%;
    animation-duration: 16s;
  }
  
  .star:nth-child(33) {
    top: 15%;
    left: 40%;
    animation-duration: 20s;
  }
  
  .star:nth-child(34) {
    top: 20%;
    left: 90%;
    animation-duration: 22s;
  }
  
  .star:nth-child(35) {
    top: 60%;
    left: 30%;
    animation-duration: 14s;
  }
  

  .star:nth-child(36) {
    top: 10%;
    left: 40%;
    animation-duration: 14s;
  }
  
  .star:nth-child(37) {
    top: 30%;
    left: 50%;
    animation-duration: 13s;
  }
  
  .star:nth-child(38) {
    top: 10%;
    left: 30%;
    animation-duration: 15s;
  }
  
  .star:nth-child(39) {
    top: 5%;
    left: 70%;
    animation-duration: 14s;
  }
  
  .star:nth-child(40) {
    top: 1%;
    left: 90%;
    animation-duration: 12s;
  }


  .star:nth-child(41) {
    top: 10%;
    left: 60%;
    animation-duration: 20s;
  }
  
  .star:nth-child(42) {
    top: 90%;
    left: 50%;
    animation-duration: 18s;
  }
  
  .star:nth-child(43) {
    top: 100%;
    left: 30%;
    animation-duration: 22s;
  }
  
  .star:nth-child(44) {
    top: 80%;
    left: 10%;
    animation-duration: 24s;
  }
  
  .star:nth-child(45) {
    top: 90%;
    left: 90%;
    animation-duration: 16s;
  }
  

  /* Agrega más estrellas con diferentes posiciones y duraciones */
  

  
  `
})
export class StarComponent {

}

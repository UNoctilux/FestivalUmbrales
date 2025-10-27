const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

// Fecha del evento
let countDown = new Date("Nov 15, 2025 16:00:00").getTime();

let x = setInterval(function() {
  let now = new Date().getTime(),
      distance = countDown - now;

  if (distance <= 0) {
    clearInterval(x);
    
    // Reemplazamos todo el contador con un mensaje
    document.querySelector(".contenedor").innerHTML = `
      <h2 style="color:#0011aa; font-size:3rem; text-align:center; margin-top:2rem;">
        ¡Bienvenidos a la muestra!
      </h2>
    `;
    return;
  }

  document.getElementById('dias').innerText = Math.floor(distance / day);
  document.getElementById('horas').innerText = Math.floor((distance % day) / hour);
  document.getElementById('minutos').innerText = Math.floor((distance % hour) / minute);
  document.getElementById('segundos').innerText = Math.floor((distance % minute) / second);

}, second);


"use strict";
window.addEventListener("load", () => {
document.querySelector('.preloader').style.display = 'none';
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 700,
    // Размер шага в пикселях
    stepSize: 100,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 20,
    // Максимальное ускорение
    accelerationMax: 1,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
  });


 
    let form = document.getElementById("form"),
        serverResponse = document.querySelector('.feedback__ok');

      form.addEventListener("submit", async function (event) {
          event.preventDefault();

          let response = await fetch('/mailer/mail.php', {
              method: 'POST',
              body: new FormData(form)
            });

          if (response.ok) {
              console.log("send");
              form.classList.add('hidden')
              serverResponse.style.display = "block"
          } else {
              console.log("error: " + response.status);
              form.classList.add('hidden')
              serverResponse.style.display = "block"
              // serverResponse.innerHTML = "Message could not be sent"
          }

          form.reset();

          serverResponse.addEventListener('click', function () {
            form.classList.remove('hidden')
            serverResponse.style.display = "none"
          })

      
    })




});

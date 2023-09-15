function graffityCanvas(canvasId, parentClass, parentClass2, painting) {

  let paintingFlag = painting;

  const hiddenCanvas = document.createElement('canvas');
  const hiddenCtx = hiddenCanvas.getContext("2d");

  hiddenCanvas.width = 80
  hiddenCanvas.height = 80

  const particlesArray = [];

    for (let i = 0; i < 15; i++) {

    let img = new Image();

    for (let i = 550; i--; ) {
      let angle = getRandomFloat(0, Math.PI * 2);
      let radius = getRandomFloat(0, 40);
      hiddenCtx.globalAlpha = Math.random();
      hiddenCtx.fillStyle = "rgb(0, 255, 71)";
      hiddenCtx.fillRect(40 + radius * Math.cos(angle), 40 + radius * Math.sin(angle), 2, 2);
    }
    img.src = hiddenCanvas.toDataURL();
    particlesArray.push(img);
    hiddenCtx.clearRect(0,0, hiddenCanvas.width, hiddenCanvas.height)
  }



  const canvas = document.querySelector(canvasId),
    ctx = canvas.getContext("2d"),
    mouse = {
      x: undefined,
      y: undefined,
    };

  let density = 450;

  canvas.width = document.documentElement.scrollWidth;
  canvas.height = document.querySelector(parentClass).clientHeight + document.querySelector(parentClass2).clientHeight + 160;

  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }


  let screenData;

  let j = 0

  function draw() {
    // ctx.lineJoin = ctx.lineCap = "round";

    // for (let i = density; i--; ) {
    //   let angle = getRandomFloat(0, Math.PI * 2);
    //   let radius = getRandomFloat(0, 40);
    //   ctx.globalAlpha = Math.random();
    //   ctx.fillStyle = "rgb(0, 255, 71)";
    //   ctx.fillRect(mouse.x + radius * Math.cos(angle), mouse.y + radius * Math.sin(angle), 2, 2);
    // }

    if (j >= particlesArray.length) {
      j = 0;
    }

    ctx.drawImage(particlesArray[j], mouse.x - 40, mouse.y - 40)

    j++

    // requestAnimationFrame(draw)
  }

  // class Particle {
  //   constructor() {
  //     this.x = mouse.x;
  //     this.y = mouse.y;
  //     this.angle = getRandomFloat(0, Math.PI * 2);
  //     this.radius = getRandomFloat(0, 30);
  //     this.globalAlpha = Math.random();
  //     this.color = "rgb(0, 255, 71)";
  //   }
  // }

  let timerOff = true;
  let timer;

  if (painting) {
    paintingFlag = !painting;
    canvas.addEventListener("mousedown", function () {
      paintingFlag = true
      console.log(painting);
    })
    canvas.addEventListener("mouseup", function () {
      paintingFlag = false
      console.log(painting);
    })
  } else {
    paintingFlag = !painting
  }

  canvas.addEventListener("mousemove", function (event) {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;

    if (event.offsetY < canvas.height - 40 && event.offsetY > 40 && paintingFlag) {
      requestAnimationFrame(draw);
    }

    if (!painting) {
      if (timerOff) {
        fade();
        timerOff = false;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        window.cancelAnimationFrame(requestId);
        console.log("stop");
        timerOff = true;
      }, 5000);
    }
  
  });




 



  let requestId = undefined;
  let oldImg = new Image();

  function fade() {
    screenData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 3; i < screenData.data.length; i += 4) {
      screenData.data[i] -= 0.6; //delta-Alpha
    }
    ctx.putImageData(screenData, 0, 0);
    requestId = requestAnimationFrame(fade);
  }







  canvas.addEventListener("click", function () {
    // let screenData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    
    // setTimeout(function () {
      // ctx.putImageData(screenData, 0, 0 );
      // ctx.globalAlpha = 1
    // }, 4)
  });

  //   canvas.onmousedown = function(e) {
  //     ctx.lineJoin = ctx.lineCap = 'round';
  //     x = e.clientX;
  //     y = e.clientY;

  //     timeout = setTimeout(function draw() {
  //       for (let i = density; i--; ) {
  //         let angle = getRandomFloat(0, Math.PI * 2);
  //         let radius = getRandomFloat(0, 30);
  //         ctx.globalAlpha = Math.random();
  //         ctx.fillRect(
  //           x + radius * Math.cos(angle),
  //           y + radius * Math.sin(angle),
  //           getRandomFloat(1, 2), getRandomFloat(1, 2));
  //       }
  //       if (!timeout) return;
  //       timeout = setTimeout(draw, 50);
  //     }, 50);
  //   };
  //   canvas.onmousemove = function(e) {
  //     x = e.clientX;
  //     y = e.clientY;
  //   };
  //   canvas.onmouseup = function() {
  //     clearTimeout(timeout);
  //   };
}

module.exports = graffityCanvas;

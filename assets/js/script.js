function consequentialShow() {
  const head = document.getElementsByTagName("head")[0];
  head.innerHTML += `
  <style>
      .pop{
      animation: suddenShow 1s 1 ease-in-out;}
      @keyframes suddenShow {
          0%{scale: 0;}
          100%{scale:1;}
      }
  </style>
  `;
  divs = document.getElementsByClassName('consq');
  for (div of divs) {
      let children = div.children;
      for (let i = 0; i < children.length; i++) {
          let display = children[i].style.display;
          console.log(display);
          children[i].style.opacity = 0;
          setTimeout(() => {

            children[i].style.opacity = 1;

              children[i].classList.add("pop");
          }, i * 200);
      }
  };

}
let waiting = new Promise(function (resolve, reject) {ScrollReveal().reveal('.scrollReveal', { scale: 1.2,rotate: {
  x: 20,
  z: 3
},duration: 1000 }) });
waiting.then(consequentialShow());
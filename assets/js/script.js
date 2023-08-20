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
          children[i].style.display = 'none';
          setTimeout(() => {

              children[i].style.display = display;

              children[i].classList.add("pop");
          }, i * 400);
      }
  };

}
let waiting = new Promise(function (resolve, reject) {ScrollReveal().reveal('.scrollReveal', { scale: 1.2,rotate: {
  x: -5,
  z: -5
},duration: 1000 }) });
waiting.then(consequentialShow());
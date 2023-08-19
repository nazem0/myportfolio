// const skillsContainer = document.getElementById('skills');
function consequentialShow() {
  divs = document.getElementsByClassName('consq');
  for (div of divs) {
    let children = div.children;
    for (let i = 0; i < children.length; i++) {
      children[i].classList.add("d-none");
      setTimeout(() => {

        children[i].classList.remove("d-none");

        children[i].classList.add("pop");
      }, i * 400);
    }
  };

}

consequentialShow();
// consequentialShow(document.getElementById('contact-buttons'));
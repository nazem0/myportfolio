const skillsContainer = document.getElementById('skills');

function consequentialShow(div)
{
let children = skillsContainer.children;
for (let i = 0; i < children.length; i++) {
    setTimeout(() => {
      children[i].classList.add("pop");
      children[i].classList.remove("d-none");
    }, i * 400);
  }
}

consequentialShow(skillsContainer);
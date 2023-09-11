import "./scrollreveal.js";

function consequentialShow() {
    let divs = document.getElementsByClassName('consq');
    for (let div of divs) {
        let children = div.children;
        for (let i = 0; i < children.length; i++) {
            children[i].style.opacity=0;
            setTimeout(() => {
                children[i].classList.add("pop");
                children[i].removeAttribute('style')
            }, i * 350);
        }
    };

}

await ScrollReveal().reveal('.scrollReveal', {
    scale: 0.4,
    distance: '-200px'
    , duration: 1500
})

consequentialShow()

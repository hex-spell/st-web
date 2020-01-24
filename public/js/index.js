const controller = new ScrollMagic.Controller();

const articleShowcase = document.getElementsByClassName("material-showcase");
const tl = new gsap.timeline()   


for(let i = 0; i<articleShowcase.length; i++){ 
    let direction = Math.pow(-1,i)*200;
    tl.from(articleShowcase[i], 1, {x:direction,opacity:0.5});
    new ScrollMagic.Scene({
        triggerElement:articleShowcase[i].firstChild
    })
        .setTween(tl)
        .addTo(controller);
}


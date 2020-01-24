const controller = new ScrollMagic.Controller();

$('.material-showcase').each(function(index){
    const tl = new gsap.timeline(); 
    const direction = Math.pow(-1,index)*200;
    tl.from($(this),{x:direction,opacity:0.5})
    new ScrollMagic.Scene({
        triggerElement:this
    })
        .setTween(tl)
        .addTo(controller);
});


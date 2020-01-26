$(document).ready(function() {
  const controller = new ScrollMagic.Controller();

  $(".material-showcase").each(function(index) {
    const tl = new gsap.timeline();

    const distance = 25;
    //si material-showcase tiene la clase shifted, aparece desde el lado opuesto al normal.
    const direction = $(this).hasClass("shifted") ? -distance : distance;

    tl.from($(this), 1, { x: direction, opacity: 0 });
    new ScrollMagic.Scene({
      triggerElement: this
    })
      .setTween(tl)
      .addTo(controller);
  });
});

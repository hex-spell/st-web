const controller = new ScrollMagic.Controller();

$(".material-showcase").each(function(index) {
  const tl = new gsap.timeline();
  const direction = Math.pow(-1, index) * 25;
  tl.from($(this), 1, { x: direction, opacity: 0 });
  new ScrollMagic.Scene({
    triggerElement: this
  })
    .setTween(tl)
    .addTo(controller);
});

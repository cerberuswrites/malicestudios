document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin,DrawSVGPlugin)
  // gsap code here!
  console.log("gsap plugins registered!");
  ScrollTrigger.refresh();


    /* gsap.to('section#zugzy-preview', {
        scrollTrigger: 'section#zugzy-preview', // start animation when this enters the viewport
        // x: 500 // <- this is the animation
    }); */

ScrollSmoother.create({
  smooth: 2,
  effects: true,
  content:".wrapper",
});

  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "bottom bottom",
        toggleClass: "visible",
        scrub: 1
      }
    })
    .to("section#main .section-inner", {
      opacity: 0.5,
      filter:"blur(12px)",
      duration:2,
      ease: "sine.in"
    })
    .to(".grid-bg .grid-1", {
      opacity: 0,
      filter:"blur(4px)",
      duration:5,
      transformOrigin: "center center",
      yPercent:-30
    }, "<")
    .to(".grid-bg .grid-2", {
      scale: 1.2,
      opacity: 1,
      duration:12,
      transformOrigin: "center center",
      yPercent:-20,
      delay:1
    }, "<")
    ;

    let tl2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: "section#zugzy-preview",
        start: "top center",
        end: "bottom+=300px bottom",
        toggleClass: "visible",
        scrub: 2
      },
      defaults: {
        ease:"none",
        duration:2,
        opacity:1,
      }
    }).to(
      "section#zugzy-preview",
      {
        scale: 1,
        filter:"blur(0px)",
        transformOrigin: "center center",
      }
    )
    .addLabel("visibleLabel", ">")
    .to(
      ".img-wrapper.second",
      {
        scrollTrigger: {
        trigger: ".img-wrapper.second",
        start: "top center-=100px", end: "bottom center+=100px", scrub: 1
        }
      }
    )
    .to(
      ".img-wrapper.third",
      {
        scrollTrigger: {
        trigger: ".img-wrapper.third",
        start: "top center-=100px", end: "bottom center+=100px", scrub: 1,
        }
      }
    )
    .to(
      ".img-wrapper.fourth",
      {
        scrollTrigger: {
        trigger: ".img-wrapper.fourth",
        start: "top bottom-=100px", end: "bottom bottom-=300px", scrub: 1
        }
      }
    )
    .to(
      ".img-wrapper.fourth div",
      {
        scrollTrigger: {
        trigger: ".img-wrapper.fourth div",
        start: "top center+=300px", end: "bottom center+=200px", scrub: 1
        },
        filter:"blur(0px)"
      }
    )
    .fromTo(
      "#line",
      {
        opacity:0.4, 
        drawSVG: "0"
      }, { 
        opacity:1, 
        delay:0,
        ease:"sine.in", 
        duration: 12, 
        drawSVG: "100% live" 
      },
      "visibleLabel+=1"
    );


    ScrollTrigger.create({
      trigger: 'section#navigation',
      start: 'top center',
      end: 'bottom bottom',
      toggleClass: "visible"
    });

});


 function resetScroll() {
  window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth' 
  });
 }

 function scrollToTop() {
  gsap.to(window, {
			scrollTo: {
				y: 0,
				autoKill: false
			},
			duration: 1
		});
 }

 $( ".scrolltop-btn" ).on( "click", function() {
  scrollToTop();
  $(".scrollto").removeClass("hide");
});

 $( ".scrollto" ).on( "click", function() {
  var elem = $(this).attr("data-target");
  var $elem = $( elem )[0];
  scrollToElem( $elem );
  $(this).addClass("hide");
  //console.log($elem)
});



function scrollToElem(elem) {
  var elmTop = elem.getBoundingClientRect().top + window.scrollY - 200;
  gsap.to(window, {
			scrollTo: {
				y: elmTop,
				autoKill: false
			},
			duration: 1
		});
 }
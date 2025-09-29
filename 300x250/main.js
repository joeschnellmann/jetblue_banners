const tl = gsap.timeline({ defaults:{ duration: 0.7, ease: "power3.out" } });

tl.from("#plane",{x:400, opacity:0})
  .from("#hl_main",{y:50, opacity:0}, "-=0.6")
  .from("#hl_sub",{y:30, opacity:0}, "-=0.5")
  .from("#cta",{scale:0, opacity:0, ease:"back.out(1.7)"}, "-=0.2")
  .from("#hl_date",{opacity:0},"-=0.3")
  .from(["#logo_orf","#logo_jetblue"], {opacity:0, stagger:0.1}, "-=0.4");
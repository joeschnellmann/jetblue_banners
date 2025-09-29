const tl = gsap.timeline({ defaults:{ duration: 0.8, ease: "power3.out" } });

tl.from("#plane",{x:400, opacity:0})
  .from("#hl_main",{y:50, opacity:0}, "-=0.6")      // overlaps more with plane
  .from("#hl_sub",{y:30, opacity:0}, "-=0.5")       // almost same time as main
  .from("#cta",{scale:0, opacity:0, ease:"back.out(1.7)"}, "-=0.2") // overlaps instead of waiting
  .from("#hl_date",{opacity:0},"-=0.3")             // fades in earlier
  .from(["#logo_orf","#logo_jetblue"], {opacity:0, stagger:0.1}, "-=0.4"); // logos tighter
// ----------------all my animations--------------

gsap.from("#firstparagraph1", {
  duration: 3,
  y: "-100%",
  ease: "Sine.easeOut",
});

gsap.from("#quote1", {
  duration: 3,
  y: "-500%",
  ease: "Back.easeOut",
});

//---------------------------------------------------

// ----------------tabs button animation--------------

const menuBtn = document.querySelector(".menu-button1");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    document.getElementById("hider1").style.display = "inline";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    document.getElementById("hider1").style.display = "none";
  }
});
TweenLite.to(myText, 5, { x: 600, ease: new SlowMo(0.5, 0.8) });
// ------------------------------------------------

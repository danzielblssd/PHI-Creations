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
// ------------------Contact--------------------------
// var form = document.getElementById("my-form");

// async function handleSubmit(event) {
//   event.preventDefault();
//   var status = document.getElementById("my-form-status");
//   var data = new FormData(event.target);
//   fetch(event.target.action, {
//     method: form.method,
//     body: data,
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((response) => {
//       status.innerHTML = "Thanks for your submission!";
//       form.reset();
//     })
//     .catch((error) => {
//       status.innerHTML = "Oops! There was a problem submitting your form";
//     });
// }
// form.addEventListener("submit", handleSubmit);

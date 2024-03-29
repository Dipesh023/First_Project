

var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (debts) {
  crsr.style.left = debts.x - 10 + "px";
  crsr.style.top = debts.y - 10 + "px";
  blur.style.left = debts.x - 200 + "px";
  blur.style.top = debts.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "1px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "black",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -15%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 80,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 68%",
    scrub: 2,
  },
});
gsap.from(".card", {
  y: 50,
  scale: 0.5,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 68%",
    scrub: 1,
  },
});

gsap.from("#img1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#img1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#img2", {
  y: +70,
  x: +70,
  scrollTrigger: {
    trigger: "#img1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 70,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.from;

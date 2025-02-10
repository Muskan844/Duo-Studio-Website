function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

init();

var main = document.querySelector(".main");
var crsr = document.querySelector(".cursor");
var video = document.querySelector("video");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 8 + "px";
  crsr.style.top = dets.y + 8 + "px";
});
video.addEventListener("mouseenter", function () {
  crsr.innerHTML = "SOUND ON";
  crsr.innerHTML.style.size = "2px";
  crsr.style.borderRadius = "30px";
});
video.addEventListener("mouseleave", function () {
  crsr.innerHTML = "";
});

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 27%",
    end: "top 0%",
    scrub: 2,
  },
});
let tll = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 video",
    scroller: ".main",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});
tl.to(
  ".page1>h1",
  {
    x: -100,
    duration: 3,
  },
  "anim"
);
tl.to(
  ".page1>h2",
  {
    x: 150,
    duration: 3,
  },
  "anim"
);
tll.to(
  ".page1>video",
  {
    width: "110%",
    duration: 2,
  },
  "anim"
);
// kvhkuhv
// let sa = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".page3 h1",
//     scroller: "body",
//     markers:true,
//     start: "top 90%",
//     end:"top 50%",
//     scrub: 1, 
//   },
// });
// sa.from(".page3 h1", {
//   duration: 2,
//   opacity:0,
//   y:20,
//   stagger:0.3,
// });


// gsap.from(".page5 h2", {
//   duration: 2,
//   opacity:0,
//   y:20,
//   stagger:0.3,
//   scrollTrigger: {
//     trigger: ".page5 h2",
//     scroller: "body",
//     markers:true,
//     start: "top 90%",
//     end:"top 50%",
//     scrub: 1, 
//     //animation purely based on scrolling , between start and end
//     // pin:true,
//   }, //write in camel case and paste scrollTrigger cdn after gsap cdn, otherwise it will not work
  
// });
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    // markers:true,
    start: "top -120%",
    end: "top 130%",
    scrub: 2,
  },
});
tl2.to(".main", {
  backgroundColor: "white",
});

//if i add timeline to gsap, then next element will trigger after first element
//but if add common string to both h1 &h2, then they will get scroll triggered at same time
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    markers:true,
    start: "top -120%",
    end: "top 210%",
    scrub: 2,
  },
});
tl3.to(".main", {
  backgroundColor: "#000",
});

var box = document.querySelectorAll(".box");
box.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let attr = elem.getAttribute("data-image");
    crsr.style.width = "20vw";
    crsr.style.height = "25vw";
    crsr.style.transform = "translate(0,-50%)";
    crsr.style.borderRadius = "0";
    crsr.style.backgroundImage = `url(${attr})`;
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = `none`;
  });
});

var h4 = document.querySelectorAll(".nav h4");

h4.forEach(function (elem) {
  let purple = document.querySelector(".purple");
  marquee = document.querySelector("marquee");
  elem.addEventListener("mouseenter", function () {
    purple.style.opacity = "1";
    purple.style.display = "block";
    let content = `${elem.innerHTML}       `;
    marquee.innerHTML = content.repeat(100);

  });
  elem.addEventListener("mouseleave", function () {
    purple.style.opacity = "0";
    purple.style.display = "none";
  });
});

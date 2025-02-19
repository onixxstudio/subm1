// gsap.registerPlugin(ScrollTrigger);

// let card = gsap.utils.toArray(".card");

// function initCards() {
//   animation.clear();
//   cardHeight = cards[0].offsetHeight;
//   cards.forEach((card, index) => {
//     if (index === 0) {
//       gsap.set(card, {
//         y: 0,
//         backgroundColor: "#FDFAFF",
//         opacity: 1,
//         duration: 0.1
//       });
//       animation.to(
//         card,
//         {
//           y: -40 * cards.length,
//           duration: 0.1,
//           opacity: 0
//         },
//         0
//       );
//     } else if (index === 1) {
//       gsap.set(card, {
//         y: cardHeight,
//         backgroundColor: "transparent",
//         opacity: 1,
//         duration: 1
//       });
//       animation.to(
//         card,
//         {
//           y: -40 * cards.length,
//           opacity: 0,
//           duration: 0.4
//         },
//         0
//       );
//     } else {
//       gsap.set(card, {
//         y: cardHeight * 2,
//         backgroundColor: "transparent",
//         opacity: 0,
//         duration: 0.1
//       });
//       animation.to(
//         card,
//         {
//           y: 0,
//           duration: 4,
//           opacity: 1
//         },
//         0
//       );
//     }
//   });
// }

// ScrollTrigger.create({
//   trigger: ".section",
//   start: "top",
//   pin: ".section",
//   // end: `+=${cards[0].offsetHeight * cards.length + header.offsetHeight + 200}`,
//   scrub: true,
//   animation,
//   pinSpacing: true,
//   markers: true,
//   invalidateOnRefresh: true,
//   onLeave: (e) => console.log(e),
//   ease: "Power2.in",
//   // snap: {
//   //   snapTo:1/(cards.length - 1),
//   //   duration:{min:0.1, max:0.6}

//   // },
//   toggleActions: "restart none restart none"
// });



// Result Skip Results Iframe
// EDIT ON
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    scrub: 1,
    pin: true,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});








myFunction()

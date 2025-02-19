gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 2),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
    //   markers: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000 bottom"
    }
  });

gsap.utils.toArray(".panel").forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    containerAnimation: scrollTween,
    // markers: true,
    start: "left left",
    toggleClass: "stick"
  })
})






// gsap.to('.carbtns1',{
//   backgroundColor:'white',
//   color:'black',
//   // scale:2,
//   scrollTrigger: {
//    trigger: ".carbtns1",
//    start:'50% 50%',
//    end:'50% 50%',
// //  markers:true,
//  scrub:true,
//  }
 
//  })


//  gsap.to('.carbtns2',{
//   backgroundColor:'white',
//   color:'black',
//   // scale:2,
//   scrollTrigger: {
//    trigger: ".carbtns1",
//   //  start:'-40% -40%',
//   //  end:'90% 90%',
//    start:'top -70%',
//    end:'top -70%',
//    scrub:true,
// //  markers:true,
//  }
 
//  })


//  gsap.to('.carbtns3',{
//   backgroundColor:'white',
//   color:'black',
//   // scale:2,
//   scrollTrigger: {
//    trigger: ".carbtns3",
//    start:'top -1400px',
//    end:'top -1400px',
//    scrub:true,
//    markers:true,
//  }
 
//  })
 
 
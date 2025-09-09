window.addEventListener("load", (event) => {
    sessionStorage.setItem("loadStatus", "hasLoaded");    
});

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);



// gsap.registerPlugin(CustomEase);"M0,0 C0.29,0.348,0.05 0.422,0.134 0.494,0.217 0.484, 0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701, 0.983 072,0.987 1,1"
// CustomEase.create('hop', "0.9, 0, 0.1, 1");


// document.addEventListener("DOMContentLoaded", () => {
//     const sessionStatus = sessionStorage.getItem("loadStatus");

//     const tl = gsap.timeline({
//         delay: 0.3,
//         defaults: {
//             ease: 'hop'
//         }
//     })
    
//    if(sessionStatus === "hasLoaded") {
//     // tl.set("#block", {display: "none"})
//     console.log("hide block")

//     // tl.set('#hero-img', { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', })
//     // tl.to('#hero-img', { scale: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', })

//      tl.to("#block", {
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//             duration: 1,
//             stagger: 0.1,
//             delay: 0.75,
//             // onStart: () => gsap.to('#hero-img', { scale: 1, duration: 2, ease: "hop"})
//         });

//     tl.to([".nav-ul", ".line h1", ".word p", ".cta-label button"], {
//         y: '0%',
//         duration: 1.3,
//         stagger: 0.2,
//         onStart: () => gsap.to('.cta-label button', { scale: 1, duration: 1.5, stagger: 0.75, delay: 0.75, ease: "hop"})
//     },
//     "<")

//     return;
//     }else {
       
//         tl.to("#block", {
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//             duration: 1,
//             stagger: 0.1,
//             delay: 0.75,
//             // onStart: () => gsap.to('#hero-img', { scale: 1, duration: 2, ease: "hop"})
//         });

//         tl.to([".nav-ul", ".line h1", ".word p", ".cta-label button"], {
//             y: '0%',
//             duration: 1.5,
//             stagger: 0.2,
//             onStart: () => gsap.to('.cta-label button', { scale: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.5, stagger: 0.75, delay: 0.75, ease: "hop"})
//         },
//         "<")
//     }  
// })


// create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });


// document.querySelector("#menu").addEventListener("click", e => {
//     const click = "#" + e.target.innerText.toLowerCase();
//     if(!click) return;
//     console.log( click)
//     gsap.to(window, {scrollTo:click, duration:.5});
// })


// const mobileNav = document.querySelector('#mobile-nav');
// const navbarDropdown = document.querySelector('#navbar-dropdown');
// let isActive = false;

// mobileNav.addEventListener('click', function(e){

//     console.log(isActive)

//     if(isActive){
//         open()
//     }else{
//         close()
//     }

//     function open(){
//         gsap.to(navbarDropdown, {
//             x: 750,
//             ease: "power4.inOut",
//         })  
//         isActive = false;
//     }

//     function close(){
//         gsap.to(navbarDropdown, {
//             x: 0,
//             ease: "power4.inOut",
//         })  
//         isActive = true;
//     }
// });


// let proxy = { skew: 0 },
//     skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
//     clamp = gsap.utils.clamp(-2, 2); // don't let the skew go beyond 20 degrees. 

// ScrollTrigger.create({
//   onUpdate: (self) => {
//     let skew = clamp(self.getVelocity() / -300);
//     // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
//     if (Math.abs(skew) > Math.abs(proxy.skew)) {
//       proxy.skew = skew;
//       gsap.to(proxy, {skew: 0, duration: 1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
//     }
//   }
// });



// gsap.set('.cursor',{xPercent:-50, yPercent: -50})

// window.addEventListener("mousemove", e => {
//     mouseX = e.clientX;
//     mouseY = e.clientY
//     gsap.to(".cursor", .001, {
//       x: mouseX,
//       y: mouseY,
//   });
// });

// //Logo snap to mouse cursor

let hoverArea = document.querySelector("#hover-area");

let xTo = gsap.quickTo("#icon", "x", { ease: "power3" });
let yTo = gsap.quickTo("#icon", "y", { ease: "power3" });

function onMove(e) {
  let boundingRect = hoverArea.getBoundingClientRect();
  let relX = e.pageX - boundingRect.left;
  let relY = e.pageY - boundingRect.top;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  let x = relX - boundingRect.width / 2;
  let y = relY - boundingRect.height / 2 - scrollTop;
  xTo(x);
  yTo(y);
}

function onLeave(e) {
  xTo(0);
  yTo(0);
}

hoverArea.addEventListener("mousemove", function (e) {
  onMove(e);
  gsap.to(".cursor", {
    scale: .5,
  })
});

hoverArea.addEventListener("mouseleave", function (e) {
  onLeave(e);
  gsap.to(".cursor", {
    scale: 1,
  })
});


// const body = document.querySelector("body");

// body.addEventListener("mouseleave", e => {
//     gsap.to(".cursor", {
//       scale: 0,
//     })
// });

// body.addEventListener("mouseenter", e => {
//    gsap.to(".cursor", {
//       scale: 1,
//     })
// });


// const projects = document.querySelectorAll('#project');
// const cursorEl = document.querySelector('.cursor');

// projects.forEach(project => {

//   project.addEventListener("mouseenter", (e) => {
//     cursorEl.classList.add('cursor-text')
//     cursorEl.textContent = "explore";

//     gsap.to(cursorEl, {
//         backgroundColor: "white",
//         scale: 2,
//       })
//   })
 
//     project.addEventListener("mouseleave", (e) => {
//       cursorEl.classList.remove('cursor-text')
//       cursorEl.textContent = "";
//       gsap.to(cursorEl, {
//         backgroundColor: "#c8fc01",
//         scale: 1,
//       })
//     })
// })



// HTML CSS JSResult Skip Results Iframe
// EDIT ON
// Check if it's a touch device
const isTouchDevice = 'ontouchstart' in window;

// Function for Mouse Move Scale Change (Jelly Effect)
function getScale(diffX, diffY) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 40, 0.25);
}

// Function For Mouse Movement Angle in Degrees (Jelly Effect)
function getAngle(diffX, diffY) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}


// Variables
const elasticCursor = document.getElementById("jelly-cursor");
const pos = { x: 0, y: 0 };
const vel = { x: 0, y: 0 };
let targetPos = { x: 0, y: 0 };
let isHoveringClickable = false;
let isHoveringExplore = false;
let hoverScale = 1;

// Use gsap.quickSetter for optimized property setting
const setX = gsap.quickSetter(elasticCursor, "x", "px");
const setY = gsap.quickSetter(elasticCursor, "y", "px");
const setRotation = gsap.quickSetter(elasticCursor, "rotate", "deg");
const setScaleX = gsap.quickSetter(elasticCursor, "scaleX");
const setScaleY = gsap.quickSetter(elasticCursor, "scaleY");
const setOpacity = gsap.quickSetter(elasticCursor, "opacity");


// Update position and rotation (without affecting the scale)
function update() {
  const rotation = getAngle(vel.x, vel.y);
  const jellyScale = getScale(vel.x, vel.y);

  // Apply jelly-like effect (position and rotation), keeping scale separate
  setX(pos.x);
  setY(pos.y);
  setRotation(rotation);

  // If not hovering, apply the jelly scale effect
  // if (!isHoveringClickable) {
  setScaleX(hoverScale + jellyScale);
  setScaleY(hoverScale - jellyScale);
  // }
}

// Animation loop
function animate() {
  const speed = 0.35;

  // Update cursor's position based on targetPos
  pos.x += (targetPos.x - pos.x) * speed;
  pos.y += (targetPos.y - pos.y) * speed;
  vel.x = targetPos.x - pos.x;
  vel.y = targetPos.y - pos.y;

  update();
  requestAnimationFrame(animate);
}

// Handle mouse move event
window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  targetPos.x = clientX;
  targetPos.y = clientY;

  // Always update position, regardless of hover state
  update();
});

// Function to handle scaling when hovering over clickable elements
function handleCursorHover(isHovering, scale) {
  isHoveringClickable = isHovering; // Set hover state

  if(isHovering && scale > 2) {
    elasticCursor.innerText = 'Visit';
  }else {
    elasticCursor.innerText = "";
  }

  // isHovering  ?  elasticCursor.classList.add('jelly-cursor-w') : elasticCursor.classList.remove('jelly-cursor-w');
 
  
  // Smoothly apply scaling effect on hover, but don't stop position updating
  gsap.to(elasticCursor, { // animate a dummy object
    duration: 0.5,
    ease: "power2.out",
    zoom: "100%",
    onUpdate: function() {
      // GSAP interpolates hoverScale smoothly
      hoverScale = gsap.utils.interpolate(
        hoverScale,
        isHovering ? scale : 1,
        this.progress()
        );
      }
    }
  )
}


// Add event listeners for clickable elements (links and buttons)
document.querySelectorAll('a, button').forEach((element) => {
  // Scale down cursor on mouse enter
  element.addEventListener('mouseenter', () => handleCursorHover(true, 0.5));

  // Reset cursor size on mouse leave
  element.addEventListener('mouseleave', () => handleCursorHover(false, 0.5));
});

// Add event listeners for clickable elements (links and buttons)
document.querySelectorAll('#project').forEach((element) => {
 // Scale down cursor on mouse enter
  element.addEventListener('mouseenter', () => handleCursorHover(true, 3));

  // Reset cursor size on mouse leave
  element.addEventListener('mouseleave', () => handleCursorHover(false, 3));
});

// Function to hide the cursor
function hideCursor(isHovering, scale) {
 isHoveringClickable = isHovering; // Set hover state

  // Smoothly apply scaling effect on hover, but don't stop position updating
  gsap.to(elasticCursor, { // animate a dummy object
    duration: 0.5,
    ease: "power2.out",
    onUpdate: function() {
      // GSAP interpolates hoverScale smoothly
      hoverScale = gsap.utils.interpolate(
        hoverScale,
        isHovering ? scale : 1,
        this.progress()
        );
      }
    }
  )
}

// Function to show the cursor
function showCursor(isHovering, scale) {
  isHoveringClickable = isHovering; // Set hover state

  // Smoothly apply scaling effect on hover, but don't stop position updating
  gsap.to(elasticCursor, { // animate a dummy object
    duration: 0.5,
    ease: "power2.out",
    onUpdate: function() {
      // GSAP interpolates hoverScale smoothly
      hoverScale = gsap.utils.interpolate(
        hoverScale,
        isHovering ? scale : 1,
        this.progress()
        );
      }
    }
  )
}

// Hiding the cursor when it leaves the viewport
document.addEventListener('mouseleave',() => hideCursor(true, 0));

// Re-show the cursor when mouse re-enters the viewport
document.addEventListener('mouseenter',() => showCursor(false, 0.5));

// Detect when entering and exiting an iframe
const iframes = document.querySelectorAll('iframe');

iframes.forEach((iframe) => {
  // Add event listener to hide cursor when entering the iframe
  iframe.addEventListener('mouseenter', hideCursor);

  // Add event listener to show cursor when leaving the iframe
  iframe.addEventListener('mouseleave', showCursor);
});

// Only invoke the animation if it's not a touch device
if (!isTouchDevice) {
  animate();
}

//HERO ANIMATION

document.addEventListener("DOMContentLoaded", () => { 

gsap.registerPlugin(CustomEase);
CustomEase.create('hop', "M0,0 C0.29,0 0.348,0.05 0.422,0.134 0.494,0.217 0.484, 0.355 0.5,0.5 0.518,0.662 0.515,0.793 0.596,0.876 0.701, 0.983 0.72,0.987 1,1");


  const tl = gsap.timeline({ 

        defaults: { 
            ease: 'hop'
        }
    });

  
  tl.to(".hero", {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)", 
    duration: 2,
    ease: "hop",
    onStart: () => {
      gsap.to(".hero", { transform: "translate(-50%, -50%)", scale: 1, duration: 2.25, ease: 'power3.inOut', delay: 0.25 });  
    }
  });
  
  gsap.to(".overlay", {  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: 2, delay: 0.5, ease: "hop"}); 

  gsap.to([".nav-ul", ".line h1",".line p", ".word p", ".cta-label button", ".word img"], {
            y: '0%',
            duration: 2,
            delay: 0.6,
            stagger: 0.1,
            ease: "power4.inOut",
            onStart: () => gsap.to('.cta-label button', { scale: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.5, stagger: 0.75, delay: 0.75, ease: "hop"})
        },
      )

  gsap.to("nav", {
    y: '0%',
      duration: 2,
      delay: 0.9,
      stagger: 0.1,
      ease: "power4.inOut",
  })
})


// BUTTON DROP DOWN WITH PHYSICS

document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = true;

  const config ={
    gravity: {x: 0, y: 1},
    restitution: 0.5,
    friction: 0.15,
    frictionAir: 0.02,
    density: 0.002,
    wallThickness: 200,
    mouseStiffness: 0.6,
  }

  let engine,
      runner,
      mouseConstraint,
      bodies = [],
      topWall = null;

  function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  }

  function initPhysics(container) {
    engine = Matter.Engine.create();
    engine.gravity = config.gravity;
    engine.constraintIterations = 10;
    engine.positionIterations = 20;
    engine.velocityIterations = 16;
    engine.timing.timeScale = 1;

    const containerRect = container.getBoundingClientRect();
    const wallThickness = config.wallThickness;

    const walls = [
      Matter.Bodies.rectangle(
        containerRect.width / 2,
        containerRect.height + wallThickness / 2,
        containerRect.width + wallThickness * 2,
        wallThickness,
        {isStatic: true}
        ),
        Matter.Bodies.rectangle(
          -wallThickness / 2,
          containerRect.height / 2,
          wallThickness,
          containerRect.height + wallThickness * 2,
          {isStatic: true}
        ),
        Matter.Bodies.rectangle(
          containerRect.width + wallThickness / 2,
          containerRect.height / 2,
          wallThickness,
          containerRect.height + wallThickness * 2,
          {isStatic: true}
        ),
      ];
      Matter.World.add(engine.world, walls);

      const objects = container.querySelectorAll(".object");

      objects.forEach((obj, index) => {
        const objRect = obj.getBoundingClientRect();

        const startX = Math.random() * (containerRect.width - objRect.width) + objRect.width / 2;
        const startY = - 500 - index * 200;
        const startRotation = (Math.random() - 0.5) * Math.PI;

        const body = Matter.Bodies.rectangle(
          startX,
          startY,
          objRect.width,
          objRect.height,
          {
            restitution: config.restitution,
            friction:config.friction,
            frictionAir: config.frictionAir,
            density: config.density,          }
        );

        Matter.Body.setAngle(body, startRotation);

        bodies.push({
          body:body,
          element:obj,
          width: objRect.width,
          height: objRect.height
        })

        Matter.World.add(engine.world, body)
      });

      setTimeout(() => {
        topWall = Matter.Bodies.rectangle(
          containerRect.width / 2,
          -wallThickness / 2,
          containerRect.width + wallThickness * 2,
          wallThickness,
          { isStatic: true }
        );
        Matter.World.add(engine.world, topWall);
      }, 3000);

      const mouse = Matter.Mouse.create(container);
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: config.mouseStiffness,
          render: {visible: false},
        },
      })

      mouseConstraint.mouse.element.oncontextmenu = () => false;

      let dragging = null;
      let orginalInertia = null; 

      Matter.Events.on(mouseConstraint, "startdrag", function(event) {
        dragging = event.body;
        if (dragging) {
          orginalInertia = dragging.inertia;
          Matter.Body.setInertia(dragging, Infinity);
          Matter.Body.setVelocity(dragging, {x: 0, y: 0});
          Matter.Body.setAngularVelocity(dragging, 0);
        }
      });

      Matter.Events.on(mouseConstraint, "enddrag", function(event) {
        if (dragging) {
          Matter.Body.setInertia(dragging,orginalInertia || 1);
          dragging = null;
          orginalInertia = null;
        }
      });


      Matter.Events.on(engine, "beforeUpdate", function(){
        if(dragging) {
          const found = bodies.find((b) => b.body === dragging);
          if (found) {
            const minX = found.width / 2;
            const maxX = containerRect.width - found.width / 2;
            const minY = found.height / 2;
            const maxY = containerRect.height - found.height / 2;

            Matter.Body.setPosition(dragging, {
              x: clamp(dragging.position.x, minX, maxX),
              y: clamp(dragging.position.y, minY, maxY)
            })

            Matter.Body.setVelocity(dragging, {
              x: clamp(dragging.velocity.x, -20, 20),
              y: clamp(dragging.velocity.y, -20, 20),
            })

          }
        }
      });


      container.addEventListener("mouseleave", () => {
        mouseConstraint.constraint.bodyB = null;
        mouseConstraint.constraint.pointB = null;
      });


      document.addEventListener("mouseup", () => {
        mouseConstraint.constraint.bodyB = null;
        mouseConstraint.constraint.pointB = null;
      });

      Matter.World.add(engine.world, mouseConstraint);

      runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);

      function updatePositions() {
        bodies.forEach(({body, element, width, height}) => {
          const x = clamp(
            body.position.x - width / 2,
            0,
            containerRect.width - width
          );

          const y = clamp(
            body.position.y - height / 2,
            -height * 3,
            containerRect.height - height
          );
          element.style.left = x + "px";
          element.style.top = y + "px";
          element.style.transform = `rotate(${body.angle})rad`;
        })
        requestAnimationFrame(updatePositions);
      }
      updatePositions();
    }

    if(animateOnScroll) {
      document.querySelectorAll("section").forEach((section) => {
         
        if(section.querySelector(".object-container")) {
          ScrollTrigger.create({
            trigger: section,
            start: "top bottom",
            once: true,
            onEnter: () => {
              const container = section.querySelector(".object-container");
              if(container && !engine) {
               
                initPhysics(container);
              }
            }
          })
        }
      })
    } else {
      window.addEventListener("load", () => {
        const container = document.querySelector('.object-container');
        console.log(container)
        if(container) {
          
          initPhysics(container)
        }
      });
    }
  });


  // CARD STAGGER SLIDEUP

  const cards = document.querySelectorAll('.slideup-card');
  const smoothStep = (p) => p * p * (3 - 2 * p);

  ScrollTrigger.create({
    trigger: '.cards',
    start: "top bottom",
    end: "40% top",
    scrub: 1,
    duration: 1,
    onUpdate: (self) => {

      const progress = self.progress;

      cards.forEach((card, index)=> {
        const delay = index * 2;
        const cardProgress = gsap.utils.clamp(
          0,
          1,
          (progress - delay * 0.1) / (1 - delay * 0.1)
        )

        const y = gsap.utils.interpolate(
          "50%", 
          "10%",
          smoothStep(cardProgress)
        )


        gsap.set(card, {
          y: y,
        });
      });
    },
  });


  //Fade in text

let split = SplitText.create(".text", {
  type: "words",
  mask: "words",
  wordsClass: "word",
});

gsap.to(split.words, {
  scrollTrigger: {
		trigger: '#container',
		start: 'top 80%', // when the top of the trigger hits the top of the viewport
  },
  y: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power4.out"
});


let split1 = SplitText.create(".text-1", {
  type: "words",
  mask: "words",
  wordsClass: "word",
});

gsap.to(split1.words, {
  scrollTrigger: {
		trigger: '#work',
		start: 'top 80%', // when the top of the trigger hits the top of the viewport
  },
  y: 0,
  duration: 1.5,
  stagger: 0.1,
  ease: "power4.in"
});


const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    gsap.to(project, {
    scrollTrigger: {
      trigger: project,
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
    },
    y: 0,
    duration: 2,
    opacity: 1,
    ease: "power4.inOut"
  });
})


/**
 * GSAP IMPORT 
 */
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
// GSAP IMPORT END ***********************************************************

/**
 * VARIABLES
 */
let windowHeight = window.innerHeight;

// VARIBLES END **************************************************************

/**
 * DAFT ANIMATION
 */

let phrase  = [
    "DAFT",
    "PUNK"
];

let part = 0;
let part_index = 0;
var intervalle_instance;
let elem = document.querySelector("#change");

function Ecrire() {
  let texte = phrase[part].substring(0, part_index + 1);
  elem.innerHTML = texte;
  part_index++;

  if (texte === phrase[part]) {
      clearInterval(intervalle_instance);
      setTimeout(function() {
          intervalle_instance = setInterval(Effacer, 25);
      }, 2000);
  }
}

function Effacer() {
  let texte = phrase[part].substring(0, part_index - 1);
  elem.innerHTML = texte;
  part_index--;

  if (texte === '') {
      clearInterval(intervalle_instance);

      if (part == (phrase.length - 1))
          part = 0;
      else
          part++;

          part_index = 0;

      setTimeout(function() {
          intervalle_instance = setInterval(Ecrire, 85);
      }, 600);
  }
}

intervalle_instance = setInterval(Ecrire, 85);
// DAFT ANIMATION END ***********************************************************


/**
 * Set a point to selected and remove selected class from others
 * @param pointId The point's id.
 */
let selectPoint = (pointId: string) => {
	let point = document.querySelector(`#${pointId}`);
	point.classList.add("selected");
	
	document.querySelectorAll(".point").forEach(point => {
		if (point.id !== pointId) {
			point.classList.remove("selected");
		}
	});
}
// SELECT POINT END ***********************************************************



/**
 * Change the selected point from scroll.
 */
window.addEventListener("scroll", () => {
	let scroll = window.scrollY;
	
	
	
	if (scroll <= windowHeight / 2) {
		
		
		selectPoint("point1");
	} else if (scroll < (windowHeight * 1.5) && scroll <= windowHeight * 2) {
		
		
		
		
		selectPoint("point2");
	} else if (scroll >= (windowHeight * 2)){
		selectPoint("point3");
	}
});
// CHANGE POINT END ***********************************************************


/**
 * Scroll to the selected point when a point is clicked.
 */
document.querySelectorAll(".point").forEach(point => {
	point.addEventListener("click", () => {
		let pointId = point.id;
		let pointNumber = pointId.substring(pointId.length - 1);
		
		let pointPosition = windowHeight * (+pointNumber - 1);
		
		
		if (pointNumber === "3") {
			pointPosition = windowHeight * 2;
		}
		
		
		gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: pointPosition,
				autoKill: false
			}
		});
	});
});

document.querySelectorAll(".tabs p").forEach(p => {
	
	p.addEventListener("click", () => {
		let pointId = p.id;
		let pointNumber = pointId.substring(pointId.length - 1);
		
		let pointPosition = windowHeight * (+pointNumber - 1);
		
		
		if (pointNumber === "3") {
			pointPosition = windowHeight * 2;
		}
		
		
		gsap.to(window, {
			duration: 1,
			scrollTo: {
				y: pointPosition,
				autoKill: false
			}
		});
	});
	
});
// SCROLL TO POINT END ***********************************************************


/**
 * GSAP ANIMATION
 * Allows to increase the width of #img-1 when the middle of #page1 hits the middle of the screen.
 */
gsap.to("#img-1", {
  scrollTrigger: {
    trigger: "#page1",
    scrub: true,
    start: "middle top",
    end: "+=100%"
  },
	
	width: "88vw",
  ease: "inOut"
});
// GSAP ANIMATION END ***********************************************************


// here you put all the js you want.
//

import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



let changeName = document.querySelector("#change");

let toWrite = "DAFT"
let timeout = 1000;

let changeTimeout = () => {
  timeout = Math.floor(Math.random() * (4300 - 500 + 1) ) + 500;
}

let write = () => {
	let len = changeName.innerHTML.length;
	let listeToWrite = toWrite.length;
	
	
	if (len < listeToWrite) {
		changeName.innerHTML += toWrite[len];
		changeTimeout();
	} else {
		changeName.innerHTML = "";
		toWrite = toWrite === "DAFT" ? "PUNK" : "DAFT";
	}
	changeTimeout()
	
};

write();
setInterval(write, 500);






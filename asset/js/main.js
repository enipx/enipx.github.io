const toggle 		= document.querySelector("#toggle");

let trans = () => {
	document.documentElement.classList.add('transition');
	window.setTimeout(() => {
		document.documentElement.classList.remove('transition');
	}, 1000)
};

function switchThemes(e) {
	let variation = e.target.id;

	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', variation);
		trans();
	} else {
		document.documentElement.setAttribute('data-theme', "light");
		trans();
	}	
}

function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.minHeight = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();

toggle.addEventListener("change", switchThemes);
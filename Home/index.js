const dadInfoR = document.querySelector('.right');
const dadInfoL = document.querySelector('.left');
const dadInfo = [dadInfoR,dadInfoL];

let scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};  //Works like the debounce function for a monitor refresh rate of 60.
            															//Either does fancy new JS or a manual function for this effect

function loop() {	//This function is the one that triggers every function triggering every other, but perfomance is still kept via the scroll variable.
  dadInfo.forEach(function (element) { //Loops through Dad info components, may need to make arrays for each group on the page
    if (isElementInViewport(element)) { //Checks if element is visible
   		if(element.classList.value.includes('left')){ //Is it a left hidden or right hidden component?
   			 element.classList.remove('hidden-l'); 
   		}else{
   			element.classList.remove('hidden-r');
   		}
    } else {
		if(element.classList.value.includes('left')){
   			 element.classList.add('hidden-l'); 
   		}else{
   			element.classList.add('hidden-r');
   		}
    }
  });

  scroll(loop);
}

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect(); //Location of the element
  return ( //Does the fancy function of checking in regard to window height and element position whther it is visble currently.
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

loop(); //Initiates the functions calling each other
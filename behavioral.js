// Definition of the SVG object
let svg = document.querySelector("svg");

// Definition of the password object
let password = document.querySelector("#password");

// Definition of the smile object
let smile = document.querySelector("#smile");

// Definition of the eyes objects
let eyeLeft = document.querySelector("#eye-l");
let eyeRight = document.querySelector("#eye-r");

// Definition of the arms objects
let armLeft = document.querySelector("#arm-l");
let armRight = document.querySelector("#arm-r");

// Focus while typing the ID field
function updateEyes(e) {
  let movePos = e.target.value.length > 30 ? 13.33 : e.target.value.length / 2.15 ;
  eyeLeft.setAttribute("cy", 112);
  eyeRight.setAttribute("cy", 112);
  eyeLeft.setAttribute("cx", 96 + movePos);
  eyeRight.setAttribute("cx", 142 + movePos)
  if (e.target.value.length < 4) {
    smile.setAttribute("d", "M125,138 C 140,138 143.5,132 143.5,132 143.5,132 125,133 125,133 125,133 106.5,132 106.5,132 106.5,132 110,138 125,138 Z");
  } 
}

// Animations of the ID
id.addEventListener("focus", updateEyes);
id.addEventListener("keyup", updateEyes);
id.addEventListener("blur", resetEyes);

// When you leave a field, the eyes are reset
function resetEyes(e) {
  let eyeRight = document.querySelector("#eye-r");
  let eyeLeft = document.querySelector("#eye-l");
  eyeLeft.setAttribute("cy", 107);
  eyeRight.setAttribute("cy", 107);
  eyeLeft.setAttribute("cx", 102);
  eyeRight.setAttribute("cx", 148)
}

// Animation to minimize the placeholder
document.querySelectorAll("fieldset.with-placeholder input").forEach(function(el, idx) {
  el.addEventListener("focus", function() {
  this.parentNode.querySelector(".placeholder").classList.add("active");
  });
  el.addEventListener("blur", function() {
    if (this.value == "") {      this.parentNode.querySelector(".placeholder").classList.remove("active");
    }
  })
});

// Animation of the password (cover eyes)
password.addEventListener("focus", function(e) {
  svg.classList.add("arms-up");
  if (svg.classList.contains("focus")) { 
    updateEyes(e);
    armLeft.setAttribute("d", "M 118,178 C 64,236 49,195 86,106");
    armRight.setAttribute("d", "M 132,178 C 286,206 201,195 164,106");
  } else {
    armLeft.setAttribute("d", "M 118,178 C 64,196 59,145 110,95");
    armRight.setAttribute("d", "M 132,178 C 186,196 191,145 140,95");
  }
});
password.addEventListener("blur", function(e) {
  svg.classList.remove("arms-up");
  resetEyes(e);
  armLeft.setAttribute("d", "M 118,178 C 94,179 66,220 65,254");
  armRight.setAttribute("d", "M 132,178 C 156,179 184,220 185,254");
});
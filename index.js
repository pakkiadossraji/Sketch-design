// slider 1
let slideIndex = 0;
let timeoutId = null;
var slides = document.getElementsByClassName("slide-action");
const dots = document.getElementsByClassName("mac-buttons");

function showSlides(j) {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides, 3000); 
  
  if(j>=0){
    slides[j].style.display = "block";

  }
}
showSlides();
// slider 2
let slideIndex2 = 0;
let timeoutId2 = null;
var slides2 = document.getElementsByClassName("slide-action2");
const dots2 = document.getElementsByClassName("rotate-flex1");
function showSlides2(k) {
  for(let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
    dots2[i].classList.remove('active');
  }
  slideIndex2++;
  if(slideIndex2 > slides2.length) {
    slideIndex2 = 1
  }
  
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].classList.add('active');
   if(timeoutId2) {
      clearTimeout(timeoutId2);
   }
  timeoutId2 = setTimeout(showSlides2, 3000); 
  if(k>=0){
    slides2[k].style.display = "block";
    slides2[slideIndex2 - 1].style.display = "none";

  }
}
showSlides2();
// slider 3
let slideIndex3 = 0;
var timeoutId3 = null;
const slides3 = document.getElementsByClassName("slide-action3");
const dots3 = document.getElementsByClassName("slider3");
function showSlides3(l) {
  for(let i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
    dots3[i].classList.remove('active');
  }
  slideIndex3++;
  if(slideIndex3 > slides3.length) {
    slideIndex3 = 1
  }
  
  slides3[slideIndex3 - 1].style.display = "block";
  dots3[slideIndex3 - 1].classList.add('active');
   if(timeoutId3) {
      clearTimeout(timeoutId3);
   }
  timeoutId3 = setTimeout(showSlides3, 3000); 
  if(l>=0){
    slides3[l].style.display = "block";
    slides3[slideIndex3 - 1].style.display = "none";

  }
}
showSlides3();
// slider 4
let slideIndex4 = 0;
let timeoutId4 = null;
const slides4 = document.getElementsByClassName("slide-action4");
const dots4 = document.getElementsByClassName("slider4");
function showSlides4(m) {
  for(let i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
    dots4[i].classList.remove('active');
  }
  slideIndex4++;
  if(slideIndex4 > slides4.length) {
    slideIndex4 = 1
  }
  
  slides4[slideIndex4 - 1].style.display = "block";
  dots4[slideIndex4 - 1].classList.add('active');
   if(timeoutId4) {
      clearTimeout(timeoutId4);
   }
  timeoutId4 = setTimeout(showSlides4, 3000); 
  if(m>=0){
    slides4[m].style.display = "block";
    slides4[slideIndex4 - 1].style.display = "none";

  }
}
showSlides4();
// Slider 5
let slideIndex5 = 0;
let timeoutId5 = null;
const slides5 = document.getElementsByClassName("slide-main");
const dots5 = document.getElementsByClassName("mac-buttons2");
function showSlides5(j) {
  for(let i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
    dots5[i].classList.remove('active');
  }
  slideIndex5++;
  if(slideIndex5 > slides5.length) {
    slideIndex5 = 1
  }
  
  slides5[slideIndex5 - 1].style.display = "block";
  dots5[slideIndex5 - 1].classList.add('active');
   if(timeoutId5) {
      clearTimeout(timeoutId5);
   }
  timeoutId5 = setTimeout(showSlides5, 3000); 
  if(j>=0){
    slides5[j].style.display = "block";
    slides5[slideIndex5 - 1].style.display = "none";

  }
}
showSlides5();

// Slider 6
let slideIndex6 = 0;
let timeoutId6 = null;
const slides6 = document.getElementsByClassName("slide-action5");
const dots6 = document.getElementsByClassName("slider6");
function showSlides6(j) {
  for(let i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
    dots6[i].classList.remove('active');
  }
  slideIndex6++;
  if(slideIndex6 > slides6.length) {
    slideIndex6 = 1
  }
  
  slides6[slideIndex6 - 1].style.display = "block";
  dots6[slideIndex6 - 1].classList.add('active');
   if(timeoutId6) {
      clearTimeout(timeoutId6);
   }
  timeoutId6 = setTimeout(showSlides6, 3000); 
  if(j>=0){
    slides6[j].style.display = "block";
    slides6[slideIndex6 - 1].style.display = "none";

  }
}
showSlides6();


(function() {
var y,x,el,dy = 0,dx = 0,ok = false,z = 1000,d = document;
function down(e) {
    var tx,ty;
    if (!e) {e = window.event;}
    el = (typeof e.target != "undefined")?e.target:e.srcElement;
    if (el.tagName != "HTML"|"BODY" && el.lang != "dragThis") {
        el = (typeof el.parentNode != "undefined")?el.parentNode:el.parentElement;
    }
    if (el.lang == "dragThis") {
        el.style.opacity = '0.8';
        var a =  el.getBoundingClientRect();
        var bx = a.left,
        by = a.top;
        var posType = window.getComputedStyle(el,null).getPropertyValue("position");
        if (posType == 'relative') {
            tx = 0;
            ty = 0;
        }
        if (posType == 'absolute') {
            tx = bx + window.pageXOffset;
            ty = by + window.pageYOffset;
        }
        if (posType == 'fixed') {
            tx = bx;
            ty = by;
        }
        e.preventDefault();
        ok = true;
        el.style.zIndex = z++;
        dx = parseInt(el.style.left + tx, 10);
        dy = parseInt(el.style.top + ty, 10);
        x = e.clientX;
        y = e.clientY;
    }
}

function move(e) {
    if (!e) {e = window.event;}
    if (ok) {
        el.style.left = dx + e.clientX - x + "px";
        el.style.top  = dy + e.clientY - y + "px";
    }
}

function up() {
    ok = false;
    el.style.opacity = '1';
}

d.addEventListener('mousedown', down, false);
d.addEventListener('mousemove', move, false);
d.addEventListener('mouseup', up, false);
})();
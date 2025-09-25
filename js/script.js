$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
})


// GSAP COUNTER CODE 

const items = document.querySelectorAll(".skills-sets span");

gsap.from(items, {
  textContent: 0,
  duration: 6,
  ease: "power1.in",
  snap: { textContent: 1 },

});







const tll = gsap.timeline({
    paused: "true"
});
tll.to("#percent, #bar",{
    duration:.2,
    opacity: 0,
    zIndex: -1
});
tll.to("#preloader",{
    duration: .8,
    width: "0%"
});
tll.from(".loadbox",{
    duration: 1.5,
    y: "-150%"
},"-=.2");

var width = 1;
var bar = document.getElementById("barconfrm");
var id;
function move(){
    id = setInterval(frame,10);

}
function frame(){
    if(width>=100){
        clearInterval(id);
        tll.play();
    }
    else{
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
    }
}








var landing = gsap.timeline();

landing.to(".page-change",{
    duration: .8,
    width: "0%",
    delay: 1,
});

landing .from(".landing",{
    duration: .8,
    y: "-150%",

},"-=.2");





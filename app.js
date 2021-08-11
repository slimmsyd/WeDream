// Create TIMELIME


let tl = gsap.timeline({ defaults: {ease: 'power1.out'}});

tl.to(".text" ,{y:'5%', duration: 1, stagger: .5});
tl.to(".intro", { opacity: 0, duration: 1})
tl.to(".intro", {y: "100%"})
tl.from("#line", {duration:1,x:-200, opacity: 0 })
tl.from("#linedown", {duration: 1,  opacity: 0})


let ntl = new TimelineLite();
ntl.to(".word-section", {opacity:1, duration:5, })

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.word-section',
    triggerHook: "onEnter",

})
.setPin(".section2")
.setTween(ntl)
.addTo(controller)




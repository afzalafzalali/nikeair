gsap.to("#l2",{
    y:2000,
    duration:5,
    delay:1
})
gsap.to("#l3",{
    x:2000,
    duration:5,
    delay:1
})
var tl = gsap.timeline();

tl.to("#l1,#l11,#loader",{
    opacity:0,
    duration:3.5,
    delay:2
})
.from("#nav",{
    opacity:0,
    y:-20,
    duration:0.3,
})
.from("#text p",{
    opacity:0,
    x:-20,
    duration:0.5,
    
})
.from("#line1,#line2",{
    opacity:0,
    x:-20,
    duration:0.5,
    
})
.from("#blur",{
    opacity:0,
    x:200,
    duration:0.5,
    
})
.from("#side,#st",{
    opacity:0,
    x:200,
    duration:0.5,
    
})
.from("#back",{
    opacity:0,
    x:200,
    rotate:180,
    duration:0.5,
})
.from("#front",{
    opacity:0,
    x:200,
    rotate:-180,
    duration:0.5,
})
.from("#main2 h1",{
    opacity:0,
    scale:0,
    duration:0.5,
})
.from("#main2 h2",{
    opacity:0,
    scale:0,
    y:200,
    duration:0.5,
})
.from("#b1,#b2",{
    opacity:0,
    scale:0,
    duration:0.5,
})
.from("#i1,#i2,#navb",{
    opacity:0,
    scale:0,
    duration:0.5,
})

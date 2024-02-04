var t1 = gsap.timeline();

t1.to(".main",{
    textDecoration : `1px solid red underline`,
    lineHeight: "38px",
    duration :1 ,
    delay : 2,
})
t1.from(".main",{
    // rotate : "360",
    translateX : "10",
    duration : 1 ,
    delay : 1,
    transition : "ease-in-out" ,
    // scale : 2 ,
})
t1.to(".navbar",{
   filter :` blur(0)`,
   delay : 1
})
t1.from("img , .navi , #sign",{
    y:-100,
    duration :2,
})


t1.to("#top-h , #bottom-h",{
    translate : "-20%",
},"b");
t1.from("#top-h , #bottom-h",{
    opacity : 0,
    duration:2,
},"b");
t1.to(".top",{
    translateY : "-50%",
    top : 0,
    duration : 2,
    delay : 1 
},"a");
t1.to(".bottom",{
    translateY : "50%",
    bottom : 0,
    duration : 2,
    delay : 1 
},"a");

t1.to(".circle",{
    delay : 2,
    translateX : "67em",
    rotate : "360deg",
    duration : 0.7
})
t1.to(".sec",{
    opacity : 0,
    duration : 0
})
t1.to(".strip",{
    rotate : "360deg" ,
    translateX : "-48em" ,
    translateY: "-48px",
    border : "none",
    duration : 0.5
})




//Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top", 
    scrub:true, 
    pinSpacing: false 
  });
});

gsap.utils.toArray('.introcontainer').forEach(items=>{
    gsap.fromTo(items,{
        rotation:-1,
        opacity:0,
        y:100
    },{
        rotation:0,
        opacity:1,
        y:0,
        duration:0.5,
        delay:0.5,
        scrollTrigger:items
    })
})



ScrollTrigger.create({
  snap: 1 / 4 
});

gsap.utils.toArray('p').forEach(p=>{
    gsap.fromTo(p,{
        opacity:0,
        x:150,
        skewX:30
        
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:p,
        scrub: true

    })
})

gsap.utils.toArray('li').forEach(li=>{
    gsap.fromTo(li,{
        opacity:0,
        x:140,
        skewX:40
        
    },{
        opacity:0.9,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:li,
        scrub: true

    })
})

gsap.utils.toArray('i').forEach(p=>{
    gsap.fromTo(p,{
        opacity:0,
        x:140,
        skewX:40
        
    },{
        opacity:0.9,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:p,
        scrub: true

    })
})


//Mijn Javascript code.


gsap.to("header", 
    {x:700, scale: 1, duration:10, rotation: 360, backgroundColor: 'red', repeat: 1});

gsap.fromTo("p", 
    {x: 700},
    {x:0, scale: 1, duration:10, backgroundColor: 'blue', repeat: 1});

gsap.fromTo(".divOne", 
    {y:200},
    {y:0, scale: 1, duration:5, backgroundColor: 'gray', repeat: 1, ease: "bounce"});

gsap.fromTo(".divTwo", 
{y: -200},
{y:0, scale: 1, duration: 5, backgroundColor: 'yellow', repeat: 1, ease: "elastic"});

gsap.fromTo(".divThree", 
    {y: 200},
    {y:0, scale: 1, duration:5 , backgroundColor: 'orange', repeat: 1, ease: "expo"});


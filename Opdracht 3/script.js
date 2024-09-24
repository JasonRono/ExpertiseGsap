function animateMain() {
    let main_tl = gsap.timeline()
        .from("body", {opacity: 0, duration: 1})
        .from("div", {y: 500, stagger: 0.5, duration: 3.5, ease: "back"})
        .add(extraAnimate()); 
    return main_tl;
}

function extraAnimate() {
    let subAnimate = gsap.timeline({
        defaults: {
            duration: 3, 
            ease: "power2.inOut"
        }
    })

    .fromTo('.block3', 
        {
            display: 'none',  
            opacity: 0,        
            scale: 0.5        
        }, 
        {
            display: 'block', 
            opacity: 1,        
            scale: 1,          
            backgroundColor: 'orange'  
        }
    );

    return subAnimate; 
}


animateMain();

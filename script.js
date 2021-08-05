gsap.registerPlugin(ScrollTrigger);  	


window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

gsap.to("#day__container",{yPercent:-100,
                            scrollTrigger: {
                              trigger: "scrollelement",
                              start:"1700 top",
                              end: "+=10",
                              scrub: 2,
                              id: "day",
                            }
});

gsap.to("#sun", {
                  y:300, 
                  duration: 5, 
                
                  scrollTrigger: {
                                    trigger: ".scrollelement", 
                                    start: "1px top",
                                    end: "+=2000 100%",
                                    scrub: 4,
                                    //pin: true,
                                    //markers: true,
                                    id: "sun",
                                  }
                  });



                      


gsap.to("#cloud-2", {
                  x:2400, 
                  duration: 45, 
                  repeat:-1
                  });
                  




gsap.to("#cloud-3", {
  x:1200, 
  duration: 5, 
  scrollTrigger: {
                      trigger: ".scrollelement", 
                    start: "1px top",
                    end: "+=2000 100%",
                    scrub: 2,
                    //pin: true,
                    //markers: true,
                    id: "cloud-3",
                    //repeat:-1
                  }
  });

gsap.to("#cloud-4", {
  x:-1200, 
  duration: 5, 
  scrollTrigger: {
                      trigger: ".scrollelement", 
                    start: "1px top",
                    end: "+=2000 100%",
                    scrub: 2,
                    //pin: true,
                    //markers: true,
                    id: "cloud-4",
                    //repeat:-1
                  }
  });

gsap.to("#cloud-5", {
  xPercent:600, 
  duration: 5, 
  
  scrollTrigger: {
                      trigger: ".scrollelement", 
                    start: "1px top",
                    end: "+=2000 100%",
                    scrub: 2,
                    //pin: true,
                    //markers: true,
                    id: "cloud-5",
                    //repeat:-1
                  }
  });

gsap.to("#cloud-6", {
  xPercent:-600, 
  duration: 5, 
  scrollTrigger: {
                      trigger: ".scrollelement", 
                    start: "1px top",
                    end: "+=2000 100%",
                    scrub: 2,
                    //pin: true,
                    //markers: true,
                    id: "cloud-6",
                    //repeat:-1
                  }
  });


  gsap.to("#ground", {
    yPercent:20, 
    duration: 5, 
                      scrollTrigger: {
                      trigger: ".scrollelement", 
                      start: "1px top",
                      end: "+=1500 100%",
                      scrub: 2,
                      //pin: true,
                      //markers: true,
                      id: "ground",
                      //repeat:-1
                    }
    }); 
 
  gsap.from("#grass", {
    yPercent:50, 
    duration: 5, 
                      scrollTrigger: {
                      trigger: ".scrollelement", 
                      start: "1px top",
                      end: "+=1500 100%",
                      scrub: 2,
                      //pin: true,
                      //markers: true,
                      id: "grass",
                      //repeat:-1
                    }
    }); 

gsap.from("#grass-2", {
  y:425, 
  duration: 5, 
                    scrollTrigger: {
                    trigger: ".scrollelement", 
                    start: "200px top",
                    end: "+=1500 ",
                    scrub: 1,
                   // pin: true,
                    //markers: true,
                    id: "grass-2",
                    //repeat:-1
                  }
  });




  
  gsap.to(".screen__second", {
    yPercent:-100, 
    duration: 0.1, 
                      scrollTrigger: {
                      trigger: ".scrollelement", 
                      start: "1700px top",
                      end: "+=10",
                      scrub: 2,
                      //pin: true,
                      //markers: true,
                      id: "screen-2",
                      //repeat:-1
                    }
    });

    gsap.from("#stars", { opacity: 0,
                          scrollTrigger: {
                          trigger:".scrollelement",
                          start: "2000px top",
                          end: "+=2000",
                          scrub: 1,
    }} )

    gsap.fromTo("#moon2",{opacity:0}, {opacity:1, scale: 2, 
                        scrollTrigger:{
                          trigger:".scrollelement",
                          start: "2000px top",
                          end: "+=2000",
                          scrub: 1,
    }});



gsap.to("#jet", {x:400, y:-10, duration: 4, 
                  scrollTrigger: {
                    trigger:".scrollelement",
                    start: "3000px top",
                    end: "+=1300",
                    scrub: 3,
                    onEnterBack: function() { gsap.to("#jet", { scaleX: -1, rotation: -15 }) },
                    onEnter: function() { gsap.to("#jet", { scaleX: 1, rotation: 0 }) },

}});
/*
let grad = gsap.timeline();
 ScrollTrigger.create({
     animation: grad,
     trigger: ".scrollelement",
     start: "2000 top",
     end: "3900 100%",
     scrub: 1,
 });
grad.to("#grad-1 stop:nth-child(1)", { attr: { "stop-color": "#451c53" } }, 0)
grad.to("#grad-1 stop:nth-child(2)", { attr: { "stop-color": "#7b2525" } }, 0)*/

//gsap.set("#grad-1", {attr:{"width":"2000", ""}})


gsap.to("#sun-r1", {rotation: 360, duration: 30, repeat:-1, ease:"none" });

gsap.from("#home__container", {yPercent:100, 
                              scrollTrigger:{
                                trigger:".scrollelement",
                                start: "2500px top",
                                end: "+=300",
                                scrub: 3,   
                              }
});

gsap.from("#light", {opacity:0, duration: 1,
  scrollTrigger:{
    trigger:".scrollelement",
    start: "3000px top",
    end: "+=300",
    scrub: 1,   
  }
});


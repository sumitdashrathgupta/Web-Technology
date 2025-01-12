// Event Propagation:
// Event propagr that discript how to event prpgte thru dom tree 
// to actb it and what hapeens after than blow than the tree phas in pri GeolocationPosition
// 1) capturing phash
// the event is in capting if third argument is true addEventListener method
// Capring phash befor the target phase 
// 2)Target phas
// The event is in target phash wen you perfor the action spacthat that html
// blow that the target will ectting if third agument is true or falue in addEventListener method 
// Write a bubbling phash 
// The event is bloing face is third argument is falue in addEventListener or if three a grgument also next line 

// bubblig after the terget phas

// Event.Event phs => This propert if event is caupting two in bullin to in 



let gp = document.querySelector('.gp')
let p = document.querySelector('.p')
let c = document.querySelector('.c')

let phase = [null, "capture", "target"];
document.addEventListener('clicl', (e) => {
    // console.log(phase[e.eventPhase]);
    console.log("doucment clicked");
})

gp.addEventListener('click', (e) => {
    // console.log(phase[e.eventPhase]);
    console.log("Gp clicked");
})

p.addEventListener('click', (e) => {
    // console.log(phase[e.eventPhase]);
    console.log("p clicked");
}, { capture: false })

c.addEventListener('click', (e) => {
    // console.log(phase[e.eventPhase]);
    console.log("child clicked -1");
    // e.stopPropagation();
    // e.stopImmediatePropagation();
}, true)

c.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    e.stopPropagation();
    console.log("click chid-2");
}, true)

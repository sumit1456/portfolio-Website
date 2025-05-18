let vid1 = document.getElementById("p-video1");
let vid2 = document.getElementById("p-video2");
let vid3 = document.getElementById("p-video3");
const sign = document.querySelector(".hover-sign");


const vidList = [vid1, vid2, vid3];

vidList.forEach((video)=>{
    video.addEventListener('mouseover', ()=>{
        video.play();
        sign.classList.add("hover-active");
        
    })

     video.addEventListener('mouseout', ()=>{
        video.pause();
        video.currentTime=0;
        sign.classList.remove('hover-active');
    })
})
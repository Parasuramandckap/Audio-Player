// all buttion and audio tag 
let audioSrc = document.querySelector("audio")
let playtButton = document.querySelector("#play")
let inputRange = document.querySelector("input")
let next_song = document.querySelector("#next-song")
let forward = document.querySelector("#forward")
let backward = document.querySelector("#backward")
let songName = document.querySelector("#song-name")
let Artist = document.querySelector("#artist")
let currenTime = document.querySelector(".current")
let duration = document.querySelector(".duration")
let image = document.querySelector(".image")
let slide = document.querySelector("#slide")
let pervious = document.querySelector("#perivious-song")

//console.log(currenTime)
// array object store songs
let Songs = [{
    id:0,
    artist: "yuvan",
    songName: "kaadal_Endral",
    Music: "./audio/Kaadal_Endral.mp3",
    img : "./img/yuva.jpeg"
},
{
    id:1,
    artist: "AR",
    songName: "Ennodu-Nee-Irundhal",
    Music: "./audio/Ennodu-Nee-Irundhal.mp3",
    img : "./img/ar.jpeg"
},
{
    id:2,
    artist: "Harris",
    songName: "Muthal Kanave Bgm - Tamil",
    Music: "./audio/Muthal Kanave Bgm - Tamil.mp3",
    img : "./img/harris.jpg"
}
]

//onloadedmetadata means assign the audio duration input range
audioSrc.onloadedmetadata = function () {
    inputRange.max = audioSrc.duration;

}
window.addEventListener("DOMContentLoaded",()=>{
    audioSrc.src = Songs[count].Music;
    songName.innerText = Songs[count].songName;
    Artist.innerText = Songs[count].artist
    image.src = Songs[count].img
    slide.innerText = Songs[count].songName
})

//Next song change functions
let count = 0;
next_song.addEventListener("click",function next_song(e) {
    count++
    if(count == 3){
        alert("the playlist has been ended")
    }
    if(count == 3){
        count =2;
    }

    console.log(count)
    audioSrc.src = Songs[count].Music;
    songName.innerText = Songs[count].songName;
    Artist.innerText = Songs[count].artist
    image.src = Songs[count].img
    slide.innerText = Songs[count].songName
    audioSrc.play();
    playtButton.classList.add("fa-pause")
    playtButton.classList.remove("fa-play")
    image.classList.add("rotate")
    display("song changed")
    
    setInterval(() => {
        inputRange.value = audioSrc.currentTime;
        track()
    }, 500)

    //check song length
 
})
//pervious song
pervious.addEventListener("click",function next_song(e) {
    count--
    if(count == -1){
        alert("No Privious song")
    }
    console.log(count)
    audioSrc.src = Songs[count].Music;
    songName.innerText = Songs[count].songName;
    Artist.innerText = Songs[count].artist
    image.src = Songs[count].img
    slide.innerText = Songs[count].songName
    audioSrc.play();
    playtButton.classList.add("fa-pause")
    playtButton.classList.remove("fa-play")
    image.classList.add("rotate")
    display("song changed")
    
    setInterval(() => {
        inputRange.value = audioSrc.currentTime;
        track()
    }, 500)

})


//play button functionality
playtButton.addEventListener("click", function play_song(e){
    if (playtButton.classList.contains("fa-pause")) {
        audioSrc.pause()
        playtButton.classList.remove("fa-pause")
        playtButton.classList.add("fa-play")
         image.classList.remove("rotate")
        display("song pause")
    }
    else {
        audioSrc.play()
        playtButton.classList.add("fa-pause")
        playtButton.classList.remove("fa-play")
        //console.log(currenTime)
        image.classList.add("rotate")
        display("song play")
  
    }

    //setinterval calculate
    setInterval(() => {
        inputRange.value = audioSrc.currentTime;
        track()
    }, 500)
})

//track seconds
function track(){
    let currenntMintues = Math.floor(audioSrc.currentTime / 60)
   let  curretSeconds = Math.floor(audioSrc.currentTime - (currenntMintues * 60))

    let durationMintues = Math.floor(audioSrc.duration / 60)
    let durationSeconds = Math.floor(audioSrc.duration - (durationMintues * 60))

    if(curretSeconds < 10){
        curretSeconds = "0" + curretSeconds
        currenntMintues = "0" + currenntMintues
    }
    if(curretSeconds >9){
        currenntMintues = "0" + currenntMintues
    }
    //assign current time for audio play
    currenTime.innerText = `${currenntMintues}:${curretSeconds}`;


    //assign duration time for audio play
    duration.innerText = `${durationMintues}:${durationSeconds}`;

    

}

// input range value assign to audio currenTime;
inputRange.addEventListener("input", function input_track(){
    audioSrc.play();
    audioSrc.currentTime = inputRange.value
    playtButton.classList.remove("fa-play")
    playtButton.classList.add("fa-pause")
    image.classList.add("rotate")
})

//forward functionality
forward.addEventListener("click",()=>{
    audioSrc.currentTime =  audioSrc.currentTime+10;
    display("song forward")
})

//backward functionality

backward.addEventListener("click",()=>{
    audioSrc.currentTime =  audioSrc.currentTime-10;
    display("song backward")
})


let playList = document.querySelector(".play-list")

playList.addEventListener("click",()=>{
    let translate = document.querySelector(".content")
    //console.log(translate)
    translate.classList.add("contentshow")
 
})

//mute and unmute functionality
let mute =  document.querySelector(".mute")
let alert_message = document.querySelector("#alert-msg")
mute.addEventListener("click",()=>{
    audioSrc.volume = 0;
    display("song muted")
})

//setimeout alert mesage
function display(message){
    alert_message.innerText = message;
    alert_message.style.color = "white"
    window.setTimeout(()=>{
        alert_message.innerText = " "
    },1000)
}

//unmaute funtionality
let unmute = document.querySelector(".sound")

unmute.addEventListener("click",()=>{
    audioSrc.volume =1;
    display("song unmuted")
})

//all songs
let ul = document.querySelector(".all-song")
for(let i=0;i<Songs.length;i++){
    let li = document.createElement("li")
    li.setAttribute("id",i)
    li.innerText = Songs[i].songName
    ul.appendChild(li)


}
//all song visible functionality
let playlistIcon = document.querySelector(".play-list")
let Allsongs = document.querySelector(".list")
playlistIcon.addEventListener("click",()=>{
    Allsongs.classList.toggle("active")
})


let li = document.querySelectorAll("li")

for(let i=0;i<li.length;i++){
   li[i].addEventListener("click",(e)=>{

    for(let i=0;i<Songs.length;i++){

        if(e.target.id == Songs[i].id){
            playtButton.classList.add("fa-pause")
            playtButton.classList.remove("fa-play")
            audioSrc.src = Songs[i].Music
            songName.innerText = Songs[i].songName;
            Artist.innerText = Songs[i].artist
            image.src = Songs[i].img
            image.classList.add("rotate")
            audioSrc.play()
            track()
            setInterval(() => {
                inputRange.value = audioSrc.currentTime;
                track()
            }, 500)
            
        }
    }
   })
}
 

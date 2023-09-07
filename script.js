
const buttons = document.querySelectorAll('.piano_button_section button');
const sounds = ["1.wav","2.wav","3.wav","4.wav","5.wav","6.wav","7.wav","8.wav","9.wav","10.wav","11.wav","12.wav","13.wav","14.wav","15.wav","16.wav","17.wav"];
let counter = 0;
buttons.forEach((item)=>{
   item.setAttribute("data-src",sounds[counter]);
   counter++;
})


const piano_parent = document.getElementById("piano_parent");
let audio_parent = document.getElementById("audio");
let audio = document.getElementById("audio-src")
const piano_folder = "Piano_key_sounds"
piano_parent.onclick = (e)=>{ 
   let fileName = e.target.getAttribute("data-src");
   audio.src = piano_folder+"/"+fileName
   audio_parent.autoplay = true;
   audio_parent.load();
 }





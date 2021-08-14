// 'data-key' is a custom attribute..that means we can edit this attribute by js.
// data-key = 'number' dia keyboard er kono akta button er code bujai...
// keyboard er kono akta button ke <kbd> tag er modde rakle better hoi...

// keyboard er kono akta button press korle kewdown event ta kaj kore...
// here window is an object...


window.addEventListener("keydown", playSound); // 'keydown' event er maddome keyboard er button er sate window r connection dilam...


function playSound(event){          // here event is an parameter // jokon keydown event ta kaj korve tokon "event" parameter er maddome keydown event er onak gula information pabo. ter modde akta information holo keyboard er button er keycode.
  let keyCode = event.keyCode; // computer button cinbe na code cinbe.
  
  let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  
  if (!audio) return; // jodi audio na take tahole kono kico return korbe na..
  audio.currentTime = 0; // kono akta button jotober click korbo totober audio play hove... audio = variable name.
  audio.play();  // jodi audio take tahole audio return korbe...
  
  let key = document.querySelector(`.key[data-key="${keyCode}"]`); // je button ta click korbo sodo sai button ta animation hove.
  
  // classList.add ai method er maddome amra akta class ke add korte pari...keyboard er button click korle akta animation hove airokom kono CSS effect amr jana nai. ti js er maddome kaj ta korlam...
  key.classList.add("playing"); // classList.add ai method er maddome html class 'key' er modde css class 'playing' ta add korlam js er maddome...
  
  }







 // keyboard er akta button click korle animation asbe but animation ta sate sate cole jaite hove..ter jonno ja ja korte hove.
let keys = document.querySelectorAll(".key"); // 1st e sob gula button ke select korte hove.
// then foreach loop er modde ES6-arrofunction apply korte hove...

// jokon akta transition er ses hoi tokon 'transitionend' event ta kaj kore...

// keys.forEach(keyss => console.log(keyss)) // console.log() korle amra sob div gula pabo...

keys.forEach(keyss => keyss.addEventListener("transitionend", removeClass)); // keyss 1ta parameter nilam and parameter er kaj ta add korlam. 

function removeClass(event) {   // 'event' parameter er maddome 'transitionend' event ter information dekabe... 
  if (event.propertyName == "transform") {  // onak gula information pabo ter modde akta holo "propertyName = transform" 
    this.classList.remove("playing");  // aikane 'transform' nam er kono property pele 'playing' class ta remove hoia jabe.
  } return; // jodi transform nam er kono property na pai tahole return;
};




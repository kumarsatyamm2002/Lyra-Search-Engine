let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

// Speak Function
function speak(text) {
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB" 
    window.speechSynthesis.speak(text_speak)
}

// Wish Function (Greeting)
function wishMe() {
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Satyam")
    } else if (hours>=12 && hours <16) {
        speak("Good Afternoon Satyam")
    } else {
        speak("Good Evening Satyam")
    }
}

// Speech Recognition Setup
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

// Button Click → Start Recognition
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

// Take Command Function
function takeCommand(message) {
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello Satyam, what can I help you with?")
    } 
    else if (message.includes("who are you")) {
        speak("I am a AI virtual assistant, created by Satyam Kumar Mishra.")
    } 
    else if (message.includes("open youtube")) {
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    } 
    else if (message.includes("open google")) {
        speak("opening google...")
        window.open("https://google.com/","_blank")
    } 
    else if (message.includes("open facebook")) {
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    } 
    else if (message.includes("open instagram")) {
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if (message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{

        let searchQuery = message.replace("lyra", "").trim();

        speak("Searching Google for " + searchQuery);
         
        window.open('https://www.google.com/search?q=${encodeURIComponent(searchQuery)}',"_blank"
                    );
    }
}
   

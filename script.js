
// loading page start
window.addEventListener("load", () => {
   
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
        //remove loader
        loader.classList.add("loader--no-display");

    });
  });
//   loading page end



const themes = [
    {
      background: "#f0f0f0",
      color: "#000",
      primaryColor: "#fff"
  },
  {
      background: "#121212",
      color: "#fff",
      primaryColor: "#000"
  },
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
    },
 
  ];
  
  const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
  };
  
  const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
  };
  
  displayThemeButtons();

//   Game functions

const letters = "abcdefghijklmnopqrstuvwxyz"

const AllLetters = Array.from(letters)


const lettersContainer = document.querySelector(".letters")

AllLetters.forEach(letter =>{
   
    let span = document.createElement("span")

    let theletter = document.createTextNode(letter)

    span.appendChild(theletter)

    span.className = "lettre-box"

    lettersContainer.appendChild(span)
})



const words = {
    programming: ["HTML" , "CSS" , "JavaScript" , "Dart" , "SQL"  , "Python" , "Java" , "Ruby" , "Kotlin" , "PHP"],

    celebrities:[ "Mohamed Salah" , "Wegz" , "Ahmed Mekky" , "Ahmed Helmy" , "Amr Diab" , "lege cy" ,"pedri" , "Messi" , "xavi" ],

    Movies:["Up" , "Interstellar" , "God Father" , "coco" , "inception" , "whiplash" , "Fight Club", ,  "Goodfellas" , "Pulp Fiction" , "City of God" ],

    The_Best:["Amr Elsherbiny"] , 

    Countries:["Egypt" , "Palestine" , "Qatar" , "USA" , "Canada" , "Tunis" , "Oman" , "France" , "Germany" , "Spain" , "Mexico" , "Brazil" , "Chile" , "Australia" , "Colombia" , "Peru"]
}

   let status = false;
const Keys = Object.keys(words)

const randomKeyNumber = Math.floor(Math.random() * Keys.length)

const KeyName = Keys[randomKeyNumber]

const KeyWords = words[KeyName]

const KeyWordsNumber = Math.floor(Math.random() * KeyWords.length)

const wordValue = KeyWords[KeyWordsNumber]

document.querySelector(".Category").innerHTML = KeyName
   
let trueAttempts = 0;
let wrongAttempts = 0;

let draw = document.querySelector(".hangman")

const LetterGuesContainer = document.querySelector(".letters-guess")



const LettersOfWord = Array.from(wordValue)

console.log(LettersOfWord)



LettersOfWord.forEach(letter=>{
    const emptySpan = document.createElement("span")

    if (letter === " " ) {
        emptySpan.className = "with-space"
    }

    LetterGuesContainer.appendChild(emptySpan)
});


 
document.addEventListener( "click" , (e) =>{
    let Status = false;
    if (e.target.className === "lettre-box") {
        e.target.classList.add('clicked')
        const GuessSpans = document.querySelectorAll(".letters-guess span")
        const clickedLetter = e.target.innerHTML.toLowerCase()
        const chosenword = Array.from(wordValue.toLowerCase())

        chosenword.forEach((wordLetter , Wordindex) =>{
               
            if (clickedLetter == wordLetter) {
                
                
                GuessSpans.forEach((span , spansIndex)=>{
                    
                    if (Wordindex === spansIndex ) {
                        span.innerHTML = wordLetter
                    }
                })
                Status = true;
            }
           
        })

        if (Status !== true) {
            wrongAttempts++;

            draw.classList.add(`wrong-${wrongAttempts}`)

            document.getElementById("fail").play()

             if (wrongAttempts === 8) {
                
                EndGame();

                lettersContainer.classList.add("ended")

             }


        }else{

            document.getElementById("success").play();
            win();
        }
       
        
    }  
} )

function EndGame() {
    let divv = document.createElement("div")

    let divText = document.createTextNode(`Game Over , The Word Is ${wordValue}`)
    
    divv.appendChild(divText)

    divv.className="pop"

    document.body.appendChild(divv)
    divv.appendChild(reloadd);
}


function win() {
    const guessedWord = document.querySelectorAll(".letters-guess span");
    let fullGuessedWord = "";
    let wordWithoutSpaces = "";

    guessedWord.forEach((span) => {
        fullGuessedWord += span.innerHTML.toLowerCase().trim();
        if (span.innerHTML !== " ") {
            wordWithoutSpaces += span.innerHTML.toLowerCase();
        }
    });

    // Compare the guessed word without spaces to the original word
    if (wordWithoutSpaces === LettersOfWord.join("").toLowerCase().replace(/ /g, '')) {
        let divv = document.createElement("div");
        let divText = document.createTextNode("Congratulations! You've won!");
        divv.appendChild(divText);
        divv.className = "pop2";
        document.body.appendChild(divv);
        lettersContainer.classList.add("ended");
        divv.appendChild(reloadd);
    }
}




const reloadd = document.getElementById("reloaddd")




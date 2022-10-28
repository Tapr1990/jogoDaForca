document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelectorAll("form");
    const gameArea = document.getElementById("gameArea");
    

    const words = ["Portugal", "Abacate", "Aldeia", "Alforreca",
    "Portalegre", "Oftamologista"];

    let chosenWord;
    let attempts;
    let correctLetters;

    function init() {
        chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

        

        attempts = 6;
        correctLetters = 0;
        document.getElementById("attemptsleft").textContent = attempts;

        gameArea.innerHTML = "";

        for(let i = 0; i < chosenWord.length; i++) {
            
            gameArea.appendChild(document.createElement("span"));
            gameArea.lastElementChild.textContent = " _ ";
        }
    }

    init();

    form.addEventListener("submit", function(event) {
    
        const letterPicked = form.letter.value.toUpperCase();
        const spans = document.querySelectorAll("#gameArea span");

      
        if(chosenWord.indexOf(letterPicked) >= 0) {
            
            for(let i = 0; i < chosenWord.length; i++) {
                console.log("a verificar a letra " + chosenWord[i]);
             
                if(letterPicked == chosenWord[i]) {
                    console.log("Bingo! Aletra está ma posição " + i);
                 
                    spans[i].textContent = letterPicked;
                    correctLetters++;
                }
            }
        }
        else {
            attempts--;
            document.getElementById("attemptsleft").textContent = attempts;

            if(attempts < 1) {
                alert("Game Over");
               
                init();

            }
        }
        if(correctLetters == chosenWord.length) {
            alert("Parabéns, ganhou!!!");
            init();
        }

        form.letter.value = "";

        event.preventDefault();
    });
});
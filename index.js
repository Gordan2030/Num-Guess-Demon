let numbers = [];
let ph 

let playing = false;
let guessed = [];

document.getElementById("sub").onclick = function() {
    numbers = []
    for (let i = 0; i < 4; i++) {
        ph = Math.floor(Math.random() * 9) + 1
    
        while (numbers.includes(ph)) ph = Math.floor(Math.random() * 9) + 1
    
        numbers.push(ph)

    }

    playing = true

    while(playing) {
        let correct = 0;
        let incor = 0;
        let attempts = 0;
        attempts++;

        guessed = window.prompt("Enter guess(type 'give up' if you give up): ")

        if (guessed == "give up") {
            window.alert(`Answer: ${numbers}`)
            playing = false
        }

        guessed = [Number(guessed.slice(0, 1)), Number(guessed.slice(1, 2)), Number(guessed.slice(2, 3)), Number(guessed.slice(3, 4))]
    
        for(let i = 0; i < 4; i++) {
            if (guessed[i] == numbers[i]) correct++;
            if (numbers.includes(guessed[i]) && numbers[i] != guessed[i]) incor++;
            console.log(`${guessed[i] == numbers[i]}, ${numbers.includes(guessed[i]) && numbers[i] != guessed[i]}`)
            
        }

        window.alert(`${correct}A${incor}B`)

        console.log(numbers)

        if (correct == 4) {
            window.alert(`You win, remenber to see the credits. (You also took ${attempts} attempts🏆)`)
            playing = false
        }
    }

}


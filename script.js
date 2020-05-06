//#1

//this was my first attempt
//I know the numbers don't work exactly as expected, but the functionality is pretty close to what is required

let buttonContainer = document.querySelector(".container");
let totalP = document.querySelector(".total");
let total = 0;
let limeCola = 2.00;
let saltedPeanuts = 3.00;
let chocolateBar = 4.00;
let fruitGummies = 6.00;

buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("button") && event.target.classList.contains("Lime-Cola"))
        total += limeCola;
    else if (event.target.classList.contains("button") && event.target.classList.contains("Salted-Peanuts")) {
        total += saltedPeanuts;
    } else if (event.target.classList.contains("button") && event.target.classList.contains("Chocolate-Bar")) {
        total += chocolateBar;
    } else {
        total += fruitGummies;
    }
    totalP.innerText = `Total: ${total}`;
});


//better way
//I didn't write this, I just copied how to do it after the fact
//I would needd to come back to this and look at how this was done compaared to mine 

//let total = document.queryselector(".total")
// buttonContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("button")) {
//         let amount = Number(event.target.getAttribute("data-amount"));
//         console.log(amount);
//         currentTotal += amount;
//         total.innerText = `Total: ${currentTotal.toFixed(2)}`
//     }
// }


//#2

//I got a lot of this on my own, but it we helpful to listen and work with the class 
//when Mitch was working with the class at the end of the day. I am fine with getting the data from the form
//I had trouble trying to get the for loop logic set up. The loop is easy for me, just the logic I needed to think more about

let coinForm = document.querySelector(".coinForm");
let coinContainer = document.querySelector(".coin-container")
coinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(coinForm);
    let number = data.get("count");
    let coin = data.get("coinType");
    console.log(number, coin);
    for (let i = 0; i < number; i++) {
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin-div")
        coinDiv.innerText = coin;
        coinContainer.append(coinDiv);
    }
    coinForm.reset();
});

coinContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("coin-div")) {
        event.target.remove();
    }
});

//#3
//Overall, I think it meets the "requirements" but I think this can be more efficient
//Unsure how to do that right now, but seems like I am repeating myself a bit

let lightbulb = document.querySelector(".lightbulb");
let onButton = document.querySelector(".on")
let offButton = document.querySelector(".off")
let toggleButton = document.querySelector(".toggle")
let endButton = document.querySelector(".end")


onButton.addEventListener("click", () => {
    lightbulb.style.backgroundColor = "lightgrey";
});

offButton.addEventListener("click", () => {
    lightbulb.style.backgroundColor = "darkgrey";
});

toggleButton.addEventListener("click", () => {
    if (lightbulb.style.backgroundColor === "lightgrey") {
        lightbulb.style.backgroundColor = "darkgrey";
    }
    else {
        lightbulb.style.backgroundColor = "lightgrey";
    }
});

//need to think aboout how to make this more efficient
endButton.addEventListener("click", () => {
    lightbulb.remove()
    onButton.disabled = true;
    offButton.disabled = true;
    toggleButton.disabled = true;
    endButton.disabled = true;
});


// OPGAVE 2: strict mode skal komme som første linje i scriptet
"use strict";

// Funktion erklæring
function updateBackground() {
    const width = window.innerWidth;

    // Eksisterende betingelser (uændrede)
    if (width < 640) {
        document.body.style.background = "purple";
    }
    else if (width < 760) {
        document.body.style.background = "yellow";
    }

    // OPGAVE 3: Hvis bredden er mindre end 900px → blå baggrund
    else if (width < 900) {
        document.body.style.background = "blue";
    }

    // OPGAVE 4: Hvis bredden er mindre end 1100px → rød baggrund
    else if (width < 1100) {
        document.body.style.background = "red";
    }

    // OPGAVE 5: Hvis bredden er mindre end 1300px → grøn baggrund
    else if (width < 1300) {
        document.body.style.background = "green";
    }

    else {
        document.body.style.background = "lightgray";
    }
}

// Kør ved load
updateBackground();

// Kør igen når vinduet ændres
window.addEventListener("resize", updateBackground);

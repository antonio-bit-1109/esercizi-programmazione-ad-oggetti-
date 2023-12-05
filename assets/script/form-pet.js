const savedAnimals = localStorage.getItem("arrAnimals");
const animalsArr = savedAnimals ? JSON.parse(savedAnimals) : [];

class Pet {
    constructor(petName, padrone, specie, temperamento) {
        this.petName = petName;
        this.padrone = padrone;
        this.specie = specie;
        this.temperamento = temperamento;
    }

    sameOwner(otherowner) {
        if (this.padrone === otherowner.padrone) {
            return true;
        } else {
            return false;
        }
    }
}

const labrador = new Pet("bomboletta", "marcolino", " labrador", "giocoso");
const bassotto = new Pet("amelie", "lorenza", "bassotto", "furia");
const pitbull = new Pet("bracco", "lorenza", "pitbull", "mollica di pane ");

console.log(labrador);
console.log(bassotto);
console.log(bassotto.sameOwner(labrador));
console.log(bassotto.sameOwner(pitbull));
console.log(pitbull.sameOwner(bassotto));

window.onload = () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        creationPetCard();
    });

    if (animalsArr.length > 0) {
        console.log(animalsArr);
        animalsArr.forEach((animal) => {
            const row = document.getElementById("cardRow");
            const col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
            const { petName, padrone, specie, temperamento } = animal;
            creazioneTemplateLiterals(col, petName, padrone, specie, temperamento);
        });
    }
};

const creationPetCard = () => {
    const petName = document.getElementById("nome-pet");
    const petOwner = document.getElementById("padrone-pet");
    const petSpecies = document.getElementById("specie-pet");
    const temperamento = document.getElementById("temperamento-pet");

    const nomePet = petName.value;
    const padronePet = petOwner.value;
    const tipoAnimale = petSpecies.value;
    const carattere = temperamento.value;

    const row = document.getElementById("cardRow");
    const col = document.createElement("div");
    col.classList.add("col");

    row.appendChild(col);

    const animale = new Pet(nomePet, padronePet, tipoAnimale, carattere);
    console.log(animale);

    animalsArr.push(animale);
    localStorage.setItem("arrAnimals", JSON.stringify(animalsArr));

    creazioneTemplateLiterals(col, nomePet, padronePet, tipoAnimale, carattere);

    petName.value = "";
    petOwner.value = "";
    petSpecies.value = "";
    temperamento.value = "";
};

/* parametri crazione template literals  */

const creazioneTemplateLiterals = (elem, par1, par2, par3, par4) => {
    elem.innerHTML += `
    <div class="card" >
    
        <div class="card-body">
            <img id="immagine" src="" alt="animale">
            <h5 class="card-title">${par1}</h5>
            <h5 class="card-title">${par2}</h5>
            <h5 class="card-title">${par3}</h5>
            <h5 class="card-title">${par4}</h5>
        </div>
    </div>
    `;

    const nomeImg = document.getElementById("immagine");

    if (
        nomeImg.getAttribute("src") === "./assets/animals-img/dog.webp" ||
        nomeImg.getAttribute("src") === "./assets/animals-img/gatto.webp"
    ) {
        caricaimmagine();
    } else {
        return;
    }
};

/* caricare img se il src corrisponde ??  */
const caricaimmagine = () => {};

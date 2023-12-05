/* CLASSE USER */

class User {
    constructor(firstname, lastname, age, location, randomSkillOne, randomSkillTwo) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.location = location;
        this.skills = { skill1: randomSkillOne, skill2: randomSkillTwo };
    }

    /* METODO 1 USER  */

    presentazione() {
        return `ciao sono ${this.firstname} e ho ${this.age} anni , so fare molte cose, ma in particolare mi piace ${this.skills.skill1} e ${this.skills.skill2}`;
    }

    /* METODO 2 USER  */

    compareAge(otherUser) {
        return this.age > otherUser.age
            ? `${this.firstname} è più vecchio di ${otherUser.firstname}`
            : ` ${otherUser.firstname} è più vecchio di ${this.firstname} `;
    }

    /* metodo same hobby ?? */
    sameHobby(otheruserSkill) {
        return this.skills.skill1 === otheruserSkill.skills.skill1
            ? `sia ad ${this.firstname} che ${otheruserSkill.firstname} piace ${this.skills.skill1} che coincidenza!`
            : ` ${this.firstname} e ${otheruserSkill.firstname}  non hanno hobby in comune! `;
    }
}

/* CLASSE USERPLAYER ESTENSIONE DI USER  */
class UserPlayer extends User {
    constructor(firstname, lastname, age, location, randomSkillOne, randomSkillTwo, videogamer) {
        super(firstname, lastname, age, location, randomSkillOne, randomSkillTwo);

        this.videogamer = videogamer;
    }
}

/* CLASSE USERPROVA  */
class UserProva {
    constructor(firstname, lastname, age, location, randomSkillOne, randomSkillTwo) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.location = location;
        this.skills = { skill1: randomSkillOne, skill2: randomSkillTwo };
    }
}

const antonio = new User("antonio", "rizzuti", "28", "roma", "acchiappare le Mosche", "cucinare");
const filippo = new User(
    "filippo",
    "pincopallino",
    99,
    "Viterbo",
    "svuotare scatoloni",
    "prendere a calci i pali della luce"
);

const enrico = new UserProva("enrico", "bianchi", "45", "salerno", "giocare a carte", "giocare a MW2");
console.log(enrico);

antonio.male = true;
antonio.height = 180;

filippo.male = true;

console.log(antonio);
console.log(filippo);
console.log(antonio.presentazione());
console.log(filippo.presentazione());

const massimino = new UserPlayer("massimino", "rossi", "22", "milano", "acchiappare le Mosche", "dormire", " true");
/* console.log(Massimino.compareAge()); */

console.log(massimino.compareAge(filippo));
console.log(antonio.sameHobby(massimino));
console.log(filippo.sameHobby(antonio));

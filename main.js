//objeto
const hero = {
    name: "Thor",
    team: "Vingadores",
    power: 98,
    weapons: ["Stormbreaker", "Mjolnir"],
    origin: { planet: "Asgard" } 
}

// lendo
hero.name   // notação de ponto
console.log(hero.name);

hero["team"] // notação de colchetes
console.log(hero["team"]);

hero.origin.planet // obj dentro de obj
console.log(hero.origin.planet);

hero.weapons[0] // array dentro do obj
console.log(hero.weapons[0]);

const key = "power" // colchetes aceitam variável
hero[key]

hero.age // undefined -> não existe
console.log(hero.age)

// Alterando, adicionando e removendo

hero.power = 99
console.log(hero);

hero.nick = "Deus do Trovão"
console.log(hero);

delete hero.nickname
console.log(hero);

// Percorrendo um objeto
for (const prop in hero) {
    //           chave: valor
    console.log(`${prop}:`, hero[prop]); // prop são as chaves   
}

Object.keys(hero) // lista de chaves
Object.values(hero) //lista de valores

//Desestruturação
const { name, team } = hero
console.log(name, team);


// método
const villain = {
    name: "Doutor Destino",
    power: 500,
    attack(target) {
        return `${this.name} atacou ${target}`
    },
    powerUp(amount) {
        this.power += amount
        return this.power
    }
}

console.log(villain.attack("Thor"))
console.log(villain.powerUp(50))

// referência x cópia
const ref = hero

ref.power = 1

console.log(hero.power);
.
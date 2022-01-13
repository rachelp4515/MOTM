

const charDisplay = document.getElementById('charList')
const charName = document.getElementById('charName')
const charDesc = document.getElementById('charDesc')
const closebtn = document.querySelector(".hidden button")
const hidden = document.querySelector('.hidden')
console.log(charDesc)
console.log(chars)
for (let i = 0; i < chars.length; i++){
    const char = chars[i]
    createCharDiv(charDisplay, char)
}

function createCharDiv(parent, char) {
    const div = document.createElement("div")
    div.onclick = () => display(char)
    div.classList.add("charDiv")
    const head = document.createElement("h3")
    const body = document.createElement("p")
    div.appendChild(head)
    div.appendChild(body)

    head.innerHTML = char.name
    body.innerHTML = char.appearance
    parent.appendChild(div)

}

function display(char) {
    // do stuff
    // make a popup here
    // or just unhide one
    hidden.classList.remove("hide")
    const name = hidden.querySelector(".name")
    const age = hidden.querySelector(".age")
    const weight = hidden.querySelector(".weight")
    const height = hidden.querySelector(".height")
    const app = hidden.querySelector(".app")
    const bank = hidden.querySelector(".bank")
    const equipped = hidden.querySelector(".equipped")
    const affinity = hidden.querySelector(".affinity")
    const amod = hidden.querySelector(".amod")
    const power = hidden.querySelector(".power")
    const pmod = hidden.querySelector(".pmod")
    const will = hidden.querySelector(".will")
    const wmod = hidden.querySelector(".wmod")
    const cunning = hidden.querySelector(".cunning")
    const cmod = hidden.querySelector(".cmod")
    const charisma = hidden.querySelector(".charisma")
    const chmod = hidden.querySelector(".chmod")
    const resistance = hidden.querySelector(".resistance")
    const rmod = hidden.querySelector(".rmod")
    const head = hidden.querySelector(".head")
    const body = hidden.querySelector(".body")
    const internals = hidden.querySelector(".internals")
    const limbs = hidden.querySelector(".limbs")
    const tail = hidden.querySelector(".tail")
    const boon = hidden.querySelector(".boon")
    const penalty = hidden.querySelector(".penalty")
    const race = hidden.querySelector(".race")
    const skill = hidden.querySelector(".skill")
    const senses = hidden.querySelector(".senses")
    const langs = hidden.querySelector(".langs")
    const move = hidden.querySelector(".move")
    const comp = hidden.querySelector(".comp")
    const charClass = hidden.querySelector(".class")
    const abilities = hidden.querySelector(".abilities")
    const subclass  = hidden.querySelector(".subclass")
    const origin = hidden.querySelector(".origin")
    const originSkill = hidden.querySelector(".originSkill")

    name.innerHTML = `Name: ${char.name}`
    age.innerHTML = `Age: ${char.age}`
    weight.innerHTML = `Weight:${char.weight}` 
    height.innerHTML = `Height:${char.height}`
    app.innerHTML = `Appearance:${char.appearance}`
    bank.innerHTML = `Starting GC:${char.bank}`
    equipped.innerHTML = `Equipped:${char.equipped}`

    affinity.innerHTML = `Affinity:${char.stats.affinity}`
    amod.innerHTML = `Modifier:${Math.floor((char.stats.affinity -50) / 5)}`
    power.innerHTML = `Power:${char.stats.power}`
    pmod.innerHTML = `Modifier:${Math.floor((char.stats.power -50 )/ 5)}`
    will.innerHTML = `Will:${char.stats.will}`
    wmod.innerHTML = `Modifier:${Math.floor((char.stats.will -50 )/ 5)}`
    cunning.innerHTML = `Cunning:${char.stats.cunning}`
    cmod.innerHTML = `Modifier:${Math.floor((char.stats.cunning -50 )/ 5)}`
    charisma.innerHTML = `Charisma:${char.stats.charisma}`
    chmod.innerHTML = `Modifier:${Math.floor((char.stats.charisma -50 )/ 5)}`
    resistance.innerHTML = `Resistance:${char.stats.resistance}` 
    rmod.innerHTML = `Modifier:${Math.floor((char.stats.resistance -50 )/ 5)}`

    head.innerHTML = `Head:${char.hp.Head}`
    body.innerHTML = `Body:${char.hp.Body}`
    internals.innerHTML = `Internals:${char.hp.Internals}`
    limbs.innerHTML = `Limbs:${char.hp.Limbs}`
    tail.innerHTML = `Tail:${char.hp.Tail}`

    boon.innerHTML = `Miasmic Boon:${char.me.boon}`
    penalty.innerHTML = `Miasmic Penalties:${char.me.penalties}`
    race.innerHTML = `Race:${char.race.type}`
    skill.innerHTML = `Skills:${char.race.skills}`
    senses.innerHTML = `Senses:${char.race.senses}`
    langs.innerHTML = `Languages:${char.race.languages}`
    move.innerHTML = `Movement Type:${char.race.movementType}`
    comp.innerHTML = `Composure:${char.race.composure}`
    charClass.innerHTML = `Class:${char.charClass.type}`
    abilities.innerHTML = `Abilities:${char.charClass.abilities}`
    subclass.innerHTML = `Subclass:${char.charClass.subclass}`
    origin.innerHTML = `Origin:${char.origin.type}`
    originSkill.innerHTML = `Skills:${char.origin.skills}`

}
console.log(closebtn)
closebtn.onclick = () => hidden.classList.add("hide")


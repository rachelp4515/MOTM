

const affinityInput = document.getElementById("affinity")
const powerInput = document.getElementById("power")
const willInput = document.getElementById("will")
const cunningInput = document.getElementById("cunning")
const charismaInput = document.getElementById("charisma")
const resInput = document.getElementById("resistance")

const charName = document.getElementById("name")
const age = document.getElementById("age")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const appArea = document.getElementById("appArea")

const head = document.getElementById("head")
const body = document.getElementById("body")
const internals = document.getElementById("internals")
const limbs = document.getElementById("limbs")
const tail = document.getElementById("tail")

const race = document.getElementById("race")
const raceSkills = document.getElementById("raceSkills")
const senses = document.getElementById("senses")
const langs = document.getElementById("langs")
const move = document.getElementById("move")

const charClass = document.getElementById("charClass")
const subclass = document.getElementById("subclass")
const abilities = document.getElementById("abilities")
const equipped = document.getElementById("equipped")
const gcStart = document.getElementById("gcStart")
const composure = document.getElementById("composure")

const origin = document.getElementById("origin")
const originAffinity = document.getElementById("originAffinity")
const originSkills = document.getElementById("originSkills")
const miasmicBoon = document.getElementById("miasmicBoon")
const miasmicPenalties = document.getElementById("miasmicPenalties")

const inputs = document.querySelectorAll('.mod-input')
const displays = document.querySelectorAll('.mod-output')

const submit = document.getElementById("create")

chars = getLocalStorage()

inputs.forEach((input, i) => input.addEventListener("input", () => roll(input, displays[i])))

submit.addEventListener("click",(e) => create(e, chars))

// dice mods
function roll(input, display){
    output = (input.value-50) / 5
    display.innerHTML = `Modifier: ${Math.floor(output)}`
}






function create(e, chars) {
    e.preventDefault()
    const char = {
    
            name: charName.value,
            age: age.value,
            weight: weight.value,
            height: height.value,
            appearance: appArea.value,
            bank: gcStart.value,
            equipped: equipped.value,
            stats: {
                affinity: affinityInput.value,
                power: powerInput.value,
                will: willInput.value,
                cunning: cunningInput.value,
                charisma: charismaInput.value,
                resistance: resInput.value,
            },
            hp: {
                Head: head.value,
                Body: body.value,
                Internals: internals.value,
                Limbs: limbs.value,
                Tail: tail.value,
            },
            me:{
                boon: miasmicBoon.value,
                penalties: miasmicPenalties.value,
            },
            race: {
                type:race.value,
                skills: raceSkills.value,
                senses: senses.value,
                languages: langs.value,
                movementType: move.value,
                composure: composure.value, 
            },
            charClass: {
                type: charClass.value,
                abilities: abilities.value,
                // [Wayfinder, Cool Headed, Endurance]
                subclass:subclass.value,
            },
            origin: {
                type: origin.value,
                Affinity: originAffinity.value,
                skills: originSkills.value,
            }
    }
    chars.push(char)
    setLocalStorage(chars)
    window.location.replace("/charStuff/charSheets.html")
}







// }




































// add a character

// // create the char based on inputs
// const char = {name: "bleh", otherCrap: "asdf"}

// // get the whole list of chars
// const chars = getLocalStorage()

// // add char to that array
// chars.push(char)

// // update in memory
// setLocalStorage(chars)

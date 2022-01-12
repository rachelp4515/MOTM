
//amounts
const d4a = document.getElementById('d4a')
const d6a = document.getElementById('d6a')
const d8a = document.getElementById('d8a')
const d10a = document.getElementById('d10a')
const d12a = document.getElementById('d12a')
const d20a = document.getElementById('d20a')
const d100a = document.getElementById('d100a')
// mods
const d4mod = document.getElementById('d4mod')
const d6mod = document.getElementById('d6mod')
const d8mod = document.getElementById('d8mod')
const d10mod = document.getElementById('d10mod')
const d12mod = document.getElementById('d12mod')
const d20mod = document.getElementById('d20mod')
const d100mod = document.getElementById('d10mod')
//results
const d4res = document.getElementById('d4res')
const d6res = document.getElementById('d6res')
const d8res = document.getElementById('d8res')
const d10res = document.getElementById('d10res')
const d12res = document.getElementById('d12res')
const d20res = document.getElementById("d20res")
const d100res = document.getElementById('d100res')
//buttons
const d4btn = document.getElementById('d4btn')
const d6btn = document.getElementById('d6btn')
const d8btn = document.getElementById('d8btn')
const d10btn = document.getElementById('d10btn')
const d12btn = document.getElementById('d12btn')
const d20btn = document.getElementById('d20btn')
const d100btn = document.getElementById('d100btn')
//notes
const notes = document.getElementById('notes')


// a * (roll + mod)

d4btn.addEventListener("click", d4roll)
d6btn.addEventListener("click", d6roll)
d8btn.addEventListener("click", d8roll)
d10btn.addEventListener("click", d10roll)
d12btn.addEventListener("click", d12roll)
d20btn.addEventListener("click", d20roll)
d100btn.addEventListener("click", d100roll)
notes.addEventListener("change", () => setLocalStorage(notes.value))
console.log(notes)


function d4roll() {
    num = (Math.random() * 4 + 1 + d4mod.value ) * d4a.value
    d4res.innerHTML = Math.floor(num)
}
function d6roll(){
    num = (Math.random() * 6 + 1 + d6mod.value ) * d6a.value
    d6res.innerHTML = Math.floor(num)
}
function d8roll(){
    num = (Math.random() * 8 + 1 + d4mod.value ) * d8a.value
    d8res.innerHTML = Math.floor(num)
}
function d10roll(){
    num = (Math.random() * 10 + 1 + d10mod.value ) * d10a.value
    d10res.innerHTML = Math.floor(num)
}
function d12roll(){
    num = (Math.random() * 12 + 1 + d12mod.value ) * d12a.value
    d12res.innerHTML = Math.floor(num)
}
function d20roll(){
    num = (Math.random() * 20 + 1 + d20mod.value ) * d20a.value
    d20res.innerHTML = Math.floor(num)
}
function d100roll() {
    num = (Math.random() * 100 + d100mod.value) * d100a.value
    d100res.innerHTML = Math.floor(num)
}



// function rollAny(mod, amt, die){
//     num = (Math.random() * die  + mod) * amt
// }
function getLocalStorage(){
    let localString = localStorage.getItem("motm-notes")
    if(localString == null){
        localString = ""
    }
    return localString
}
function setLocalStorage(notes){
    localStorage.setItem("motm-notes", notes)
}

notes.value = getLocalStorage()
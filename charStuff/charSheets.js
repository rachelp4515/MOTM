

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
    console.log(char.name)
    hidden.classList.remove("hide")
    const name = hidden.querySelector(".name")
    // const
    // const
    // const
    // const
    // const
    // const
    // const
    // const
    // const
    // const
    // const
    name.innerHTML = `Name: ${char.name}`
}
console.log(closebtn)
closebtn.onclick = () => hidden.classList.add("hide")


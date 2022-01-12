import { getLocalStorage, setLocalStorage } from "../utils";



// add a character

// create the char based on inputs
const char = {name: "bleh", otherCrap: "asdf"}

// get the whole list of chars
const chars = getLocalStorage()

// add char to that array
chars.push(char)

// update in memory
setLocalStorage(chars)

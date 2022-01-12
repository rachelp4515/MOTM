export function getLocalStorage() { // ALWAYS CALL BEFORE USING SETLOCALSTORAGE
    let localString = localStorage.getItem("motm-chars")
    if(localString == null) {
        localString = "[]"
    }
    return JSON.parse(localString)
}

export function setLocalStorage(chars) {
    localStorage.setItem("motm-chars", JSON.stringify(chars))
}
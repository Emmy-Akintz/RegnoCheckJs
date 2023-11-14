let regno = prompt("Enter your reg number:")
const regnoInit = Number(regno.slice(0, 2))

if (regno.length == 7) {
    if (regnoInit >= 10 && regnoInit <= 24) {
        document.write(`Your reg no (${regno}) is valid!<br>`)
    } else {
        document.write(`Your reg no (${regno}) is invalid!<br>`)
    }
} else if (regno.length == 8) {
    if (regnoInit >= 25) {
        document.write(`Your reg no (${regno}) is valid!<br>`)
    } else {
        document.write(`Your reg no (${regno}) is invalid!<br>`)
    }
} else {
    document.write(`Your reg no (${regno}) is invalid!<br>`)
}
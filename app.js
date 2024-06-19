/*

//Задача №1
const regExp = /^\d+$/

const containsOnlyDigits = (input) => {
    if (regExp.test(input)) {
        return true
    } else
        return false
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

*/


/*

//Задача №2
const interval = setInterval(() => {
    console.log("Прошла 1 секунда!")
}, 1000)

setTimeout(() => {
    clearInterval(interval)
}, 10000)

*/


/*
//Задача №3
const count = () => {
    let i = 0;
    const interval = setInterval(() => {
        i += 1
        console.log(i)
    }, 1000);

    setTimeout(() => {
        clearInterval(interval)
    }, 10000)
}

count()

*/

/*
//Задача №5

const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.onload = () => {
    const data = JSON.parse(request.response)
    console.log(data)
}
*/

/*
//Задача №4

const block = document.querySelector('.block')
const body = document.querySelector('body')


block.onclick = () => {
    body.classList.toggle('green')
}

 */





let typeNumber = 45;
let typeString = "45";
let typeboolean = false;
let typeundefined = undefined;
let tpyenull = null;


let typelist = [
    50,
    77,
    29,
    100,
    47,
    "Leonardo",
    "Brandon",
    "Jose",
    "miguel",
    "Francisco",
    false
]

let typeObject = {
    name: "Frank",
    email: "francho714@gmail.com",
    pass: "1234"
}

// console.log(typeObject["name"])


let variable1 = 5
let variable2 = null
let variable3 = 8
let variable4 = 2
let variable5 = false
let variable6 = 0

// if (false) console.log("se cumple") 
//     else console.log("no se cumplio")

/* cree una funcion que valide si un numero es par o impar, de ser par, retorne "par": string, de ser impar, retorne "impar": string */

// function myFunction (num1, num2, validation) {
//    return validation
//     ? num1 + num2
//     : num1 - num2
// }

// console.log(myFunction (3, 8, true));

// function isPar (num) {
//     if (num % 2 == 0) return "par"
//     else return "impar"
// }

// console.log( isPar(17))


// function par (num) {
//     return num % 2 ? "impar" : "par"
// }
//     console.log ( par (1))



// let isParFlecha = (num) => 
//     num % 2 ? "impar" : "par"

//     console.log (isParFlecha(12))


// let callBack = () => {
//     console.log("se ejecuto el callback")
// }
//     setTimeout (callBack , 5000)

   axios.get("https://leonardoapi.onrender.com/music")
   .then((rec) => {
        console.log(rec)
   })



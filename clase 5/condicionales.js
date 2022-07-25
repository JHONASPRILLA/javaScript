let age=15;
// condicionales con if o si
if (age>18) {
    // console.log("eres mayor de edad")
    document.write("Eres mayor de edad vamos pa onde las putas")
}

// condicionales con if-else o sino
if (age>=18) {
    document.write("putas")
} else {
    document.write("vaya vea television")
}


// condicionales con swith o segun
let personName="jhon"
switch (personName) {
    case "jhon":
        console.log(`a ${personName} le gusta free fire`)
        break
    case "estevenson":
        console.log("es el monitor de front end")
        break
    default:    
        break;
}

// operador ternario
let personGenero="Hombre"
personGenero=="Mujer"? console.log("es una mujer que haces aqui deberias estar en la cocina"):console.log("es un hombre")
personGenero=="Hombre"? console.log("macho pecho peludo"):console.log("eres una mujer deberias estar en la cocina")

// operador ternario mas ejemplos

let personAge=Number(prompt("ingrese su edad"))

personAge > 18 ? console.log("vamos pa onde las putas mi papa"): console.log("muy suave manito")
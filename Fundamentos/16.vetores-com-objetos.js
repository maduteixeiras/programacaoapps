const ListUsers = [
    {Name: "Ana", Age: 19},
    {Name: "Maria", Age: 18},
    {Name: "Amanda", Age: 22},
    {Name: "Eduarda", Age: 11}

]

const ListNames = [
    "Nikolas", "Evandro", "Santos", "Gerson"
]

// const ListNumber [1,2,3,4,5,6,7,8,9,10.11,12,13,14,15,16,17,18,19,20...]
// Forma simplificada: 
const ListNumbers = [];
for (let i = 1; i <= 100; i++) {
  ListNumbers.push(i);
}

// forEach: projetado para percorrer coleções (arrays, listas) e executar uma função de callback para cada elemento. Ele simplifica loops, tornando o código mais legível ao eliminar a necessidade de gerenciar índices manualmente
console.log("Exibindo todos os usuários do vetor.")
ListUsers.forEach(u => {
    console.log(u.Name, "tem", u.Age, "anos")
})

// Versão antiga do forEach, antes do ES6:
// for (let i = 0; i <= ListUsers.length; i++) {
//     console.log(ListUsers[i].Name, "tem", ListUsers[i].Age)
// }

console.log("\nFiltrando maiores de 18 anos:")
const Majority = ListUsers.filter(n => n.Age >= 18)

Majority.forEach(n => {
    console.log(n.Name, "tem", n.Age, "anos")
})

console.log("\nDobrando idade:")
const DoubleAge = ListUsers.map(u => ({
    Name: u.Name,
    Double: u.Age * 2
}))
DoubleAge.forEach(n => {
    console.log("O dobro da idade de", n.Name, "é", n.Double)
})

console.log("\nFiltrando menores de 18 anos: ")
const Babys = ListUsers.filter(a => a.Age < 18)
Babys.forEach(a =>{
    console.log(a.Name, "tem", a.Age, "anos. Portando, é menor de idade")
})

console.log("\nNa ListNumbers, filtre apenas os números pares: ")
const Duos = ListNumbers.filter(p => p % 2 == 0 )
Duos.forEach( p => {
    console.log(p)
})

console.log("Na ListNames, exiba todos os nomes com forEach: ")
ListNames.forEach(u => {
    console.log("Nome:", u)
})

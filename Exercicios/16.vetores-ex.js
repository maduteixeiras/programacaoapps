const ListAlunos = [
    {Name: "Ana", Nota: 5.0},
    {Name: "Bruno", Nota: 10.0},
    {Name: "Carla", Nota: 2.0},
    {Name: "Andrea", Nota: 7.0},
    {Name: "Marta", Nota: 6.0}
];

console.log("Encontre aluna MARTA e mostre o nome e a nota dela: ")
const FindMarta = ListAlunos.find(f => f.Name === "Marta")
console.log("Aluna encontrada: ", FindMarta.Name, "\nNota: ", FindMarta.Nota)

console.log("\nMostre a média geral doa alunos")
const Med = ListAlunos.reduce((total, u) => (total + u.Nota) / 5, 0 )
console.log("Média dos alunos: " ,Med)

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0")

console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0")


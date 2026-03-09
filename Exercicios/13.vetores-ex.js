// Exercício 13: Vetores
// Crie um vetor com nome de seus 6 familiares
// Use todos os comandos visto em vetores apos criar a lista

// Criando a lista com 5 elementos iniciais:
const ListFamily =["Madu", "Leila" , "Gerson" , "Lua" , "Jeferson"]
console.log(ListFamily)
// Adicionando um novo nome no vetor:
ListFamily.push("Raimundo")
console.log(ListFamily)
// Removendo último elemento do vetor:
ListFamily.pop()
console.log(ListFamily)
// Removendo primeiro elemneto do vetor:
ListFamily.shift()
console.log(ListFamily)
// Removendo um elemento do vetor: (Remover Lua)
ListFamily.splice(2,1)
console.log(ListFamily)
// Ver o tramanho do vetor:
console.log(ListFamily.length)



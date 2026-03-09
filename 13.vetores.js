// Vetores: 
 console.log("- Criando um vetor de nomes com 4 elementos iniciais:")
const ListName = ["Denis", "Maria", "João", "Ana"]

console.log(ListName[0]) // Denis
console.log(ListName[1]) // Maria
console.log(ListName[2]) // João
console.log(ListName[3]) // Ana    

// Adicionar um novo nome no vetor:
console.log("\n- Adicionando um novo nome (Carlos) no vetor:")
ListName.push("Carlos")
console.log(ListName) // ["Denis", "Maria", "João", "Ana", "Carlos"]

// Remover um elemento do vetor:
console.log("\n- Removendo o elemento na posição 2 (João):")
ListName.splice(2,1) // Remove o elemento na posição 2 (João)
console.log(ListName) // ["Denis", "Maria", "Ana", "Carlos"]

console.log("\n- Removendo o elemento na posição 1 (Maria):")
ListName.splice(1,1)
console.log(ListName) // ["Denis", "Ana", "Carlos"]

// Removendo apenas o último elemento do vetor:
console.log("\n- Removendo o último elemento do vetor (Carlos):")
ListName.pop() // Remove o último elemento do vetor (Carlos)
console.log(ListName) // ["Denis", "Ana"]

// Removendo apenas o primeiro elemento do vetor:
console.log("\n- Removendo o primeiro elemento do vetor (Denis):")
ListName.shift() // Remove o primeiro elemento do vetor (Denis)
console.log(ListName) // ["Ana"]
.
// Tamanho do vetor:
console.log("\n- Tamanho do vetor:")
console.log(ListName.length) // 4
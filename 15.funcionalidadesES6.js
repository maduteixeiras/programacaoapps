// Novas recursos do ES6

// Vetor de numeros
const ListNumbers = [1,2,3,4,5]
const ListNames = ["Alice", "Bob", "Charlie", "David", "Eve"]

// Map = função de array que percorre o vetor e retorna um novo vetor
// mapo serve para que consigo fazer operações em cada elemento do vetor e retornar um novo vetor com os resultados, evitando usar laços de repetição como for ou while para percorrer o vetor e fazer as operações manualmente.
const dobrados = ListNumbers.map(n => n * 2)
console.log("Vetor original: ", ListNumbers) // [1,2,3,4,5]
console.log("Vetor dobrados: ", dobrados) // [2,4,6,8,10]

// filter = função de array que percorre o vetor e retorna um novo vetor com os elementos que satisfazem uma condição, ou seja, é usado para filtrar os elementos do vetor com base em uma condição específica, retornando apenas aqueles que atendem a essa condição.
const pares = ListNumbers.filter(n => n % 2 == 0)
console.log("Vetor original - pares: ", pares) // [2,4]

// reduce é para reduzir o vetor a um único valor, ou seja, é usado para acumular os valores do vetor em um único resultado, aplicando uma função de redução que combina os elementos do vetor de acordo com uma lógica específica.
const soma = ListNumbers.reduce((soma, atual) => soma + atual, 0)
console.log("Soma dos números do vetor original: ", soma) // 15
 
const names = ListNames.map(n => n.length > 5)
console.log("Nomes com mais de 5 caracteres: ", names) 

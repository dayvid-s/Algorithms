
function twoSum(arrayOfnumsOnFunction: number[], target: number): number[] {
    const complements: { [key: number]: number } = {};

    for (let index = 0; index < arrayOfnumsOnFunction.length; index++) {
        const actualNumOfFor = arrayOfnumsOnFunction[index];
        const complement = target - actualNumOfFor;

        if (complement in complements) {
            // ex: caso o target seja 9, e o numero atual do for seja 2 ele procura a variavel complement
            // a variavel complement é 7.
            // aqui pode ser a parte final do programa.
            return [complements[complement], index]; // esse complemente[complement] é como se fosse
            // complement.7  , que retorna a posição 1
        }
        { console.log('primeiro', complements) }
        complements[actualNumOfFor] = index;
        { console.log('segundo', complements) }
    }

    return [];
}

// Exemplo de uso
const arrayOfnumsOnFunction = [9, 7, 11, 3, 42, 131, 3131, 31, 2];
const target = 9;
const result = twoSum(arrayOfnumsOnFunction, target);
console.log(result); // Output: [1, 3]

// A função twoSum é definida, recebendo dois parâmetros: nums, que é um array de números, e target, que é o valor alvo da soma.

// const complements: { [key: number]: number } = {}; cria um objeto complements vazio para armazenar os complementos de cada número encontrado.

// Inicia-se um loop for para iterar pelos elementos do array nums. A variável i é o índice atual do loop.

// Dentro do loop, a variável actualNumOfFor é atribuída ao elemento atual do array nums.

// Calcula-se o complemento subtraindo o actualNumOfFor do target, e armazena-o na variável complement.

// Em seguida, verifica-se se o complement já existe como uma chave no objeto complements usando if (complement in complements). Isso é feito para verificar se encontramos um par de números que soma o target.

// Se o complemento existir no objeto complements, significa que encontramos uma solução. Então, retornamos um array contendo os índices correspondentes aos valores encontrados: [complements[complement], i]. O complements[complement] retorna o índice do complemento armazenado no objeto complements, e i é o índice do número atual.

// Caso contrário, se o complemento não existir no objeto complements, adicionamos o actualNumOfFor como uma chave no objeto e atribuímos o valor i a ele. Isso nos permitirá verificar se futuros números têm o complemento correspondente.

// Depois de percorrer todos os elementos do array nums e não encontrar uma solução, retornamos um array vazio [].

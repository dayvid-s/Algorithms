// In this task you will learn to "reverse" a string and remove unnecessary characters.
function isWerewolf(target: string) {
    let reversedString = ''

    for (let i = target.length - 1; i >= 0; i--) {
        reversedString += target[i]

    }
    const stringCoverted = reversedString
        .replace(/[^a-zA-Z0-9]/g, '').
        toLowerCase()

    const targetConverted = target.
        replace(/[^a-zA-Z0-9]/g, '')
        .toLowerCase()

    return stringCoverted === targetConverted;

}


// tudo isso podia ser reduzido para o codigo seguinte:


// function isWerewolf(target) {
    // Remove espaços e pontuação, converte para minúsculas e inverte a string
    // const cleanedAndReversed = target.replace(/[^A-Za-z]/g, '').toLowerCase().split('').reverse().join('');

    // Converte a string original para minúsculas
    // const targetLower = target.replace(/[^A-Za-z]/g, '').toLowerCase();

    // Compara a string original com a versão limpa e invertida
    // return targetLower === cleanedAndReversed;
// }

// const cleanedAndReversed = target.replace(/[^A-Za-z]/g, '').toLowerCase().split('').reverse().join('');
// Esta linha faz várias operações em sequência.Vou explicar cada parte individualmente:

// target.replace(/[^A-Za-z]/g, ''):

// Nesta parte, usamos o método replace() de strings com uma expressão regular / [^ A - Za - z] / g para substituir todos os caracteres que não são letras maiúsculas ou minúsculas por uma string vazia ''.
// A expressão regular / [^ A - Za - z] / g corresponde a qualquer caractere que não seja uma letra maiúscula(A - Z) ou minúscula(a - z).
// Isso remove espaços, pontuação e outros caracteres não alfabéticos da string original target.
// .toLowerCase():

// Depois de remover os caracteres não alfabéticos, usamos o método toLowerCase() para converter todos os caracteres restantes para letras minúsculas.
// Isso garante que a comparação seja insensível a maiúsculas / minúsculas.
// .split(''):

// Agora que temos uma string limpa e em minúsculas, usamos o método split('') para dividir a string em um array de caracteres individuais.
// Passar uma string vazia '' como argumento para split faz com que a string seja dividida em seus caracteres individuais, criando um array com cada caractere como um elemento separado.
// .reverse():

// Depois de dividir a string em caracteres individuais, usamos o método reverse() para inverter a ordem dos elementos no array.
// Isso significa que o primeiro caractere se torna o último e o último se torna o primeiro.
// .join(''):

// Finalmente, usamos o método join('') para unir os elementos do array de volta em uma única string.
// Passar uma string vazia '' como argumento para join faz com que os elementos do array sejam concatenados sem nenhum espaço ou caractere entre eles.
// Em resumo, essa linha de código remove caracteres não alfabéticos, converte a string resultante em minúsculas, a divide em caracteres individuais, a inverte e, em seguida, a junta novamente.O resultado é uma string que representa a string original em ordem inversa, com maiúsculas / minúsculas e caracteres não alfabéticos ignorados.






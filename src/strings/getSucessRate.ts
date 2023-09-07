// Crie a função getSuccessRate que aceita a string statistic e retorna a
// porcentagem de estudantes que entenderam o material.
// exemplo:
// getSuccessRate('11100'); // 60
// getSuccessRate('1100'); // 50
// getSuccessRate('000000'); // 0
// getSuccessRate('11111'); // 100
// getSuccessRate(''); // 0


function getSuccessRate(statistic: string) {
    if (statistic.length === 0) {
        return 0
    }

    let StudentsWhoUnderstood = 0
    for (const letter of statistic) {
        if (letter === '1') {
            StudentsWhoUnderstood++
        }
    }
    // The above code could have been reduced to:
    // const StudentsWhoUnderstood = (statistic.match(/1/g) || []).length;



    const sucessRate = (StudentsWhoUnderstood
        / statistic.length) * 100
    return sucessRate
}


// statistic.match(/1/g): Usa a expressão regular / 1 / g para encontrar todas
//  as ocorrências do caractere '1' na
// string statistic.O g no final da expressão regular indica que deve ser feita uma
// correspondência global, ou seja, todas as ocorrências devem ser encontradas,
// não apenas a primeira.
